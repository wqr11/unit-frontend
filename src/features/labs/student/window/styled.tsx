import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { styled } from "styled-components";

export const StudentLabWindowFields = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas: "answer log";
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
`;

export const StudentLabWindowButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 140px;
  max-width: 200px;
  > * {
    flex: 1;
  }
`;

export const StudentLabWindowTestButton = styled(Button).attrs(
  ({ children }) => ({
    children: <Typography $variant="p-medium">{children}</Typography>,
  })
)`
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  display: flex;
  justify-content: center;
`;
