import { useUnit } from "effector-react";
import { TeacherSidebarAddLab, TeacherSidebarItemDeleteButton } from "./styled";
import {
  SidebarHeading,
  SidebarItem,
  SidebarItemText,
  SidebarScrollbar,
  SidebarStyled,
} from "../../../styled";
import { Button } from "@/shared/components/button";
import { CreateLabModal } from "./modal";

import { useNavigate } from "@/entities/router";
import { labsModel } from "@/entities/labs";
import { subjectModel } from "@/entities/subject";
import { teacherSidebarModel } from "..";

export const TeacherSidebar = () => {
  const labs = useUnit(labsModel.$labsForCurrentSubject);
  const subject = useUnit(subjectModel.$subject);

  const [isModalOpen, toggleModalOpen] = useUnit([
    teacherSidebarModel.$createLabModalOpen,
    teacherSidebarModel.toggleLabModelOpen,
  ]);

  const deleteLab = useUnit(labsModel.deleteLabFx);

  const navigate = useNavigate();

  return (
    <SidebarStyled $isTeacher>
      <CreateLabModal
        open={isModalOpen}
        onClose={() => toggleModalOpen(false)}
      />
      <SidebarHeading>{subject?.name}</SidebarHeading>
      <TeacherSidebarAddLab onClick={() => toggleModalOpen(true)}>
        Добавить лабу
      </TeacherSidebarAddLab>
      <SidebarHeading>Лабораторные</SidebarHeading>
      <SidebarScrollbar>
        {labs.map(({ id, name }) => (
          <SidebarItem key={id} $isTeacher>
            <Button onClick={() => navigate({ direction: "lab", id })}>
              <SidebarItemText>{name}</SidebarItemText>
            </Button>
            <TeacherSidebarItemDeleteButton onClick={() => deleteLab(id)} />
          </SidebarItem>
        ))}
      </SidebarScrollbar>
    </SidebarStyled>
  );
};
