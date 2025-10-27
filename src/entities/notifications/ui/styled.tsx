import { styled } from "styled-components";

export const NotificationsStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  align-items: end;
  gap: 24px;
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: ${({ theme }) => theme.zIndex.notifications};
`;
