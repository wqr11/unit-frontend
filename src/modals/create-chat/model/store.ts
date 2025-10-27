import { wsSendMessageFx } from "@/entities/ws/model";
import { createStore, createEvent, sample } from "effector";

export const submit = createEvent<void>();

export const setModalShown = createEvent<boolean>();
export const $modalShown = createStore<boolean>(false).on(
  setModalShown,
  (_, data) => data
);

export const setName = createEvent<string>();
export const $name = createStore<string>("").on(setName, (_, data) => data);

sample({
  clock: submit,
  source: $name,
  target: [
    wsSendMessageFx.prepend<string>((name) => ({
      event: "CREATE",
      object: "CHAT",
      chat: {
        name,
      },
    })),
    setName.prepend(() => ""),
    setModalShown.prepend(() => false),
  ],
});
