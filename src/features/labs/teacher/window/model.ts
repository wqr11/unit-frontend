import { ILab, labsModel } from "@/entities/labs";
import { sample } from "effector";
import { createForm } from "effector-forms";

export type TeacherLabWindowUpdateForm = Omitn<ILab, "subject_id">;

export const $form = createForm<TeacherLabWindowUpdateForm>({
  fields: {
    id: {
      init: "",
    },
    name: {
      init: "",
    },
    task: {
      init: "",
    },
    data_input: {
      init: "",
    },
    data_output: {
      init: "",
    },
    comment_for_ai: {
      init: "",
    },
  },
});

sample({
  clock: $form.submit,
  source: $form.$values,
  target: labsModel.updateLabFx,
});
