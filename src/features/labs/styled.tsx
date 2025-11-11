import { Typography } from "@/shared/components/typography";
import { css, styled } from "styled-components";

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

export const SidebarStyled = styled.div<{ $isTeacher?: boolean }>`
  width: 100%;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  background-color: ${({ theme }) => theme.colors.base.white};
  padding: 12px;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  max-height: 100%;
  ${({ $isTeacher }) =>
    !$isTeacher &&
    css`
      > div {
        grid-template-columns: 100%;
      }
    `}
`;

export const SidebarScrollbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px 8px;
`;

export const SidebarItem = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 64px) 64px;
  grid-template-rows: 64px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  border-radius: 12px;
  max-width: 100%;
`;

export const SidebarItemText = styled(Typography).attrs({
  $variant: "p-normal",
})`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-inline: 16px;
`;
