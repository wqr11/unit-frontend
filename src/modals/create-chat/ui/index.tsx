import React from "react";
import { useUnit } from "effector-react";
import { createChatModalModel } from "../model";
import { Modal } from "@/components/modal";
import { Input } from "@/components/fields/input";
import { SubmitButton } from "@/components/fields/submit";

export const CreateChatModal = React.memo(() => {
  const modalShown = useUnit(createChatModalModel.$modalShown);
  const setModalShown = useUnit(createChatModalModel.setModalShown);

  const name = useUnit(createChatModalModel.$name);
  const setName = useUnit(createChatModalModel.setName);
  const submit = useUnit(createChatModalModel.submit);

  return (
    <Modal
      open={modalShown}
      title="Создать чат"
      onClose={() => setModalShown(false)}
    >
      <Input
        value={name}
        placeholder="Имя"
        onChange={setName}
        onClear={() => setName("")}
      />
      <SubmitButton fullWidth onClick={submit}>
        Создать
      </SubmitButton>
    </Modal>
  );
});
