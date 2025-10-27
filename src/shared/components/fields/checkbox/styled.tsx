import { css, styled } from "styled-components";
import { Typography } from "@/components/typography";
import { buttonClickAnimation } from "@/shared/styles";
import { ChatIcon } from "@/shared/icons/chat";

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CheckboxInputWithMark = styled.div`
  position: relative;
`;

export const CheckboxMarkIcon = styled(ChatIcon);

export const CheckboxInput = styled.input.attrs<{ $disabled?: boolean }>({
  type: "checkbox",
})`
  all: unset;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme, checked, $disabled }) => {
    if ($disabled) {
      return theme.colors.grayScale.gray1;
    }
    return checked ? theme.colors.grayScale.bg : theme.colors.base.white;
  }};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.grayScale.gray4};
      }
      &:active {
        animation: ${buttonClickAnimation} 0.2s ease-out 1 forwards;
      }
    `}
`;

export const CheckboxLabel = styled(Typography).attrs({
  $variant: "p-medium",
})``;
