import { styled } from "styled-components";

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
  > *:first-child {
    padding: 16px 8px;
    flex: 1;
  }
`;
