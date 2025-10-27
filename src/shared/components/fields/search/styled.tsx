import { styled } from "styled-components";

import { CloseIcon } from "@/icons/close";
import { SearchIcon } from "@/icons/search";
import { Button } from "@/components/button";

export const SearchStyled = styled.form`
  padding: 12px 36px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 10px;
  outline: 2px dashed transparent;
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  position: relative;
  &:hover,
  &:focus-within {
    cursor: text;
    outline-color: ${({ theme }) => theme.colors.grayScale.gray4};
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
  z-index: 1;
`;

export const SearchField = styled.input.attrs({
  type: "text",
  placeholder: "Поиск",
})`
  all: unset;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray4};
    opacity: 0.6;
  }
  transition: all 0.1s ease-out;
`;

export const SearchIconStyled = styled(SearchIcon).attrs({
  width: 16,
  height: 16,
})`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 12px;
`;

export const SearchCloseButton = styled(Button).attrs({
  children: <CloseIcon width={14} height={14} />,
})`
  height: 100%;
  position: absolute;
  top: 0;
  right: 12px;
  &:hover {
    opacity: 0.6;
  }
`;
