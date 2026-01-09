import { styled } from "styled-components";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

export const CreateSubjectButton = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
`;
