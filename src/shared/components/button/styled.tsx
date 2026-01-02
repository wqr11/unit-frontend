import { css, styled } from "styled-components";

export interface ButtonProps {
  $disabled?: boolean;
  $disableHover?: boolean;
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  ${({ $disabled, $disableHover }) =>
    !$disabled &&
    !$disableHover &&
    css`
      &:hover {
        cursor: pointer;
        outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
      }
      &:active {
        transform: translateY(1px);
        outline: 2px solid ${({ theme }) => theme.colors.grayScale.gray4};
      }
    `}
  transition: transform 50ms ease-out;
  user-select: none;
  -webkit-user-select: none;
`;
