import { css, keyframes, styled } from "styled-components";
import { ProfileIcon } from "@/icons/profile";
import { Typography } from "@/components/typography";

const messageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  } 
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export interface MessageStyledProps {
  $variant: "user" | "companion";
}

export const MessageStyled = styled.div<MessageStyledProps>`
  display: flex;
  gap: 12px;
  align-items: end;
  overflow-wrap: break-word;
  word-break: normal;
  animation: ${messageAnimation} 0.2s ease-out 1 forwards;
  ${({ $variant }) =>
    $variant === "user" &&
    css`
      flex-direction: row-reverse;
    `};
`;

export const MessageAvatar = styled(ProfileIcon)<MessageStyledProps>`
  flex-shrink: 0;
  border-radius: 10px;
  outline: 2px dashed transparent;
  &:hover {
    outline-color: ${({ theme, $variant }) =>
      $variant === "user"
        ? theme.colors.base.black
        : theme.colors.grayScale.gray4};
  }
`;

export const MessageRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
`;

export interface MessageAuthorProps {
  $messageVariant: "user" | "companion";
}

export const MessageAuthor = styled(Typography).attrs({
  $variant: "p-light",
})<MessageAuthorProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ $messageVariant }) =>
    $messageVariant === "user" ? "end" : "start"};
`;

export const MessageBubble = styled.div<MessageStyledProps>`
  padding: 14px 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
  overflow-x: auto;
  max-width: 100%;
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  ${({ $variant, theme }) =>
    $variant === "user" &&
    css`
      background-color: ${theme.colors.base.white};
      &:hover {
        outline: 2px dashed ${({ theme }) => theme.colors.base.black};
      }
    `}
`;

export const MessageBubbleText = styled(Typography).attrs({
  $variant: "p-normal",
})``;
