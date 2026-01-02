import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { styled } from "styled-components";

export const HeaderStyled = styled.nav`
  padding-inline: 42px;
  height: 100%;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
`;

export const HeaderSubjectLink = styled(Button).attrs(({ children }) => ({
  $disableHover: true,
  children: <Typography $variant="h4-medium">{children}</Typography>,
}))`
  height: calc(100% - 2px);
  padding-inline: 64px;
  cursor: pointer;
  &:hover {
    text-decoration: underline #0e0e15;
  }
`;

export const HeaderGroup = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
`;

export const HeaderUsername = styled(Typography).attrs({
  $variant: "p-medium",
})``;

export const HeaderLogout = styled(Button).attrs({
  children: "Выйти",
})`
  color: ${({ theme }) => theme.colors.grayScale.gray4};
`;
