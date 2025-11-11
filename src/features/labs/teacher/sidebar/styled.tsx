import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { CloseIcon } from "@/icons/close";
import { styled } from "styled-components";

export const TeacherSidebarItemDeleteButton = styled(Button).attrs({
  children: <CloseIcon width={14} height={14} />,
  tabIndex: -1,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 0.6;
  }
`;

export const TeacherSidebarAddLab = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
`;
