import { useNavigate } from "react-router";
import { useCallback } from "react";
import { useUnit } from "effector-react";
import { labsModel } from "@/entities/labs";

import {
  SidebarItem,
  SidebarItemText,
  SidebarScrollbar,
  SidebarStyled,
} from "../../styled";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";

export const StudentSidebar = () => {
  const labs = useUnit(labsModel.$labsForCurrentSubject);

  const navigate = useNavigate();

  return (
    <SidebarStyled>
      <Typography $variant="p-medium">Лабораторные</Typography>
      <SidebarScrollbar>
        {labs.map((d) => (
          <SidebarItem key={d.id}>
            <Button onClick={() => navigate(d.id)}>
              <SidebarItemText>{d.name}</SidebarItemText>
            </Button>
          </SidebarItem>
        ))}
      </SidebarScrollbar>
    </SidebarStyled>
  );
};
