import React, { useCallback } from "react";

import { LoginModal } from "../login";
import { SignUpModal } from "../signup";
import { useUnit } from "effector-react";
import { authModalModel } from "./model";
import { authModel } from "@/entities/auth";

export const AuthModal = React.memo(() => {
  const isAuth = useUnit(authModel.$isAuth);

  const signUpModalOpen = useUnit(authModalModel.$signUpModalOpen);
  const loginModalOpen = useUnit(authModalModel.$loginModalOpen);
  const setSignUpModalOpen = useUnit(authModalModel.setSignUpModalOpen);
  const setLoginModalOpen = useUnit(authModalModel.setLoginModalOpen);

  const handleSwitchToLogin = useCallback(() => {
    setSignUpModalOpen(false);
    setLoginModalOpen(true);
  }, [setSignUpModalOpen, setLoginModalOpen]);

  const handleSwitchToSignUp = useCallback(() => {
    setSignUpModalOpen(true);
    setLoginModalOpen(false);
  }, [setSignUpModalOpen, setLoginModalOpen]);

  if (isAuth) {
    return null;
  }

  return (
    <>
      <SignUpModal
        open={signUpModalOpen}
        onChangeToLogin={handleSwitchToLogin}
      />
      <LoginModal
        open={loginModalOpen}
        onChangeToSignUp={handleSwitchToSignUp}
      />
    </>
  );
});
