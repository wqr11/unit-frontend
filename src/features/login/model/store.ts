import { createStore, createEvent, createEffect, sample } from "effector";
import { LoginFormSchema, LoginFormType } from "@/entities/auth/schemas";
import { loginFx } from "@/entities/auth/model";
import { notificationModel } from "@/entities/notifications";

export const setEmail = createEvent<string>();
export const $email = createStore<string>("").on(setEmail, (_, data) => data);

export const setPassword = createEvent<string>();
export const $password = createStore<string>("").on(
  setPassword,
  (_, data) => data
);

export const submit = createEvent<void>();

const formatFieldsFx = createEffect<LoginFormType, LoginFormType, Error>(
  async (fields: LoginFormType) => {
    const { email, password } = await LoginFormSchema.parseAsync(fields);
    return { email, password };
  }
);

sample({
  clock: submit,
  source: {
    email: $email,
    password: $password,
  },
  target: formatFieldsFx,
});

sample({
  source: formatFieldsFx.doneData,
  target: loginFx,
});

sample({
  clock: formatFieldsFx.fail,
  target: notificationModel.notify.prepend(() => ({
    title: "Ошибка",
    text: "Неправильный формат данных",
  })),
});
