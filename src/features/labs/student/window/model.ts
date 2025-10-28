import { labsModel } from "@/entities/labs";
import { sample } from "effector";
import { createForm } from "effector-forms";

export type StudentLabWindowUpdateForm = {
  id: string;
  student_code: string;
};

export const $form = createForm<StudentLabWindowUpdateForm>({
  fields: {
    id: {
      init: "",
    },
    student_code: {
      init: "",
    },
  },
});

sample({
  clock: $form.submit,
  source: $form.$values,
  target: labsModel.testLabsFx,
});
