import { useUnit } from "effector-react";
import {
  SidebarAddLab,
  SidebarItem,
  SidebarItemDeleteButton,
  SidebarStyled,
} from "./styled";
import { labsModel } from "@/entities/labs";
import { useCallback, useLayoutEffect } from "react";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

import { useNavigate } from "react-router";

export const Sidebar = () => {
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
      <SidebarAddLab onClick={createLab}>Добавить лабу</SidebarAddLab>
      <Typography $variant="p-medium">Лабораторные</Typography>
      {labs.map((d) => (
        <SidebarItem key={d.id}>
          <Button onClick={() => handleClick(d.id)}>
            <Typography $variant="p-normal">{d.id}</Typography>
          </Button>
          <SidebarItemDeleteButton />
        </SidebarItem>
      ))}
    </SidebarStyled>
  );
};
