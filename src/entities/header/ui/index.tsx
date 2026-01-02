import { useNavigate } from "react-router";
import * as S from "./styled";
import { useUnit } from "effector-react";
import { authModel } from "@/entities/auth";

export const Header = () => {
  const user = useUnit(authModel.$user);

  const navigate = useNavigate();

  return (
    <S.HeaderStyled>
      <S.HeaderSubjectLink onClick={() => navigate("/")}>
        /home
      </S.HeaderSubjectLink>
      {!!user?.id && (
        <S.HeaderGroup>
          <S.HeaderUsername>{user?.email || user?.id}</S.HeaderUsername>
          <S.HeaderLogout />
        </S.HeaderGroup>
      )}
    </S.HeaderStyled>
  );
};
