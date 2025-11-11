import { Outlet } from "react-router";
import { PageWithSidebarLayoutStyled } from "./styled";
import { useLayoutEffect } from "react";
import { useUnit } from "effector-react";
import { authModel } from "@/entities/auth";
import { labsModel } from "@/entities/labs";

export const PageWithSidebarLayout = () => {
  const [getMe, getLabs] = useUnit([authModel.getMeFx, labsModel.getLabsFx]);

  useLayoutEffect(() => {
    getMe();
    getLabs();
  }, []);

  return (
    <PageWithSidebarLayoutStyled>
      <Outlet />
    </PageWithSidebarLayoutStyled>
  );
};
