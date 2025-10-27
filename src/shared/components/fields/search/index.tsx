import React, { useCallback, useEffect, useRef } from "react";
import {
  SearchCloseButton,
  SearchField,
  SearchIconStyled,
  SearchStyled,
} from "./styled";

export interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (msg: string) => unknown;
  onClear?: () => unknown;
  onSubmit?: () => unknown;
}

export const Search: React.FC<SearchProps> = React.memo(
  ({ placeholder, value, onClear, onChange, onSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef.current]);

    const handleKeypress = (e: KeyboardEvent) => {
      if (
        e.key === "Enter" &&
        inputRef?.current?.contains(document.activeElement)
      ) {
        e.preventDefault();
        onSubmit?.();
      }
    };

    useEffect(() => {
      window.addEventListener("keypress", handleKeypress);

      return () => {
        window.removeEventListener("keypress", handleKeypress);
      };
    });

    return (
      <SearchStyled
        onSubmit={(e) => e.preventDefault()}
        onClick={handleInputClick}
      >
        <SearchIconStyled />
        <SearchField
          ref={inputRef}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.target.value)
          }
          onSubmit={(e) => e.preventDefault()}
          placeholder={placeholder}
        />
        <SearchCloseButton onClick={onClear} />
      </SearchStyled>
    );
  }
);
