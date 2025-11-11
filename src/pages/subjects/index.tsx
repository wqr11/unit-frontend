import {
  SubjectPageList,
  SubjectPageTitle,
  SubjectsPageStyled,
  SubjectsPageWrapper,
} from "./styled";
import { Subject } from "./subject";
import { useUnit } from "effector-react";
import { subjectModel } from "@/entities/subject";
import { useLayoutEffect, useMemo } from "react";
import { authModel } from "@/entities/auth";
import { useNavigate } from "react-router";

export const SubjectsPageUI = () => {
  const user = useUnit(authModel.$user);

  const [subjects, getSubjects] = useUnit([
    subjectModel.$subjects,
    subjectModel.getSubjectsFx,
  ]);

  const navigate = useNavigate();

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
        <SubjectPageList>
          {subjects.map(({ id, name }) => (
            <Subject
              key={id}
              onClick={() => navigate(`/subject/${id}/${accountTypeSegment}`)}
            >
              {name}
            </Subject>
          ))}
        </SubjectPageList>
      </SubjectsPageStyled>
    </SubjectsPageWrapper>
  );
};
