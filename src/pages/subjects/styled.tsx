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

export const SubjectPageTitle = styled(Typography).attrs({
  $variant: "h2-semibold",
})`
  margin-left: 16px;
`;

export const SubjectPageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(100px, 300px, 80vw));
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
