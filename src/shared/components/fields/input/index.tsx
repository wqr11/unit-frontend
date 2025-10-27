import React, { ChangeEvent, useCallback, useRef } from "react";
import { InputCloseButton, InputField, InputStyled } from "./styled";

export interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => unknown;
  onClear?: () => unknown;
}

export const Input: React.FC<SearchProps> = React.memo(
  ({ placeholder, value, onClear, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef.current]);

    return (
      <InputStyled
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
        onClick={handleInputClick}
      >
        <InputField
          ref={inputRef}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.currentTarget.value)
          }
          placeholder={placeholder}
        />
        <InputCloseButton onClick={onClear} />
      </InputStyled>
    );
  }
);
