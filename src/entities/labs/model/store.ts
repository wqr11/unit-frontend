import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { ILabTestResult, LabsApi, TestLabsParams, UpdateLabsParams } from "..";
import { notificationModel } from "@/entities/notifications";
import { routerModel } from "@/entities/router";
import { LabsSaved } from "./types";

export const createLab = createEvent<void>();

export const addLabTestResult = createEvent<ILabTestResult>();

export const getLabsBySubjectIdFx = createEffect(async (subjectId: string) => {
  const labs = await LabsApi.list(subjectId);

  return { subjectId, labs };
});

export const getLabByIdFx = createEffect(async (id: string) => {
  return await LabsApi.getById(id);
});

export const createLabFx = createEffect(async (subjectId: string) => {
  const createdLab = await LabsApi.create({ subjectId });

  return { subjectId, labs: [createdLab] };
});

export const updateLabFx = createEffect(async (params: UpdateLabsParams) => {
  return await LabsApi.update(params);
});

export const deleteLabFx = createEffect(async (id: string) => {
  return await LabsApi.delete(id);
});

export const testLabsFx = createEffect(async (params: TestLabsParams) => {
  return await LabsApi.test(params);
});

/* @TODO: ADD PAGINATION LATER! */
/* @TODO: Add KEY (subjectId) - VALUE (labs) */
export const $labs = createStore<LabsSaved>({})
  .on(getLabsBySubjectIdFx.doneData, (state, { labs, subjectId }) => ({
    ...state,
    [subjectId]: labs,
  }))
  .on(createLabFx.doneData, (state, { labs, subjectId }) => ({
    ...state,
    [subjectId]: [...state?.[subjectId], ...labs],
  }));
// .on(updateLabFx.doneData, (state, changed) => {
//   const oldLab = state.find((s) => s.id === changed.id)!;

//   return [
//     ...state.filter((s) => s.id !== changed.id),
//     { ...oldLab, ...changed },
//   ];
// })
// .on(deleteLabFx, (state, deletedId) =>
//   state.filter((l) => l.id !== deletedId)
// );

export const $labsForCurrentSubject = combine(
  $labs,
  routerModel.$subjectId,
  (labs, subjectId) => (subjectId ? labs?.[subjectId] || [] : [])
);

export const $lastTestedLabId = createStore<string | null>(null).on(
  testLabsFx,
  (_, data) => data.id
);

export const $labsTestResults = createStore<ILabTestResult[]>([]).on(
  addLabTestResult,
  (state, data) => [...state.filter((d) => d.id !== data.id), data]
);

sample({
  clock: createLab,
  source: routerModel.$subjectId,
  filter: (subjectId) => !!subjectId,
  fn: (sId) => sId!,
  target: createLabFx,
});

sample({
  clock: updateLabFx,
  target: notificationModel.notify.prepend(() => ({
    title: "Успех",
    text: "Изменено",
  })),
});

sample({
  clock: testLabsFx.doneData,
  source: $lastTestedLabId,
  filter: (id) => !!id,
  fn: (id, data) => ({ id: id!, ...data }),
  target: addLabTestResult,
});
