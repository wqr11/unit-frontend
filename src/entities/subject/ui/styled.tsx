import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { styled } from "styled-components";

export const SubjectCardStyled = styled(Button)`
  display: block;
  padding: 20px;
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  cursor: pointer;
  &:hover {
    cursor: pointer;
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  &:active {
    transform: translateY(1px);
    outline: 2px solid ${({ theme }) => theme.colors.grayScale.gray4};
  }
  transition: transform 50ms ease-out;
  user-select: none;
  -webkit-user-select: none;
`;

export const SubjectCardTitle = styled(Typography).attrs({
  $variant: "h3-medium",
})`
  color: ${({ theme }) => theme.colors.grayScale.gray4};
`;
