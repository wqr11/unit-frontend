import { createEffect } from "effector";

export const navigateFx = createEffect((href: string) => {
  window.location.href = href;
});
