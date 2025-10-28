import { Typography } from "@/components/typography";
import { styled } from "styled-components";

export const LogOutputStyled = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const LogOutputText = styled(Typography).attrs({
  $variant: "p-normal",
})`
  white-space: "pre";
  overflow-wrap: normal;
  color: ${({ theme }) => theme.colors.base.black};
`;
