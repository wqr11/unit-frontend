import React from "react";
import { Modal } from "@/components/modal";
import { Input } from "@/components/fields/input";

import { useUnit } from "effector-react";
import { loginModalModel } from "./model";
import { SubmitButton } from "@/components/fields/submit";
import { TextButton } from "@/components/text-button";

export interface LoginModalProps {
  open?: boolean;
  onChangeToSignUp?: () => unknown;
}

export const LoginModal: React.FC<LoginModalProps> = React.memo(
  ({ open, onChangeToSignUp }) => {
    const setEmail = useUnit(loginModalModel.setEmail);
    const email = useUnit(loginModalModel.$email);

    const setPass = useUnit(loginModalModel.setPassword);
    const pass = useUnit(loginModalModel.$password);

    const submit = useUnit(loginModalModel.submit);

    return (
      <Modal title="Вход" open={open} closable={false}>
        <Input
          placeholder="Почта"
          onChange={setEmail}
          onClear={() => setEmail("")}
          value={email}
        />
        <Input
          placeholder="Пароль"
          onChange={setPass}
          onClear={() => setPass("")}
          value={pass}
        />
        <SubmitButton fullWidth onClick={submit}>
          Войти
        </SubmitButton>
        <TextButton onClick={onChangeToSignUp}>Зарегистрироваться</TextButton>
      </Modal>
    );
  }
);
