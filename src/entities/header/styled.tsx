import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { styled } from "styled-components";

export const HeaderStyled = styled.nav`
  height: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
`;

export const HeaderSubjectLink = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="h4-medium">{children}</Typography>,
}))`
  margin-left: 42px;
  height: calc(100% - 2px);
  padding-inline: 64px;
`;
