import { createEffect, createEvent, createStore, sample } from "effector";
import {
  ILab,
  ILabTestResult,
  LabsApi,
  TestLabsParams,
  UpdateLabsParams,
} from "..";
import { notificationModel } from "@/entities/notifications";
import { routerModel } from "@/entities/router";

export const createLab = createEvent<void>();

export const addLabTestResult = createEvent<ILabTestResult>();

export const getLabsBySubjectIdFx = createEffect(async (subjectId: string) => {
  return await LabsApi.list(subjectId);
});

export const getLabByIdFx = createEffect(async (id: string) => {
  return await LabsApi.getById(id);
});

export const createLabFx = createEffect(async (subjectId: string) => {
  return await LabsApi.create({ subjectId });
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
export const $labs = createStore<ILab[]>([])
  .on(getLabsBySubjectIdFx.doneData, (_, data) => data)
  .on(createLabFx.doneData, (state, data) => [...state, data])
  .on(updateLabFx.doneData, (state, changed) => {
    const oldLab = state.find((s) => s.id === changed.id)!;

    return [
      ...state.filter((s) => s.id !== changed.id),
      { ...oldLab, ...changed },
    ];
  })
  .on(deleteLabFx, (state, deletedId) =>
    state.filter((l) => l.id !== deletedId),
  );

export const $lastTestedLabId = createStore<string | null>(null).on(
  testLabsFx,
  (_, data) => data.id,
);

export const $labsTestResults = createStore<ILabTestResult[]>([]).on(
  addLabTestResult,
  (state, data) => [...state.filter((d) => d.id !== data.id), data],
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
