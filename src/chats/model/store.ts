import { createEvent, sample } from "effector";
import { authModel } from "@/entities/auth";
import { wsModel } from "@/entities/ws";

export const init = createEvent();

sample({
  clock: init,
  target: authModel.getTokensFromCookies,
});

sample({
  clock: authModel.$isAuth,
  filter: (isAuth) => !!isAuth,
  target: wsModel.wsConnectFx,
});
