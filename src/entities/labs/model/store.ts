import { createStore } from "effector";
import { ILab } from "..";
import { createLabFx, deleteLabFx, getLabsFx } from "./effects";

/* @TODO: ADD PAGINATION LATER! */
export const $labs = createStore<ILab[]>([])
  .on(getLabsFx.doneData, (_, data) => data)
  .on(createLabFx.doneData, (state, data) => [...state, data])
  .on(deleteLabFx, (state, deletedId) =>
    state.filter((l) => l.id !== deletedId)
  );
