import { PropsWithChildren } from "react";
import * as S from "./styled";

export interface SubjectProps extends PropsWithChildren {
  href: string;
}

export const Subject: React.FC<SubjectProps> = ({ href, children }) => {
  return (
    <S.SubjectStyled href={href}>
      <S.SubjectTitle>{children}</S.SubjectTitle>
    </S.SubjectStyled>
  );
};
