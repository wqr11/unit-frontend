import { Rule } from "effector-forms";

export const notEmptyRule: Rule<string> = {
  name: "not-empty",
  errorText: "Поле не должно быть пустым!",
  validator: (v) => !!v,
};
