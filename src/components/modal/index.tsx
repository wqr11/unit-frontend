import React, { useCallback } from "react";
import {
  ModalBackdrop,
  ModalCloseButton,
  ModalStyled,
  ModalTitle,
  ModalTop,
  ModalWrapperStyled,
} from "./styled";

export interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  open?: boolean;
  closable?: boolean;
  onClose?: () => unknown;
}

export const Modal: React.FC<ModalProps> = React.memo(
  ({ title, children, open = true, closable = true, onClose }) => {
    const handleClose = useCallback(() => {
      if (closable) {
        onClose?.();
      }
    }, [closable]);

    return (
      <>
        {open && (
          <ModalWrapperStyled>
            <ModalBackdrop onClick={handleClose} />
            <ModalStyled>
              <ModalTop>
                <ModalTitle>{title}</ModalTitle>
                {closable && <ModalCloseButton onClick={handleClose} />}
              </ModalTop>
              {children}
            </ModalStyled>
          </ModalWrapperStyled>
        )}
      </>
    );
  }
);
