import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import {
  CreateLabsParams,
  ILabTestResult,
  LabsApi,
  TestLabsParams,
  UpdateLabsParams,
} from "..";
import { notificationModel } from "@/entities/notifications";
import { routerModel } from "@/entities/router";
import { LabsSaved } from "./types";

export const createLab = createEvent<Omit<CreateLabsParams, "subject_id">>();

export const addLabTestResult = createEvent<ILabTestResult>();

export const getLabsBySubjectIdFx = createEffect(async (subjectId: string) => {
  const labs = await LabsApi.list(subjectId);

  return { subjectId, labs };
});

export const getLabByIdFx = createEffect(async (id: string) => {
  return await LabsApi.getById(id);
});

export const createLabFx = createEffect(async (params: CreateLabsParams) => {
  const { subject_id } = params;
  const createdLab = await LabsApi.create(params);

  return { subject_id, labs: [createdLab] };
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
  .on(createLabFx.doneData, (state, { labs, subject_id }) => ({
    ...state,
    [subject_id]: [...state?.[subject_id], ...labs],
  }));

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

// updateLabFx and deleteLabFx logic
sample({
  clock: updateLabFx.doneData,
  source: { subjectId: routerModel.$subjectId, labs: $labs },
  filter: ({ subjectId }) => !!subjectId,
  fn: ({ subjectId, labs }, newLab) => {
    const subjectLabs = labs[subjectId!].map((lab) =>
      lab.id === newLab.id ? { ...lab, ...newLab } : lab
    );
    return { ...labs, [subjectId!]: subjectLabs };
  },
  target: $labs,
});

sample({
  clock: deleteLabFx,
  source: { subjectId: routerModel.$subjectId, labs: $labs },
  filter: ({ subjectId }) => !!subjectId,
  fn: ({ subjectId, labs }, labId) => {
    const newLabs = { ...labs };
    newLabs[subjectId!] = newLabs[subjectId!].filter((lab) => lab.id !== labId);
    return newLabs;
  },
  target: $labs,
});

sample({
  clock: createLab,
  source: routerModel.$subjectId,
  filter: (subjectId) => !!subjectId,
  fn: (sId, data) => ({ subject_id: sId!, ...data }),
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
