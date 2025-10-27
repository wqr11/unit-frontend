import { authModel } from "@/entities/auth";
import { sample } from "effector";
import { createGate } from "effector-react";

export const RootLayoutGate = createGate();

sample({
  clock: RootLayoutGate.open,
  target: authModel.getTokensFromCookies,
});
