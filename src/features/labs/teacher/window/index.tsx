import { LabWindowStyled } from "../../styled";
import { TeacherLabWindowFields, TeacherLabWindowSubmit } from "./styled";
import { Typography } from "@/shared/components/typography";
import { Textarea } from "@/components/fields/textarea";
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
      <Typography $variant="h3-medium">Лаба {lab.id}</Typography>
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
