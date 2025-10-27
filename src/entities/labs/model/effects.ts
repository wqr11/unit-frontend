import { createEffect } from "effector";
import { LabsApi, UpdateLabsParams } from "..";

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
