import { sample } from "effector";
import { updateLabFx } from ".";
import { notificationModel } from "@/entities/notifications";

sample({
  clock: updateLabFx,
  target: notificationModel.notify.prepend(() => ({
    title: "Успех",
    text: "Изменено",
  })),
});
