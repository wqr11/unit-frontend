import {
  SubjectPageTitle,
  SubjectsPageStyled,
  SubjectsPageWrapper,
} from "./styled";
import { Subject } from "./subject";
import { useUnit } from "effector-react";
import { subjectModel } from "@/entities/subject";
import { useLayoutEffect, useMemo } from "react";
import { authModel } from "@/entities/auth";

export const SubjectsPageUI = () => {
  const user = useUnit(authModel.$user);

  const [subjects, getSubjects] = useUnit([
    subjectModel.$subjects,
    subjectModel.getSubjectsFx,
  ]);

  const accountTypeSegment = useMemo(
    () => (user?.is_teacher ? "teacher" : "student"),
    [user],
  );

  useLayoutEffect(() => {
    getSubjects();
  }, []);

  return (
    <SubjectsPageWrapper>
      <SubjectsPageStyled>
        <SubjectPageTitle>Предметы</SubjectPageTitle>
        {subjects.map(({ id, name }) => (
          <Subject key={id} href={`/subject/${id}/${accountTypeSegment}`}>
            {name}
          </Subject>
        ))}
      </SubjectsPageStyled>
    </SubjectsPageWrapper>
  );
};
