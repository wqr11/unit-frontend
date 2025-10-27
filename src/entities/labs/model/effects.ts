import { createEffect } from "effector";
import { CreateLabsParams, LabsApi } from "..";

export const getLabsFx = createEffect(async () => {
  return await LabsApi.list();
});

export const getLabByIdFx = createEffect(async (id: string) => {
  return await LabsApi.getById(id);
});

export const createLabFx = createEffect(async (params: CreateLabsParams) => {
  return await LabsApi.create(params);
});

export const deleteLabFx = createEffect(async (id: string) => {
  return await LabsApi.delete(id);
});
