import { createEvent, createStore } from "effector";
import { IUser } from "@/shared/types/db";

export const setUser = createEvent<IUser>();
export const $user = createStore<IUser | null>(null).on(
  setUser,
  (_, data) => data
);
