import { useTheme } from "styled-components";
import {
  MessageStyled,
  MessageAuthor,
  MessageAvatar,
  MessageBubble,
  MessageBubbleText,
  MessageRight,
} from "./styled";

export interface MessageProps {
  $variant?: "user" | "companion";
  author?: string;
  children?: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({
  $variant = "companion",
  author,
  children,
}) => {
  const theme = useTheme();

  return (
    <MessageStyled $variant={$variant}>
      <MessageAvatar
        $variant={$variant}
        fill={
          $variant === "user"
            ? theme.colors.base.black
            : theme.colors.grayScale.gray4
        }
        bg={$variant === "user" ? theme.colors.base.white : undefined}
      />
      <MessageRight>
        <MessageAuthor $messageVariant={$variant}>{author}</MessageAuthor>
        <MessageBubble $variant={$variant}>
          <MessageBubbleText>{children}</MessageBubbleText>
        </MessageBubble>
      </MessageRight>
    </MessageStyled>
  );
};
