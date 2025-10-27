import { styled } from "styled-components";
import { Typography } from "../typography";
import { Button } from "../button";

export const TextButtonStyled = styled(Button)`
  all: unset;
`;

export const TextButtonContent = styled(Typography).attrs({
  $variant: "p-medium",
})`
  color: ${({ theme }) => theme.colors.grayScale.gray4};
  user-select: none;
  -webkit-user-select: none;
`;
