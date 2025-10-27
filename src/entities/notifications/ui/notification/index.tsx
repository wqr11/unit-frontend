import React from "react";
import {
  NotificationStyled,
  NotificationText,
  NotificationTitle,
} from "./styled";

export interface NotificationProps {
  title?: string;
  children?: string;
}

export const Notification: React.FC<NotificationProps> = React.memo(
  ({ children, title }) => {
    return (
      <NotificationStyled>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationText>{children}</NotificationText>
      </NotificationStyled>
    );
  }
);
