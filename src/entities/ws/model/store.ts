import { createEffect, sample } from "effector";
import ReconnectingWebSocket from "reconnecting-websocket";
import { WS_URL } from "@/shared/config";

import { notificationModel } from "@/entities/notifications";
import { chatModel } from "@/entities/chats";

import { WsEvent } from "./types";
import { WsServerMessage } from "../types";
import { userModel } from "@/entities/user";
import { WsClientMessage, WsClientMessageSchema } from "../schema";
import { authModel } from "@/entities/auth";

let ws: ReconnectingWebSocket;

export const wsReconnectFx = createEffect(() => {
  ws.reconnect();
  return;
});

const wsMessageReceivedFx = createEffect<MessageEvent, void, Error>(
  (e: WsEvent) => {
    const msg = JSON.parse(e.data) as WsServerMessage;

    if (msg.status === "ERROR") {
      notificationModel.notify({
        title: "Ошибка",
        text: JSON.stringify(msg.error),
      });
      return;
    }

    switch (msg.event) {
      case "CREATE":
        switch (msg.object) {
          case "CHAT":
            chatModel.appendChats(msg.data);
            break;
          case "SEARCH_CHATS":
            chatModel.setSearchedChats(msg.data);
            break;
          case "MESSAGE":
            chatModel.appendMessages(msg.data);
            break;
        }
        break;
      case "DELETE":
        switch (msg.object) {
          case "CHAT":
            chatModel.removeChats(msg.data);
            break;
          case "MESSAGE":
            chatModel.removeMessages(msg.data);
            break;
        }
        break;
      case "INITIALIZE":
        if (msg.object === "USER") {
          userModel.setUser(msg.data);
          break;
        }
    }
  }
);

export const wsSendMessageFx = createEffect<WsClientMessage, void, Error>(
  async (message) => {
    const parsedMessage = await WsClientMessageSchema.safeParseAsync(message);

    if (!parsedMessage.success) {
      throw new Error(JSON.stringify(parsedMessage.error.format()));
    }

    ws.send(JSON.stringify(parsedMessage.data));
    return;
  }
);

export const wsConnectFx = createEffect(() => {
  ws = new ReconnectingWebSocket(WS_URL);
  ws.onmessage = wsMessageReceivedFx;
});

sample({
  clock: authModel.refreshFx.doneData,
  target: wsReconnectFx,
});

sample({
  clock: wsSendMessageFx.failData,
  target: notificationModel.notify.prepend((error) => ({
    title: "Ошибка при отправке сообщения",
    text: JSON.stringify(error),
  })),
});
