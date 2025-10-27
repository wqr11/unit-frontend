import React from "react";
import { TextButtonContent, TextButtonStyled } from "./styled";

export interface TextButtonProps {
  children?: React.ReactNode;
  onClick?: () => unknown;
}

export const TextButton: React.FC<TextButtonProps> = React.memo(
  ({ children, onClick }) => {
    return (
      <TextButtonStyled onClick={onClick}>
        <TextButtonContent>{children}</TextButtonContent>
      </TextButtonStyled>
    );
  }
);
