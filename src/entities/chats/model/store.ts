import { combine, createEvent, createStore } from "effector";
import { IChat, IMessage } from "@/shared/types/db";

export const removeMessages = createEvent<Pick<IMessage, "id">[]>();

export const appendMessages = createEvent<IMessage[]>();

export const removeChats = createEvent<Pick<IChat, "id">[]>();

export const appendChats = createEvent<IChat[]>();

export const $chats = createStore<IChat[]>([])
  .on(appendChats, (state, data) => [...state, ...data])
  .on(removeChats, (state, deletedChats) =>
    state.filter(
      (chat) =>
        !deletedChats.map((deletedChat) => deletedChat.id).includes(chat.id)
    )
  )
  .on(appendMessages, (state, data) =>
    state.map((chat) =>
      chat.id === data[0].chatId
        ? { ...chat, messages: [...chat.messages, ...data] }
        : chat
    )
  )
  .on(removeMessages, (state, data) =>
    state.map((chat) =>
      chat.id === data[0].id
        ? {
            ...chat,
            messages: chat.messages.filter((c) => c.id !== data[0].id),
          }
        : chat
    )
  );

export const $chatsWithoutMessages = combine($chats, (chats) =>
  chats.map((chat) => ({ ...chat, messages: undefined }))
);

export const resetSearchedChats = createEvent<void>();
export const setSearchedChats = createEvent<IChat[]>();
export const $searchedChats = createStore<IChat[]>([])
  .on(setSearchedChats, (_, data) => data)
  .reset(resetSearchedChats);

export const resetActiveChatId = createEvent<void>();
export const setActiveChatId = createEvent<string | null>();
export const $activeChatId = createStore<string | null>(null)
  .on(setActiveChatId, (_, data) => data)
  .reset(resetActiveChatId);

export const $activeChat = combine(
  $chats,
  $activeChatId,
  (chats, activeChatId) =>
    chats.find((chat) => chat.id === activeChatId) ?? null
);
