import { BrowserRouter, Routes, Route } from "react-router";
import { ChatsLayout } from "@/layouts/chats";
import { ChatsPage } from "@/pages/chats";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ChatsLayout />}>
          <Route path="/chats" index element={<ChatsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
