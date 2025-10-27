import { useEffect } from "react";

import { ChatWindow } from "@/widgets/chat-window";

import { useUnit } from "effector-react";
import { chatsPageModel } from "../model";

export const ChatsPage = () => {
  const init = useUnit(chatsPageModel.init);

  useEffect(() => {
    init();
  }, [init]);

  return <ChatWindow />;
};
