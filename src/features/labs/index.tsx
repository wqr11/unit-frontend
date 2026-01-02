import { useMemo } from "react";
import { useUnit } from "effector-react";

import { authModel } from "@/entities/auth";
import { labsModel } from "@/entities/labs";
import { routerModel } from "@/entities/router";

import { TeacherLabWindow, TeacherSidebar } from "./teacher";
import { StudentLabWindow, StudentSidebar } from "./student";

export const LabsPage = () => {
  const user = useUnit(authModel.$user);
  const labs = useUnit(labsModel.$labsForCurrentSubject);
  const labId = useUnit(routerModel.$labId);

  const lab = useMemo(() => labs.find((l) => l.id === labId), [labs, labId]);

  return (
    <>
      {user?.is_teacher ? (
        <>
          <TeacherSidebar />
          <TeacherLabWindow lab={lab} />
        </>
      ) : (
        <>
          <StudentSidebar />
          <StudentLabWindow lab={lab} />
        </>
      )}
    </>
  );
};
