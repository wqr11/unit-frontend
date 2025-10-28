import { TeacherSidebar, TeacherLabWindow } from "@/features/labs";
import { useParams } from "react-router";
import { useUnit } from "effector-react";
import { labsModel } from "@/entities/labs";
import { useMemo } from "react";

export const TeacherLabsPage = () => {
  const params = useParams<{ id?: string }>();

  const { id } = params;

  const labs = useUnit(labsModel.$labs);

  const lab = useMemo(() => labs.find((lab) => lab.id === id), [labs, params]);

  return (
    <>
      <TeacherSidebar />
      <TeacherLabWindow lab={lab} />
    </>
  );
};
