import { styled } from "styled-components";

import { CloseIcon } from "@/icons/close";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TextareaStyled = styled.div.attrs({
  tabIndex: -1,
})`
  padding: 12px 36px 12px 12px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 10px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  position: relative;
  display: block;

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

export const TextareaLabel = styled(Typography).attrs({
  $variant: "p-normal",
})``;

export const TextareaField = styled.textarea.attrs({
  tabIndex: 0,
})`
  all: unset;
  width: 100%;
  min-height: 60px;
  resize: vertical;

  color: ${({ theme }) => theme.colors.base.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray4};
    opacity: 0.6;
  }

  transition: all 0.1s ease-out;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grayScale.gray1};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grayScale.gray3};
    border-radius: 3px;
  }
`;

export const TextareaCloseButton = styled(Button).attrs({
  children: <CloseIcon width={14} height={14} />,
  tabIndex: -1,
})`
  height: auto;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px;

  &:hover {
    opacity: 0.6;
  }
`;
