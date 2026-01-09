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
        placeholder="Лабораторная работа №1"
        value={form.fields.name.value}
        onChange={form.fields.name.onChange}
        onClear={form.fields.name.reset}
      />
      <TeacherLabWindowFields>
        <Textarea
          placeholder="Текст"
          label="Задание"
          style={{ gridArea: "task" }}
          value={form.fields.task.value}
          onChange={form.fields.task.onChange}
          onClear={form.fields.task.reset}
        />
        <Textarea
          label="Входные данные"
          placeholder="Введите входные данные"
          style={{ gridArea: "input" }}
          value={form.fields.data_input.value}
          onChange={form.fields.data_input.onChange}
          onClear={form.fields.data_input.reset}
        />
        <Textarea
          label="Ожидаемый результат"
          placeholder="Введите результат"
          style={{ gridArea: "output" }}
          value={form.fields.data_output.value}
          onChange={form.fields.data_output.onChange}
          onClear={form.fields.data_output.reset}
        />
        <Textarea
          label="Комментарий для ИИ"
          placeholder="Требования к заданию"
          style={{ gridArea: "comment" }}
          value={form.fields.comment_for_ai.value}
          onChange={form.fields.comment_for_ai.onChange}
          onClear={form.fields.comment_for_ai.reset}
        />
      </TeacherLabWindowFields>
      <TeacherLabWindowSubmit onClick={() => form.submit()}>
        Сохранить
      </TeacherLabWindowSubmit>
    </LabWindowStyled>
  );
};
