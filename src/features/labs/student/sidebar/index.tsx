import { useNavigate } from "react-router";
import { useCallback } from "react";
import { useUnit } from "effector-react";
import { labsModel } from "@/entities/labs";

import { SidebarItem, SidebarStyled } from "../../styled";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";

export const StudentSidebar = () => {
  const labs = useUnit(labsModel.$labs);

  const navigate = useNavigate();

  const handleClick = useCallback((url: string) => {
    navigate(`/student/${url}`);
  }, []);

  return (
    <SidebarStyled>
      <Typography $variant="p-medium">Лабораторные</Typography>
      {labs.map((d) => (
        <SidebarItem key={d.id}>
          <Button onClick={() => handleClick(d.id)}>
            <Typography $variant="p-normal">{d.id}</Typography>
          </Button>
        </SidebarItem>
      ))}
    </SidebarStyled>
  );
};
