import { Outlet } from "react-router";
import { PageWithSidebarLayoutStyled } from "./styled";

export const PageWithSidebarLayout = () => {
  return (
    <PageWithSidebarLayoutStyled>
      <Outlet />
    </PageWithSidebarLayoutStyled>
  );
};
