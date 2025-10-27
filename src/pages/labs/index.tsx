import { Sidebar, LabWindow } from "@/features/labs";
import { LabsPageStyled } from "./styled";
import { useParams } from "react-router";
import { useUnit } from "effector-react";
import { labsModel } from "@/entities/labs";
import { useMemo } from "react";

export const LabsPage = () => {
  const params = useParams<{ id?: string }>();

  const { id } = params;

  const labs = useUnit(labsModel.$labs);

  const lab = useMemo(() => labs.find((lab) => lab.id === id), [labs, params]);

  return (
    <LabsPageStyled>
      <Sidebar />
      <LabWindow lab={lab} />
    </LabsPageStyled>
  );
};
