import { IChat, IMessage, IUser } from "@/shared/types/db";

type WsServerMessageGenericFields = {
  status: "OK";
  event: "CREATE" | "DELETE" | "INITIALIZE";
};

type WsServerMessageObjectFields =
  | {
      object: "CHAT" | "SEARCH_CHATS";
      data: IChat[];
    }
  | {
      object: "MESSAGE";
      data: IMessage[];
    }
  | {
      object: "USER";
      data: IUser;
    };

type WsServerMessageErrorFields = {
  status: "ERROR";
  error: unknown;
};

export type WsServerMessage =
  | (WsServerMessageGenericFields & WsServerMessageObjectFields)
  | WsServerMessageErrorFields;
