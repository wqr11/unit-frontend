import { createStore, createEvent } from "effector";
import { authModel } from "@/entities/auth";

export const setSignUpModalOpen = createEvent<boolean>();
export const $signUpModalOpen = createStore<boolean>(false)
  .on(setSignUpModalOpen, (_, data) => data)
  .on(authModel.getTokensFromCookies.fail, () => true);

export const setLoginModalOpen = createEvent<boolean>();
export const $loginModalOpen = createStore<boolean>(false).on(
  setLoginModalOpen,
  (_, data) => data
);
