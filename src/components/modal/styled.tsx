import { keyframes, styled } from "styled-components";
import { Typography } from "../typography";
import { Button } from "../button";
import { CloseIcon } from "@/icons/close";

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  padding: 24px 36px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  &:hover {
    outline-color: ${({ theme }) => theme.colors.grayScale.gray4};
  }
  animation: ${modalAnimation} 0.3s 1 ease-out forwards;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: -1;
`;

export const ModalTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 36px;
`;

export const ModalTitle = styled(Typography).attrs({
  $variant: "h3-semibold",
})``;

export const ModalCloseButton = styled(Button).attrs({
  children: <CloseIcon width={24} height={24} />,
})``;
