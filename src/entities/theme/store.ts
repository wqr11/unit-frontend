import { createEvent, createStore } from "effector";
import { ThemeVariant } from "./types";

export const setTheme = createEvent<ThemeVariant>();
export const $theme = createStore<ThemeVariant>("light").on(
  setTheme,
  (_, data) => data
);

export * from "./types";
