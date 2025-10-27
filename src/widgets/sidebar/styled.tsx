import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { css, styled } from "styled-components";

export interface SidebarStyledProps {
  $activeChatExists?: boolean;
}

export const SidebarStyled = styled.div<SidebarStyledProps>`
  display: flex;
  flex-direction: column;
  padding-inline: 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray1};
  @media (width >= ${({ theme }) => theme.size.maxTablet}px) {
    width: 320px;
  }
  ${({ $activeChatExists, theme }) => css`
    @media (width <= ${theme.size.maxMobile}px) {
      ${$activeChatExists
        ? css`
            display: none;
          `
        : css`
            flex-grow: 1;
          `}
    }
  `}
  overflow-y: auto;
  padding-bottom: 48px;
`;

export const SidebarSearch = styled.div`
  margin-top: 8px;
  position: sticky;
  top: 8px;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const SidebarSearchedChats = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
`;

export const SidebarSearchedChatsText = styled(Typography).attrs({
  $variant: "p-semibold",
})`
  margin: 8px;
`;

export const SidebarCreateChatButton = styled(Button)`
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray4};
  border-radius: 10px;
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  animation-duration: 0.1s;
`;

export const SidebarCreateChatButtonText = styled(Typography).attrs({
  $variant: "p-medium",
})`
  color: ${({ theme }) => theme.colors.base.white};
`;
