import { css, keyframes, styled } from "styled-components";

const buttonClick = keyframes`
  50% {
    transform: translateY(1px);
    filter: brightness(0.8);
  }
  100% {
    transform: translateY(0);
    filter: brightness(1);
  }
`;

export interface ButtonProps {
  $disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        cursor: pointer;
      }
      &:active {
        animation: ${buttonClick} 0.2s ease-out 1 forwards;
      }
    `}
  transition: transform 0.3s ease-out, filter 0.3s ease-out;
  user-select: none;
  -webkit-user-select: none;
`;
