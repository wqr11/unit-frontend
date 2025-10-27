import { css, styled } from "styled-components";
import { Button } from "@/components/button";

export interface SubmitButtonStyledProps {
  $fullWidth?: boolean;
}

export const SubmitButtonStyled = styled(Button)<SubmitButtonStyledProps>`
  display: flex;
  padding: 12px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  &:active {
    outline: 2px solid ${({ theme }) => theme.colors.grayScale.gray4};
  }
  transition: transform 0.1s ease-out, brightness 0.1s ease-out;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
      padding: 12px 0;
      justify-content: center;
      align-items: center;
    `}
`;
