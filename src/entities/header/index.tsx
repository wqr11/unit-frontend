import { useNavigate } from "react-router";
import * as S from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderStyled>
      <S.HeaderSubjectLink onClick={() => navigate("/subject")}>
        Предметы
      </S.HeaderSubjectLink>
    </S.HeaderStyled>
  );
};
