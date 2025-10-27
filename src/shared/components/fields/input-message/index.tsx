import React, { ChangeEvent, useCallback, useRef } from "react";
import {
  InputMessageSendButton,
  InputMessageStyled,
  InputMessageTextArea,
} from "./styled";
import { SendIcon } from "@/icons/send";
import { useTheme } from "styled-components";

export interface InputMessageProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (message: string) => unknown;
  onSubmit?: () => unknown;
}

export const InputMessage = React.forwardRef<
  HTMLFormElement,
  InputMessageProps
>(({ placeholder, disabled, value, onChange, onSubmit }, externalRef) => {
  const theme = useTheme();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.();
    },
    [onSubmit]
  );

  const handleInputClick = useCallback(() => {
    textAreaRef.current?.focus();
  }, []);

  return (
    <InputMessageStyled
      ref={externalRef}
      $disabled={disabled}
      onSubmit={(e) => e.preventDefault()}
      onClick={handleInputClick}
    >
      <InputMessageTextArea
        ref={textAreaRef}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange?.(e.target.value)
        }
      />
      <InputMessageSendButton $disabled={disabled} onClick={handleSubmit}>
        <SendIcon width={30} height={30} fill={theme.colors.grayScale.gray4} />
      </InputMessageSendButton>
    </InputMessageStyled>
  );
});
