import { Outlet } from "react-router";

import { PropsWithChildren, useEffect, useLayoutEffect } from "react";
import { RootLayoutStyled } from "./styled";

import { useGate, useUnit } from "effector-react";

import { authModalModel } from "@/features/auth/model";
import { LoginModal } from "@/features/login";
import { SignUpModal } from "@/features/signup";
import { RootLayoutGate } from "./model";
import { Notifications } from "@/entities/notifications";
import { authModel } from "@/entities/auth";
import { labsModel } from "@/entities/labs";
import { useParams } from "react-router";
import { routerModel } from "@/entities/router";

export interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = () => {
  useGate(RootLayoutGate);

  const params = useParams<{ labId: string; subjectId: string }>();

  const [setLabId, setSubjectId] = useUnit([
    routerModel.setLabId,
    routerModel.setSubjectId,
  ]);

  const [isAuthModalOpen, modalType, toggleModalType] = useUnit([
    authModalModel.$authModalOpen,
    authModalModel.$authModalType,
    authModalModel.toggleModalType,
  ]);

  const [getMe, getLabs] = useUnit([authModel.getMeFx, labsModel.getLabsFx]);

  useLayoutEffect(() => {
    getMe();
    getLabs();
  }, []);

  useEffect(() => {
    setLabId(params.labId ?? null);
    setSubjectId(params.subjectId ?? null);
  }, [params]);

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
