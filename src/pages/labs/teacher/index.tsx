import { TeacherSidebar, TeacherLabWindow } from "@/features/labs";
import { useUnit } from "effector-react";
import { labsModel } from "@/entities/labs";
import { useMemo } from "react";
import { routerModel } from "@/entities/router";

export const TeacherLabsPage = () => {
  const labs = useUnit(labsModel.$labs);
  const labId = useUnit(routerModel.$labId);

  const lab = useMemo(
    () => labs.find((lab) => lab.id === labId),
    [labs, labId],
  );
  return (
    <>
      <TeacherSidebar />
      <TeacherLabWindow lab={lab} />
    </>
  );
};
