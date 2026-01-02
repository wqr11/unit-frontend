import { PropsWithChildren } from "react";
import * as S from "./styled";

export interface SubjectCardProps extends PropsWithChildren {
  onClick?: () => unknown;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  onClick,
  children,
}) => {
  return (
    <S.SubjectCardStyled onClick={onClick}>
      <S.SubjectCardTitle>{children}</S.SubjectCardTitle>
    </S.SubjectCardStyled>
  );
};
