import { NotificationsStyled } from "./styled";
import { Notification } from "./notification";

import { useUnit } from "effector-react";
import { notificationModel } from "..";

export const Notifications = () => {
  const notifications = useUnit(notificationModel.$notifications);
  return (
    <NotificationsStyled>
      {notifications.map((notification) => (
        <Notification key={notification.id} title={notification.title}>
          {notification.text}
        </Notification>
      ))}
    </NotificationsStyled>
  );
};
