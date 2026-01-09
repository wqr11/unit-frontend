import { useForm } from "effector-forms";

import { CreateLabButton, CreateLabModalStyled } from "./styled";
import { ModalProps } from "@/shared/components/modal";
import { Input } from "@/shared/components/fields/input";
import { Textarea } from "@/shared/components/fields/textarea";

import { teacherSidebarModel } from "../..";

export const CreateLabModal: React.FC<ModalProps> = ({ ...props }) => {
  const form = useForm(teacherSidebarModel.$createLabForm);

  return (
    <CreateLabModalStyled title="Создание лабораторной" {...props}>
      <Input
        placeholder="Имя*"
        value={form.fields.name.value}
        onChange={form.fields.name.onChange}
        onClear={form.fields.name.reset}
      ></Input>
      <Textarea
        placeholder="Текст задания"
        value={form.fields.task.value}
        error={form.fields.task.errors.map((e) => e.errorText || "")}
        onChange={form.fields.task.onChange}
        onClear={form.fields.task.reset}
      ></Textarea>
      <Textarea
        placeholder="Входные данные*"
        value={form.fields.data_input.value}
        error={form.fields.data_input.errors.map((e) => e.errorText || "")}
        onChange={form.fields.data_input.onChange}
        onClear={form.fields.data_input.reset}
      ></Textarea>
      <Textarea
        placeholder="Выходные данные*"
        value={form.fields.data_output.value}
        error={form.fields.data_output.errors.map((e) => e.errorText || "")}
        onChange={form.fields.data_output.onChange}
        onClear={form.fields.data_output.reset}
      ></Textarea>
      <Textarea
        placeholder="Комментарий для ИИ*"
        value={form.fields.comment_for_ai.value}
        error={form.fields.comment_for_ai.errors.map((e) => e.errorText || "")}
        onChange={form.fields.comment_for_ai.onChange}
        onClear={form.fields.comment_for_ai.reset}
      ></Textarea>
      <CreateLabButton onClick={() => form.submit()}>Создать</CreateLabButton>
    </CreateLabModalStyled>
  );
};
