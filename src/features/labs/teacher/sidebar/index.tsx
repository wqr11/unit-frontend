import { useUnit } from "effector-react";
import { TeacherSidebarAddLab, TeacherSidebarItemDeleteButton } from "./styled";
import { SidebarItem, SidebarStyled } from "../../styled";
import { labsModel } from "@/entities/labs";
import { useCallback, useLayoutEffect } from "react";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

import { useNavigate } from "react-router";

export const TeacherSidebar = () => {
  const labs = useUnit(labsModel.$labs);
  const getLabs = useUnit(labsModel.getLabsFx);
  const createLab = useUnit(labsModel.createLabFx);

  const navigate = useNavigate();

  const handleClick = useCallback((url: string) => {
    navigate(`/teacher/${url}`);
  }, []);

  useLayoutEffect(() => {
    getLabs();
  }, []);

  return (
    <SidebarStyled>
      <TeacherSidebarAddLab onClick={createLab}>
        Добавить лабу
      </TeacherSidebarAddLab>
      <Typography $variant="p-medium">Лабораторные</Typography>
      {labs.map((d) => (
        <SidebarItem key={d.id}>
          <Button onClick={() => handleClick(d.id)}>
            <Typography $variant="p-normal">{d.id}</Typography>
          </Button>
          <TeacherSidebarItemDeleteButton />
        </SidebarItem>
      ))}
    </SidebarStyled>
  );
};
