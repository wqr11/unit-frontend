import React, { CSSProperties, ChangeEvent, useCallback, useRef } from "react";
import {
  TextareaCloseButton,
  TextareaField,
  TextareaLabel,
  TextareaStyled,
  TextareaWrapper,
} from "./styled";

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  label?: string;
  style?: CSSProperties;
  onChange?: (value: string) => unknown;
  onClear?: () => unknown;
  rows?: number;
  maxLength?: number;
}

export const Textarea: React.FC<TextareaProps> = React.memo(
  ({
    placeholder,
    value,
    label,
    style,
    onClear,
    onChange,
    rows = 3,
    maxLength,
  }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextareaClick = useCallback(() => {
      textareaRef.current?.focus();
    }, [textareaRef.current]);

    return (
      <TextareaWrapper style={style}>
        {label && <TextareaLabel>{label}</TextareaLabel>}
        <TextareaStyled
          onSubmit={(e: React.FormEvent) => e.preventDefault()}
          onClick={handleTextareaClick}
        >
          <TextareaField
            ref={textareaRef}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              onChange?.(e.currentTarget.value)
            }
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
          />
          <TextareaCloseButton onClick={onClear} />
        </TextareaStyled>
      </TextareaWrapper>
    );
  }
);
