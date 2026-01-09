import React, { CSSProperties, useCallback } from "react";
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
  style?: CSSProperties;
  onClose?: () => unknown;
}

export const Modal: React.FC<ModalProps> = React.memo(
  ({ title, children, open = true, closable = true, style, onClose }) => {
    const handleClose = useCallback(() => {
      if (!closable) return;
      onClose?.();
    }, [closable]);

    return (
      <>
        {open && (
          <ModalWrapperStyled>
            <ModalBackdrop onClick={handleClose} />
            <ModalStyled style={style}>
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
