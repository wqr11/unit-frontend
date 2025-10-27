import { keyframes, styled } from "styled-components";
import { Typography } from "@/components/typography";

const notificationAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const NotificationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  padding: 12px 18px;
  min-width: 180px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray4};
  &:hover {
    outline: 2px dashed ${({ theme }) => theme.colors.grayScale.gray4};
  }
  animation: ${notificationAnimation} 0.15s ease-out 1;
`;

export const NotificationTitle = styled(Typography).attrs({
  $variant: "p-medium",
})``;

export const NotificationText = styled(Typography).attrs({
  $variant: "p-normal",
})``;
