import { css, styled } from "styled-components";
import { Button } from "@/components/button";

export interface InputMessageStyled {
  $disabled?: boolean;
}

export const InputMessageStyled = styled.form<InputMessageStyled>`
  margin-top: auto;
  padding: 18px 26px;
  padding-right: 108px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  position: relative;
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
        cursor: text;
      }
      &:focus-within {
        outline: 3px solid ${({ theme }) => theme.colors.grayScale.gray4};
      }
    `}
`;

export const InputMessageTextArea = styled.textarea.attrs({
  cols: 1,
  rows: 6,
  wrap: "hard",
  placeholder: "Введите сообщение...",
})`
  all: unset;
  width: 100%;
  max-width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.base.black};
  word-wrap: break-word;
`;

export const InputMessageSendButton = styled(Button)`
  height: 100%;
  position: absolute;
  align-items: start;
  top: 24px;
  right: 38px;
  svg path {
    stroke: ${({ theme }) => theme.colors.grayScale.gray4};
    fill: ${({ theme }) => theme.colors.grayScale.gray4};
  }
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        svg circle {
          fill: ${({ theme }) => theme.colors.grayScale.gray2};
        }
      }
    `}
`;
