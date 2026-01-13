import { labsModel } from "@/entities/labs";
import { createEvent, sample } from "effector";
import { createForm } from "effector-forms";

export type StudentLabWindowUpdateForm = {
  id: string;
  student_code: string;
};

/* Send an email to the teacher */
export const testSend = createEvent<void>();

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
  target: labsModel.testLabFx,
});

sample({
  clock: testSend,
  source: $form.$values,
  target: labsModel.testSendFx,
});
