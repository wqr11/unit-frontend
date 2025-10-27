import { WsClientMessage } from "../schema";

export type WsEvent = Event & { data: string };

export type WsSendMessageParams = {
  ws: WebSocket;
  message: WsClientMessage;
};
