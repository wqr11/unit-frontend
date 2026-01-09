import { labsModel } from "@/entities/labs";
import { notEmptyRule } from "@/shared/effector";
import { createEvent, createStore, sample } from "effector";
import { createForm } from "effector-forms";

export const $createLabForm = createForm({
  fields: {
    name: {
      init: "",
      rules: [notEmptyRule],
    },
    task: {
      init: "",
    },
    data_input: {
      init: "",
      rules: [notEmptyRule],
    },
    data_output: {
      init: "",
      rules: [notEmptyRule],
    },
    comment_for_ai: {
      init: "",
      rules: [notEmptyRule],
    },
  },
});

export const toggleLabModelOpen = createEvent<boolean | void>();
export const $createLabModalOpen = createStore(false).on(
  toggleLabModelOpen,
  (state, data) => (typeof data === "boolean" ? data : !state),
);

sample({
  clock: $createLabForm.submit,
  source: { values: $createLabForm.$values, valid: $createLabForm.$eachValid },
  filter: ({ valid }) => valid,
  fn: ({ values }) => values,
  target: labsModel.createLab,
});

sample({
  // @ts-expect-error --- effector thinks .reset() is not a method
  clock: labsModel.createLabFx.doneData,
  target: [$createLabForm.reset, toggleLabModelOpen.prepend(() => false)],
});
