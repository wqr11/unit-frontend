import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import { InputMessage } from "@/components/fields/input-message";
import { Message } from "@/components/message";
import { ReturnIcon } from "@/icons/return";
import {
  ChatWindowChatBar,
  ChatWindowChatBarName,
  ChatWindowChatBarReturnButton,
  ChatWindowChats,
  ChatWindowEmptyMessageStyled,
  ChatWindowEmptyMessageText,
  ChatWindowEmptyMessageTitle,
  ChatWindowInput,
  ChatWindowStyled,
} from "./styled";
import { useUnit } from "effector-react";
import { chatModel } from "@/entities/chats";
import { wsModel } from "@/entities/ws";
import { userModel } from "@/entities/user";

export const ChatWindow: React.FC = () => {
  const theme = useTheme();

  const [messageText, setMessageText] = useState<string>("");

  const inputMessageRef = useRef<HTMLFormElement>(null);
  const chatsRef = useRef<HTMLDivElement>(null);

  const user = useUnit(userModel.$user);
  const chat = useUnit(chatModel.$activeChat);
  const resetActiveChat = useUnit(chatModel.resetActiveChatId);
  const wsSendMessage = useUnit(wsModel.wsSendMessageFx);

  const emojiNode = useMemo(() => {
    const emojis = ["😃", "😅", "🙂", "🙃", "😉", "😊", "🥰", "😍", "😘", "😜"];

    return emojis[Math.floor(Math.random() * 10)];
  }, []);

  const messagesNode = useMemo(
    () =>
      chat?.messages.map((msg) => (
        <Message
          key={msg.id}
          $variant={user?.id === msg.author.id ? "user" : "companion"}
          author={msg.author.name ?? msg.author.email.split("@")[0]}
        >
          {msg.content}
        </Message>
      )),
    [chat?.messages, user?.id]
  );

  const handleReturn = useCallback(() => {
    resetActiveChat();
  }, [resetActiveChat]);

  const handleSend = useCallback(() => {
    if (!chat?.id || messageText.length === 0) return;
    const text = messageText;
    wsSendMessage({
      event: "CREATE",
      object: "MESSAGE",
      chat: {
        id: chat!.id!,
      },
      message: {
        content: text,
      },
    });
    setMessageText("");
  }, [chat, messageText]);

  const handleKeypress = (e: KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      e.shiftKey &&
      inputMessageRef.current?.contains(document.activeElement)
    ) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (chatsRef.current) {
      chatsRef.current.scroll({
        behavior: "instant",
        top: chatsRef.current.scrollHeight,
      });
    }
  }, [chat]);

  useEffect(() => {
    window.addEventListener("keypress", handleKeypress);

    return () => {
      window.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  return (
    <ChatWindowStyled $activeChatExists={!!chat}>
      {chat && (
        <ChatWindowChatBar>
          <ChatWindowChatBarReturnButton onClick={handleReturn}>
            <ReturnIcon
              width={24}
              height={24}
              fill={theme.colors.grayScale.gray4}
              bg={theme.colors.grayScale.gray2}
            />
          </ChatWindowChatBarReturnButton>
          <ChatWindowChatBarName>{chat?.name}</ChatWindowChatBarName>
        </ChatWindowChatBar>
      )}
      {chat ? (
        <>
          <ChatWindowChats ref={chatsRef}>{messagesNode}</ChatWindowChats>
          <ChatWindowInput>
            <InputMessage
              ref={inputMessageRef}
              onChange={(m) => setMessageText(m)}
              value={messageText}
              onSubmit={handleSend}
            />
          </ChatWindowInput>
        </>
      ) : (
        <ChatWindowEmptyMessageStyled>
          <ChatWindowEmptyMessageTitle>
            Привет {emojiNode}
          </ChatWindowEmptyMessageTitle>
          <ChatWindowEmptyMessageText>
            Выберите чат, чтобы начать общение
          </ChatWindowEmptyMessageText>
        </ChatWindowEmptyMessageStyled>
      )}
    </ChatWindowStyled>
  );
};
