import { signUpFx } from "@/entities/auth/model";
import { notificationModel } from "@/entities/notifications";
import { SignUpFormSchema, SignUpFormType } from "@/entities/auth/schemas";
import { createStore, createEvent, createEffect, sample } from "effector";

export const setName = createEvent<string>();
export const $name = createStore<string>("").on(setName, (_, data) => data);

export const setEmail = createEvent<string>();
export const $email = createStore<string>("").on(setEmail, (_, data) => data);

export const setPassword = createEvent<string>();
export const $password = createStore<string>("").on(
  setPassword,
  (_, data) => data
);

export const setConfirmPassword = createEvent<string>();
export const $confirmPassword = createStore<string>("").on(
  setConfirmPassword,
  (_, data) => data
);

export const submit = createEvent<void>();

const formatFieldsFx = createEffect<SignUpFormType, SignUpFormType, Error>(
  async (fields: SignUpFormType) => {
    return await SignUpFormSchema.parseAsync(fields);
  }
);

sample({
  clock: submit,
  source: {
    name: $name,
    email: $email,
    password: $password,
    confirmPassword: $confirmPassword,
  },
  target: formatFieldsFx,
});

sample({
  clock: formatFieldsFx.doneData,
  target: signUpFx,
});

sample({
  clock: formatFieldsFx.fail,
  target: notificationModel.notify.prepend(() => ({
    title: "Ошибка",
    text: "Неправильный формат данных",
  })),
});
