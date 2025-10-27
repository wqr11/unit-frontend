import { createStore, createEffect, combine, sample, split } from "effector";
import { AxiosError } from "axios";
import { AuthApi } from "..";
import {
  LoginFxParams,
  LoginFxResult,
  SignUpFxParams,
  SignUpFxResult,
} from "./types";
import { CookieUtils } from "@/utils/cookie";
import { notificationModel } from "@/entities/notifications";

// run this in init()
export const getTokensFromCookies = createEffect(() => {
  const { access, refresh } = CookieUtils.getTokensFromCookies();

  if (!access && !refresh) {
    throw new Error("No tokens found");
  }

  return { access, refresh };
});

export const signUpFx = createEffect<
  SignUpFxParams,
  SignUpFxResult,
  AxiosError
>(async ({ name, email, password }) => {
  const { data } = await AuthApi.signUp({ name, email, password });
  return data;
});

const $lastUsedSignUpCredentials = createStore<SignUpFxParams | null>(null).on(
  signUpFx,
  (_, data) => data
);

export const loginFx = createEffect<LoginFxParams, LoginFxResult>(
  async ({ email, password }) => {
    const { data } = await AuthApi.login({ email, password });
    return data.result;
  }
);

export const refreshFx = createEffect<void, void>(async () => {
  const { data } = await AuthApi.refresh();
  return data;
});

export const signOutFx = createEffect(async () => {
  CookieUtils.deleteTokenCookies();
});

export const $accessToken = createStore<string | null>(null)
  .on(loginFx.doneData, (_, data) => data.access)
  .on(getTokensFromCookies.doneData, (_, { access }) => access)
  .reset(signOutFx.done);

export const $refreshToken = createStore<string | null>(null)
  .on(loginFx.doneData, (_, data) => data.refresh)
  .on(getTokensFromCookies.doneData, (_, { refresh }) => refresh)
  .reset(signOutFx.done);

export const $authTokens = combine(
  $accessToken,
  $refreshToken,
  (access, refresh) => ({ access, refresh })
);

export const $isAuth = combine(
  $authTokens,
  ({ access, refresh }) => !!access && !!refresh
);

sample({
  clock: signUpFx.doneData,
  source: $lastUsedSignUpCredentials,
  filter: (creds) => !!creds,
  fn: (creds) => creds!,
  target: loginFx,
});

sample({
  clock: getTokensFromCookies.doneData,
  filter: ({ access, refresh }) => !access && !!refresh,
  target: refreshFx,
});

split({
  // @ts-expect-error -> Types not loaded somehow (effector's fault)
  source: signUpFx.failData,
  match: {
    USER_ALREADY_EXISTS: (err: AxiosError) => err.status === 409,
    INTERNAL_SERVER_ERROR: (err: AxiosError) => err.status === 500,
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
  // @ts-expect-error -> Types not loaded somehow (effector's fault)
  source: loginFx.failData,
  match: {
    WRONG_PASSWORD: (err: AxiosError) => err.status === 401,
    USER_NOT_FOUND: (err: AxiosError) => err.status === 404,
    JWT_SIGN_FAILURE: (err: AxiosError) => err.status === 400,
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
