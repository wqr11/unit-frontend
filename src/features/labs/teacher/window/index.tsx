import { LabWindowStyled } from "../../styled";
import { TeacherLabWindowFields, TeacherLabWindowSubmit } from "./styled";
import { Textarea } from "@/components/fields/textarea";
import { Input } from "@/components/fields/input";
import { ILab } from "@/entities/labs";

import * as TeacherLabWindowModel from "./model";
import { useForm } from "effector-forms";
import { useLayoutEffect } from "react";

export interface TeacherLabWindowProps {
  lab?: ILab;
}

export const TeacherLabWindow: React.FC<TeacherLabWindowProps> = ({ lab }) => {
  const form = useForm(TeacherLabWindowModel.$form);

  useLayoutEffect(() => {
    if (!lab) {
      return;
    }
    form.setForm(lab);
  }, [lab]);

  if (!lab) return;

  return (
    <LabWindowStyled>
      <Input
        label="Имя лабораторной"
        value={form.fields.name.value}
        onChange={form.fields.name.onChange}
      />
      <TeacherLabWindowFields>
        <Textarea
          label="Входные данные"
          style={{ gridArea: "input" }}
          value={form.fields.data_input.value}
          onChange={form.fields.data_input.onChange}
          onClear={() => form.fields.data_input.onChange("")}
        />
        <Textarea
          label="Ожидаемый результат"
          style={{ gridArea: "output" }}
          value={form.fields.data_output.value}
          onChange={form.fields.data_output.onChange}
          onClear={() => form.fields.data_output.onChange("")}
        />
        <Textarea
          label="Комментарий для ИИ"
          style={{ gridArea: "comment" }}
          value={form.fields.comment_for_ai.value}
          onChange={form.fields.comment_for_ai.onChange}
          onClear={() => form.fields.comment_for_ai.onChange("")}
        />
      </TeacherLabWindowFields>
      <TeacherLabWindowSubmit onClick={() => form.submit()}>
        Сохранить
      </TeacherLabWindowSubmit>
    </LabWindowStyled>
  );
};
