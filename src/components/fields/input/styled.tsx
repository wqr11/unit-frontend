import { styled } from "styled-components";

import { CloseIcon } from "@/icons/close";
import { Button } from "@/components/button";

export const InputStyled = styled.a.attrs({
  tabIndex: -1,
})`
  padding: 12px 36px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 10px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  position: relative;
  &:hover,
  &:focus-within {
    cursor: text;
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
    *::placeholder {
      opacity: 1;
    }
  }
  button {
    display: none;
  }
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.grayScale.gray4};
    button {
      display: flex;
    }
  }
`;

export const InputField = styled.input.attrs({
  type: "text",
  tabIndex: 0,
})`
  all: unset;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray4};
    opacity: 0.6;
  }
  transition: all 0.1s ease-out;
`;

export const InputCloseButton = styled(Button).attrs({
  children: <CloseIcon width={14} height={14} />,
  tabIndex: -1,
})`
  height: 100%;
  position: absolute;
  top: 0;
  right: 12px;
  &:hover {
    opacity: 0.6;
  }
`;
