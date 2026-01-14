import {
  createStore,
  createEffect,
  combine,
  sample,
  split,
  createEvent,
} from "effector";
import { AxiosError, isAxiosError } from "axios";
import { AuthApi } from "..";
import { IUser, LoginFxParams, LoginFxResult, SignUpFxParams } from "./types";
import { CookieUtils } from "@/shared/utils/cookie";
import { notificationModel } from "@/entities/notifications";

export const setAccessToken = createEvent<string | null>();
export const setRefreshToken = createEvent<string | null>();

export const getTokensFromCookies = createEffect(() => {
  const { access, refresh } = CookieUtils.getTokensFromCookies();

  if (!access && !refresh) {
    throw new Error("No tokens found");
  }

  return { access, refresh };
});

export const getMeFx = createEffect(async () => {
  const { data } = await AuthApi.getMe();
  return data;
});

export const signUpFx = createEffect<SignUpFxParams, unknown, AxiosError>(
  async (params) => {
    const { data } = await AuthApi.signUp(params);
    return data;
  }
);

const $lastUsedSignUpCredentials = createStore<SignUpFxParams | null>(null).on(
  signUpFx,
  (_, data) => data
);

export const loginFx = createEffect<LoginFxParams, LoginFxResult>(
  async ({ email, password }) => {
    const { data } = await AuthApi.login({ email, password });
    return data;
  }
);

export const refreshFx = createEffect<void, void>(async () => {
  const { data } = await AuthApi.refresh();
  return data;
});

export const signOutFx = createEffect(async () => {
  AuthApi.logout().then(() => {
    document.location.reload();
  });
});

export const $accessToken = createStore<string | null>(null)
  .on(setAccessToken, (_, data) => data)
  .on(loginFx.doneData, (_, data) => data.access_token)
  .on(getTokensFromCookies.doneData, (_, { access }) => access)
  .reset(signOutFx.done);

export const $refreshToken = createStore<string | null>(null)
  .on(setRefreshToken, (_, data) => data)
  .on(loginFx.doneData, (_, data) => data.refresh_token)
  .on(getTokensFromCookies.doneData, (_, { refresh }) => refresh)
  .reset(signOutFx.done);

export const $authTokens = combine(
  $accessToken,
  $refreshToken,
  (access, refresh) => ({ access, refresh })
);

export const $user = createStore<IUser | null>(null)
  .on(getMeFx.doneData, (_, data) => data)
  .reset(getMeFx.fail);

export const $isAuth = combine($user, (user) => !!user || false);

sample({
  clock: signUpFx.doneData,
  source: $lastUsedSignUpCredentials,
  filter: (creds) => !!creds,
  fn: (creds) => creds!,
  target: loginFx,
});

sample({
  clock: loginFx.doneData,
  target: getMeFx,
});

sample({
  clock: getTokensFromCookies.doneData,
  filter: ({ access, refresh }) => !access && !!refresh,
  target: refreshFx,
});

split({
  source: signUpFx.failData,
  match: {
    USER_ALREADY_EXISTS: (err: Error) =>
      isAxiosError(err) && err.status === 409,
    INTERNAL_SERVER_ERROR: (err: Error) =>
      isAxiosError(err) && err.status === 500,
  },
  cases: {
    USER_ALREADY_EXISTS: notificationModel.notify.prepend(() => ({
      title: "Ошибка при создании аккаунта",
      text: "Пользователь с такой почтой уже существует",
    })),
    INTERNAL_SERVER_ERROR: notificationModel.notify.prepend(() => ({
      text: "Ошибка при создании аккаунта",
      title: "Внутренняя ошибка сервера",
    })),
  },
});

split({
  source: loginFx.failData,
  match: {
    WRONG_PASSWORD: (err: Error) => isAxiosError(err) && err.status === 401,
    USER_NOT_FOUND: (err: Error) => isAxiosError(err) && err.status === 404,
    JWT_SIGN_FAILURE: (err: Error) => isAxiosError(err) && err.status === 400,
  },
  cases: {
    WRONG_PASSWORD: notificationModel.notify.prepend(() => ({
      title: "Ошибка при входе в аккаунт",
      text: "Неверный пароль",
    })),
    USER_NOT_FOUND: notificationModel.notify.prepend(() => ({
      title: "Ошибка при входе в аккаунт",
      text: "Нет пользователя с такой почтой",
    })),
    JWT_SIGN_FAILURE: notificationModel.notify.prepend(() => ({
      title: "Ошибка при входе в аккаунт",
      text: "Не удалось проверить JWT-токен",
    })),
  },
});
