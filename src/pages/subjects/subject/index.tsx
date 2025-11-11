import { PropsWithChildren } from "react";
import * as S from "./styled";

export interface SubjectProps extends PropsWithChildren {
  onClick?: () => unknown;
}

export const Subject: React.FC<SubjectProps> = ({ onClick, children }) => {
  return (
    <S.SubjectStyled onClick={onClick}>
      <S.SubjectTitle>{children}</S.SubjectTitle>
    </S.SubjectStyled>
  );
};
