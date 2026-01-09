import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { styled } from "styled-components";

export const SubjectCardStyled = styled(Button)`
  width: 260px;
  height: 80px;
  padding: 20px;
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  cursor: pointer;
  transition: transform 50ms ease-out;
  user-select: none;
  -webkit-user-select: none;
`;

export const SubjectCardTitle = styled(Typography).attrs({
  $variant: "h3-medium",
})`
  display: block;
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
