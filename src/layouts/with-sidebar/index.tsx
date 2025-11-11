import { Outlet } from "react-router";
import { PageWithSidebarLayoutStyled } from "./styled";
import { useUnit } from "effector-react";
import { routerModel } from "@/entities/router";
import { useLayoutEffect } from "react";
import { labsModel } from "@/entities/labs";

export const PageWithSidebarLayout = () => {
  const subjectId = useUnit(routerModel.$subjectId);

  const getLabsBySubjectId = useUnit(labsModel.getLabsBySubjectIdFx);

  useLayoutEffect(() => {
    if (!subjectId) return;
    getLabsBySubjectId(subjectId);
  }, [subjectId]);

  return (
    <PageWithSidebarLayoutStyled>
      <Outlet />
    </PageWithSidebarLayoutStyled>
  );
};
