import React, { useCallback, useEffect } from "react";
import { Modal } from "@/components/modal";
import { Input } from "@/components/fields/input";

import { useUnit } from "effector-react";
import { signUpModalModel } from "./model";
import { SubmitButton } from "@/components/fields/submit";
import { TextButton } from "@/components/text-button";

export interface SignUpModalProps {
  open?: boolean;
  onChangeToLogin?: () => unknown;
}

export const SignUpModal: React.FC<SignUpModalProps> = React.memo(
  ({ open, onChangeToLogin }) => {
    const setName = useUnit(signUpModalModel.setName);
    const name = useUnit(signUpModalModel.$name);

    const setEmail = useUnit(signUpModalModel.setEmail);
    const email = useUnit(signUpModalModel.$email);

    const setPass = useUnit(signUpModalModel.setPassword);
    const pass = useUnit(signUpModalModel.$password);

    const setConfPass = useUnit(signUpModalModel.setConfirmPassword);
    const confPass = useUnit(signUpModalModel.$confirmPassword);

    const submit = useUnit(signUpModalModel.submit);

    const handleKeypress = useCallback((e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopImmediatePropagation();
        submit();
      }
    }, []);

    useEffect(() => {
      window.addEventListener("keypress", handleKeypress);

      return () => {
        window.removeEventListener("keypress", handleKeypress);
      };
    });

    return (
      <Modal title="Регистрация" open={open} closable={false}>
        <Input
          placeholder="Имя"
          onChange={setName}
          onClear={() => setName("")}
          value={name}
        />
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
        <Input
          placeholder="Подтвердите пароль"
          onChange={setConfPass}
          onClear={() => setConfPass("")}
          value={confPass}
        />
        <SubmitButton fullWidth onClick={submit}>
          Зарегистрироваться
        </SubmitButton>
        <TextButton onClick={onChangeToLogin}>Войти в аккаунт</TextButton>
      </Modal>
    );
  }
);
