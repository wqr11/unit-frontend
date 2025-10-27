import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { CloseIcon } from "@/icons/close";
import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  background-color: ${({ theme }) => theme.colors.base.white};
  padding: 12px;
  border-radius: 12px;
  overflow: auto;
  max-height: 100%;
`;

export const SidebarItem = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  border-radius: 12px;
  display: flex;
  padding-right: 64px;
  > * {
    padding: 16px 8px;
    flex: 1;
  }
`;

export const SidebarItemDeleteButton = styled(Button).attrs({
  children: <CloseIcon width={14} height={14} />,
  tabIndex: -1,
})`
  &:hover {
    opacity: 0.6;
  }
`;

export const SidebarAddLab = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
`;
