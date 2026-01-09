import React, { CSSProperties, ChangeEvent, useCallback, useRef } from "react";
import {
  InputCloseButton,
  InputField,
  InputStyled,
  InputWrapper,
} from "./styled";
import { Typography } from "@/components/typography";
import { useTheme } from "styled-components";

export interface SearchProps {
  placeholder?: string;
  value?: string;
  label?: string;
  style?: CSSProperties;
  onChange?: (value: string) => unknown;
  onClear?: () => unknown;
  error?: string | string[];
}

export const Input: React.FC<SearchProps> = React.memo(
  ({ placeholder, value, label, style, onClear, onChange, error }) => {
    const theme = useTheme();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = useCallback(() => {
      inputRef.current?.focus();
    }, []);

    return (
      <InputWrapper style={style}>
        {label && <Typography $variant="p-medium">{label}</Typography>}
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
        {!!error &&
          (Array.isArray(error) ? error : [error]).map((e) => (
            <Typography
              key={e}
              $variant="p-medium"
              style={{ color: theme.colors.semantic.error }}
            >
              {e}
            </Typography>
          ))}
      </InputWrapper>
    );
  },
);
