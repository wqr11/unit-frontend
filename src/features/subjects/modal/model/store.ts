import { subjectModel } from "@/entities/subject";
import { notEmptyRule } from "@/shared/effector";
import { createEvent, createStore, sample } from "effector";
import { createForm } from "effector-forms";

export interface CreateSubjectForm {
  name: string;
  pass_key: string;
}

export const $createSubjectForm = createForm<CreateSubjectForm>({
  fields: {
    name: {
      init: "",
      rules: [notEmptyRule],
    },
    pass_key: {
      init: "",
    },
  },
});

export const setSubjectModalOpen = createEvent<boolean>();
export const $createSubjectModalOpen = createStore(false).on(
  setSubjectModalOpen,
  (_, data) => data,
);

sample({
  clock: $createSubjectForm.submit,
  source: {
    values: $createSubjectForm.$values,
    valid: $createSubjectForm.$eachValid,
  },
  filter: ({ valid }) => valid,
  fn: ({ values }) => values,
  target: subjectModel.createSubjectFx,
});

sample({
  clock: subjectModel.createSubjectFx.doneData,
  target: setSubjectModalOpen.prepend(() => false),
});
