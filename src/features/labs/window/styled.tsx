import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { styled } from "styled-components";

export const LabWindowStyled = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 36px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
`;

export const LabWindowFields = styled.div`
  display: grid;
  gap: 12px;
  grid-template-areas: "input output" "comment comment";
`;

export const LabWindowSubmit = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  display: flex;
  justify-content: center;
`;
