import { useForm } from "effector-forms";
import { Input } from "@/shared/components/fields/input";
import { Modal, ModalProps } from "@/shared/components/modal";
import { CreateSubjectButton } from "./styled";
import { subjectModalModel } from "../model";

export const CreateSubjectModal = ({ ...props }: ModalProps) => {
  const form = useForm(subjectModalModel.$createSubjectForm);

  return (
    <Modal title="Создание предмета" {...props}>
      <Input
        placeholder="Алгоритмизация"
        label="Название"
        value={form.fields.name.value}
        error={form.fields.name.errors.map((e) => e.errorText || "")}
        onChange={form.fields.name.onChange}
        onClear={form.fields.name.reset}
      />
      <Input
        placeholder="Без ключа"
        label="Ключ для присоединения"
        value={form.fields.pass_key.value}
        onChange={form.fields.pass_key.onChange}
        onClear={form.fields.pass_key.reset}
      />
      <CreateSubjectButton onClick={() => form.submit()}>
        Создать
      </CreateSubjectButton>
    </Modal>
  );
};
