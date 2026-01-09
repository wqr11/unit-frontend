import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { styled } from "styled-components";

export const SubjectsPageWrapper = styled.div`
  grid-area: content;
  display: flex;
  padding: 20px;
`;

export const SubjectsPageStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border-radius: 12px;
  overflow: auto;
  padding: 20px;
`;

export const SubjectPageTop = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SubjectPageTitle = styled(Typography).attrs({
  $variant: "h2-semibold",
})`
  margin-left: 16px;
`;

export const SubjectPageAddButton = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  padding: 12px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
`;

export const SubjectPageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
