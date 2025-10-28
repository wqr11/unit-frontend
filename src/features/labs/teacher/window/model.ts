import { labsModel } from "@/entities/labs";
import { sample } from "effector";
import { createForm } from "effector-forms";

export interface TeacherLabWindowUpdateForm {
  id: string;
  data_input: string;
  data_output: string;
  comment_for_ai: string;
}

export const $form = createForm<TeacherLabWindowUpdateForm>({
  fields: {
    id: {
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
