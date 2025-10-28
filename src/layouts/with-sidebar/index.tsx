import { Outlet } from "react-router";
import { PageWithSidebarLayoutStyled } from "./styled";

export const PageWithSidebarLayout = () => (
  <PageWithSidebarLayoutStyled>
    <Outlet />
  </PageWithSidebarLayoutStyled>
);
