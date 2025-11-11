import { createEvent, createStore } from "effector";

export const setLabId = createEvent<string | null>();
export const $labId = createStore<string | null>(null).on(
  setLabId,
  (_, data) => data,
);

export const setSubjectId = createEvent<string | null>();
export const $subjectId = createStore<string | null>(null).on(
  setSubjectId,
  (_, data) => data,
);
