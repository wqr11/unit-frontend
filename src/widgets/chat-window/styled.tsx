import { css, styled } from "styled-components";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";

export interface ChatWindowStyledProps {
  $activeChatExists?: boolean;
}

export const ChatWindowStyled = styled.div<ChatWindowStyledProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  ${({ $activeChatExists, theme }) => css`
    @media (width <= ${theme.size.maxMobile}px) {
      display: ${$activeChatExists ? "flex" : "none"};
    }
  `}
`;

export const ChatWindowChatBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
`;

export const ChatWindowChatBarReturnButton = styled(Button)`
  height: 100%;
`;

export const ChatWindowChatBarName = styled(Typography).attrs({
  $variant: "p-normal",
})`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.grayScale.gray4};
`;

export const ChatWindowChats = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding: 18px 81px;
  padding-bottom: 81px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (width <= ${({ theme }) => theme.size.maxMobile}px) {
    padding-inline: 24px;
  }
`;

export const ChatWindowInput = styled.div`
  margin-top: auto;
  margin-bottom: 32px;
  padding-inline: 18px;
`;

export const ChatWindowEmptyMessageStyled = styled.div`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ChatWindowEmptyMessageTitle = styled(Typography).attrs({
  $variant: "h2-medium",
})``;

export const ChatWindowEmptyMessageText = styled(Typography).attrs({
  $variant: "p-light",
})``;
