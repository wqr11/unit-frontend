import { Outlet } from "react-router";

import { PropsWithChildren } from "react";
import { RootLayoutStyled } from "./styled";

import { useGate, useUnit } from "effector-react";

import { authModalModel } from "@/features/auth/model";
import { LoginModal } from "@/features/login";
import { SignUpModal } from "@/features/signup";
import { RootLayoutGate } from "./model";
import { Notifications } from "@/entities/notifications";

export interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = () => {
  useGate(RootLayoutGate);

  const [isAuthModalOpen, modalType, toggleModalType] = useUnit([
    authModalModel.$authModalOpen,
    authModalModel.$authModalType,
    authModalModel.toggleModalType,
  ]);

  return (
    <RootLayoutStyled>
      <Notifications />
      <LoginModal
        open={isAuthModalOpen && modalType === "LOGIN"}
        onChangeToSignUp={toggleModalType}
      />
      <SignUpModal
        open={isAuthModalOpen && modalType === "SIGNUP"}
        onChangeToLogin={toggleModalType}
      />
      <Outlet />
    </RootLayoutStyled>
  );
};
