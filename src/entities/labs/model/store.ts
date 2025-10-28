import { createEffect, createEvent, createStore, sample } from "effector";
import {
  ILab,
  ILabTestResult,
  LabsApi,
  TestLabsParams,
  UpdateLabsParams,
} from "..";
import { notificationModel } from "@/entities/notifications";

export const addLabTestResult = createEvent<ILabTestResult>();

export const getLabsFx = createEffect(async () => {
  return await LabsApi.list();
});

export const getLabByIdFx = createEffect(async (id: string) => {
  return await LabsApi.getById(id);
});

export const createLabFx = createEffect(async () => {
  return await LabsApi.create();
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
export const $labs = createStore<ILab[]>([])
  .on(getLabsFx.doneData, (_, data) => data)
  .on(createLabFx.doneData, (state, data) => [...state, data])
  .on(deleteLabFx, (state, deletedId) =>
    state.filter((l) => l.id !== deletedId)
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
