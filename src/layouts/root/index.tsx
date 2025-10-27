import { PropsWithChildren, useLayoutEffect } from "react";
import { RootLayoutStyled } from "./styled";
import { useUnit } from "effector-react";
import { authModel } from "@/entities/auth";
import { authModalModel } from "@/features/auth/model";

export interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const isAuth = useUnit(authModel.$isAuth);

  const setLoginModalOpen = useUnit(authModalModel.setLoginModalOpen);

  useLayoutEffect(() => {
    if (!isAuth) {
      setLoginModalOpen(true);
    }
  }, [isAuth]);

  return <RootLayoutStyled>{children}</RootLayoutStyled>;
};
