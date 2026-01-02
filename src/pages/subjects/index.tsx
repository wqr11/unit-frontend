import {
  SubjectPageList,
  SubjectPageTitle,
  SubjectsPageStyled,
  SubjectsPageWrapper,
} from "./styled";
import { useUnit } from "effector-react";
import { SubjectCard, subjectModel } from "@/entities/subject";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

export const SubjectsPageUI = () => {
  const [subjects, getSubjects] = useUnit([
    subjectModel.$subjects,
    subjectModel.getSubjectsFx,
  ]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    getSubjects();
  }, []);

  return (
    <SubjectsPageWrapper>
      <SubjectsPageStyled>
        <SubjectPageTitle>Предметы</SubjectPageTitle>
        <SubjectPageList>
          {subjects.map(({ id, name }) => (
            <SubjectCard key={id} onClick={() => navigate(id)}>
              {name}
            </SubjectCard>
          ))}
        </SubjectPageList>
      </SubjectsPageStyled>
    </SubjectsPageWrapper>
  );
};
