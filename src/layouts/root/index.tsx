import { Outlet } from "react-router";

import { PropsWithChildren, useCallback, useLayoutEffect } from "react";
import { RootLayoutStyled } from "./styled";

import { useGate, useUnit } from "effector-react";

import { authModalModel } from "@/features/auth/model";
import { LoginModal } from "@/features/login";
import { SignUpModal } from "@/features/signup";
import { RootLayoutGate } from "./model";
import { authModel } from "@/entities/auth";
import { Notifications } from "@/entities/notifications";

export interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = () => {
  useGate(RootLayoutGate);

  const isAuth = useUnit(authModel.$isAuth);

  const [isLoginModalOpen, setLoginModalOpen] = useUnit([
    authModalModel.$loginModalOpen,
    authModalModel.setLoginModalOpen,
  ]);
  const [isSignUpModalOpen, setSignUpModalOpen] = useUnit([
    authModalModel.$signUpModalOpen,
    authModalModel.setSignUpModalOpen,
  ]);

  const handleChangeToSignUp = useCallback(() => {
    setLoginModalOpen(false);
    setSignUpModalOpen(true);
  }, []);

  const handleChangeToLogin = useCallback(() => {
    setSignUpModalOpen(false);
    setLoginModalOpen(true);
  }, []);

  useLayoutEffect(() => {
    setLoginModalOpen(!isAuth);
  }, [isAuth]);

  return (
    <RootLayoutStyled>
      <Notifications />
      <LoginModal
        open={isLoginModalOpen}
        onChangeToSignUp={handleChangeToSignUp}
      />
      <SignUpModal
        open={isSignUpModalOpen}
        onChangeToLogin={handleChangeToLogin}
      />
      <Outlet />
    </RootLayoutStyled>
  );
};
