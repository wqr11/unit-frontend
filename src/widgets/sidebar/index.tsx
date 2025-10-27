import React, { useCallback, useMemo, useState } from "react";
import { ChatItem } from "@/components/chat";
import { Search } from "@/components/fields/search";
import {
  SidebarCreateChatButton,
  SidebarCreateChatButtonText,
  SidebarSearch,
  SidebarSearchedChats,
  SidebarSearchedChatsText,
  SidebarStyled,
} from "./styled";
import { useUnit } from "effector-react";
import { chatModel } from "@/entities/chats";
import { wsModel } from "@/entities/ws";
import { createChatModalModel } from "@/features/modals/create-chat/model";

export const Sidebar = React.memo(() => {
  const [search, setSearch] = useState<string>("");

  const setActiveChatId = useUnit(chatModel.setActiveChatId);
  const activeChat = useUnit(chatModel.$activeChat);
  const chats = useUnit(chatModel.$chatsWithoutMessages);

  const setCreateChatModalShown = useUnit(createChatModalModel.setModalShown);

  const sendMessage = useUnit(wsModel.wsSendMessageFx);

  const resetSearchedChats = useUnit(chatModel.resetSearchedChats);
  const searchedChats = useUnit(chatModel.$searchedChats);

  const chatsNode = useMemo(
    () =>
      chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          handleClick={() => setActiveChatId(chat.id)}
        />
      )),
    [chats]
  );

  const handleSearch = useCallback(() => {
    sendMessage({
      event: "SEARCH",
      object: "CHAT",
      chat: {
        name: search.length === 0 ? undefined : search,
      },
    });
  }, [search, sendMessage]);

  const handleJoin = useCallback(({ id }: { id: string }) => {
    sendMessage({
      event: "JOIN",
      object: "CHAT",
      chat: {
        id,
      },
    });
    resetSearchedChats();
  }, []);

  const searchNode = useMemo(
    () =>
      searchedChats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          handleClick={() => handleJoin({ id: chat.id })}
        />
      )),
    [searchedChats]
  );

  return (
    <SidebarStyled $activeChatExists={!!activeChat}>
      <SidebarSearch>
        <Search
          value={search}
          onChange={setSearch}
          onClear={() => {
            setSearch("");
            resetSearchedChats();
          }}
          onSubmit={handleSearch}
        />
      </SidebarSearch>
      <SidebarCreateChatButton onClick={() => setCreateChatModalShown(true)}>
        <SidebarCreateChatButtonText>Создать чат</SidebarCreateChatButtonText>
      </SidebarCreateChatButton>
      {searchedChats.length > 0 && (
        <SidebarSearchedChats>
          <SidebarSearchedChatsText>Найденные чаты</SidebarSearchedChatsText>
          {searchNode}
        </SidebarSearchedChats>
      )}
      {searchedChats.length === 0 && chatsNode}
    </SidebarStyled>
  );
});
