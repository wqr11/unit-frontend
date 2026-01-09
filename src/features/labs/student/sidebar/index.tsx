import { useUnit } from "effector-react";

import { useNavigate } from "@/entities/router";
import { labsModel } from "@/entities/labs";

import {
  SidebarHeading,
  SidebarItem,
  SidebarItemText,
  SidebarScrollbar,
  SidebarStyled,
} from "../../styled";
import { Button } from "@/components/button";
import { subjectModel } from "@/entities/subject";

export const StudentSidebar = () => {
  const labs = useUnit(labsModel.$labsForCurrentSubject);
  const subject = useUnit(subjectModel.$subject);

  const navigate = useNavigate();

  return (
    <SidebarStyled>
      <SidebarHeading>{subject?.name}</SidebarHeading>
      <SidebarScrollbar>
        {labs.map(({ id, name }) => (
          <SidebarItem key={id}>
            <Button onClick={() => navigate({ direction: "lab", id })}>
              <SidebarItemText>{name}</SidebarItemText>
            </Button>
          </SidebarItem>
        ))}
      </SidebarScrollbar>
    </SidebarStyled>
  );
};
