import { useLayoutEffect } from "react";
import { useUnit } from "effector-react";
import { useNavigate } from "react-router";
import {
  SubjectPageAddButton,
  SubjectPageList,
  SubjectPageTitle,
  SubjectPageTop,
  SubjectsPageStyled,
  SubjectsPageWrapper,
} from "./styled";
import { SubjectCard, subjectModel } from "@/entities/subject";
import { CreateSubjectModal, subjectModalModel } from "@/features/subjects";
import { authModel } from "@/entities/auth";

export const SubjectsPageUI = () => {
  const user = useUnit(authModel.$user);

  const [subjects, getSubjects] = useUnit([
    subjectModel.$subjects,
    subjectModel.getSubjectsFx,
  ]);

  const [createModalOpen, setSubjectModalOpen] = useUnit([
    subjectModalModel.$createSubjectModalOpen,
    subjectModalModel.setSubjectModalOpen,
  ]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    getSubjects();
  }, []);

  return (
    <SubjectsPageWrapper>
      <CreateSubjectModal
        open={createModalOpen}
        onClose={() => setSubjectModalOpen(false)}
      />
      <SubjectsPageStyled>
        <SubjectPageTop>
          <SubjectPageTitle>Предметы</SubjectPageTitle>
          {!!user?.is_teacher && (
            <SubjectPageAddButton onClick={() => setSubjectModalOpen(true)}>
              Добавить +
            </SubjectPageAddButton>
          )}
        </SubjectPageTop>
        <SubjectPageList>
          {subjects.map(({ id, name }) => (
            <SubjectCard key={id} onClick={() => navigate(`/subject/${id}`)}>
              {name}
            </SubjectCard>
          ))}
        </SubjectPageList>
      </SubjectsPageStyled>
    </SubjectsPageWrapper>
  );
};
