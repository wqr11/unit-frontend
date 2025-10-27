import React from "react";

import { ChatStyled, ChatName, ChatLeft } from "./styled";
import { IChat } from "@/shared/types/db";

export interface ChatItemProps {
  chat: Omit<IChat, "messages" | "users">;
  handleClick?: (id: string) => unknown;
}

export const ChatItem: React.FC<ChatItemProps> = React.memo(
  ({ chat, handleClick }) => {
    return (
      <ChatStyled onClick={() => handleClick?.(chat.id)}>
        <ChatLeft>
          <ChatName>{chat.name ?? "Безымянный"}</ChatName>
        </ChatLeft>
      </ChatStyled>
    );
  }
);
