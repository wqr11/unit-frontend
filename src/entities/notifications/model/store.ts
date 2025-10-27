import { createEffect, createEvent, createStore, sample } from "effector";
import { debounce } from "patronum/debounce";
import { nanoid } from "nanoid";
import { Notification } from "./types";

export const notify = createEvent<Omit<Notification, "id">>();

const notifyFx = createEffect<Omit<Notification, "id">, Notification>(
  (n: Omit<Notification, "id">) => {
    return {
      id: nanoid(),
      title: n?.title,
      text: n?.text,
    };
  }
);

const clearNotification = debounce(notifyFx.doneData, 5000);

export const $notifications = createStore<Notification[]>([])
  .on(notifyFx.doneData, (state, data) => [...state, data])
  .reset(clearNotification);

sample({
  clock: notify,
  target: notifyFx,
});
