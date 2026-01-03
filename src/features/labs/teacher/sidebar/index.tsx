import { useNavigate } from "react-router";
import { useUnit } from "effector-react";
import { TeacherSidebarAddLab, TeacherSidebarItemDeleteButton } from "./styled";
import {
  SidebarItem,
  SidebarItemText,
  SidebarScrollbar,
  SidebarStyled,
} from "../../styled";
import { labsModel } from "@/entities/labs";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";

export const TeacherSidebar = () => {
  const labs = useUnit(labsModel.$labsForCurrentSubject);

  const [createLab, deleteLab] = useUnit([
    labsModel.createLab,
    labsModel.deleteLabFx,
  ]);

  const navigate = useNavigate();

  return (
    <SidebarStyled $isTeacher>
      <TeacherSidebarAddLab onClick={createLab}>
        Добавить лабу
      </TeacherSidebarAddLab>
      <Typography $variant="p-medium">Лабораторные</Typography>
      <SidebarScrollbar>
        {labs.map((d) => (
          <SidebarItem key={d.id} $isTeacher>
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
