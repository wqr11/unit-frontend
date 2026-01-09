import { combine, createEffect, createStore } from "effector";
import { Subject, SubjectApi, SubjectCreateParams } from "../api";
import { routerModel } from "@/entities/router";

export const createSubjectFx = createEffect(
  async (params: SubjectCreateParams) => {
    const { data } = await SubjectApi.create(params);
    return data;
  },
);

export const getSubjectsFx = createEffect(async () => {
  const { data } = await SubjectApi.list();
  return data;
});

export const $subjects = createStore<Subject[]>([])
  .on(getSubjectsFx.doneData, (_, data) => data)
  .on(createSubjectFx.doneData, (state, data) => [...state, data]);

export const $subject = combine(
  $subjects,
  routerModel.$subjectId,
  (subs, subId) => subs.find((sub) => sub.id === subId),
);
