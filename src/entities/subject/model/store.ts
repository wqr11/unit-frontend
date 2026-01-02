import { createEffect, createEvent, createStore } from "effector";
import { Subject, SubjectApi } from "../api";

export const getSubjectsFx = createEffect(async () => {
  const { data } = await SubjectApi.list();
  return data;
});

export const $subjects = createStore<Subject[]>([]).on(
  getSubjectsFx.doneData,
  (_, data) => data
);
