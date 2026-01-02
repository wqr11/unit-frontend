import { useUnit } from "effector-react";
import { TeacherSidebarAddLab, TeacherSidebarItemDeleteButton } from "./styled";
import {
  SidebarItem,
  SidebarItemText,
  SidebarScrollbar,
  SidebarStyled,
} from "../../styled";
import { labsModel } from "@/entities/labs";
import { useCallback } from "react";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

import { useNavigate } from "react-router";

export const TeacherSidebar = () => {
  const labs = useUnit(labsModel.$labsForCurrentSubject);
  const createLab = useUnit(labsModel.createLab);
  const deleteLab = useUnit(labsModel.deleteLabFx);

  const navigate = useNavigate();

  return (
    <SidebarStyled $isTeacher>
      <TeacherSidebarAddLab onClick={createLab}>
        Добавить лабу
      </TeacherSidebarAddLab>
      <Typography $variant="p-medium">Лабораторные</Typography>
      <SidebarScrollbar>
        {labs.map((d) => (
          <SidebarItem key={d.id}>
            <Button onClick={() => navigate(`${d.id}`)}>
              <SidebarItemText>{d.name}</SidebarItemText>
            </Button>
            <TeacherSidebarItemDeleteButton onClick={() => deleteLab(d.id)} />
          </SidebarItem>
        ))}
      </SidebarScrollbar>
    </SidebarStyled>
  );
};
