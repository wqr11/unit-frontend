import { authModel } from "@/entities/auth";
import { createStore, createEvent, combine } from "effector";

export const $authModalOpen = combine(authModel.$isAuth, (isAuth) => !isAuth);

export const toggleModalType = createEvent<void>();
export const $authModalType = createStore<"SIGNUP" | "LOGIN">("LOGIN").on(
  toggleModalType,
  (state) => (state === "LOGIN" ? "SIGNUP" : "LOGIN"),
);
