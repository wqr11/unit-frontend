import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { styled } from "styled-components";

export const TeacherLabWindowFields = styled.div`
  display: grid;
  gap: 12px;
  grid-template-areas: "input output" "comment comment";
`;

export const TeacherLabWindowSubmit = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  display: flex;
  justify-content: center;
`;
