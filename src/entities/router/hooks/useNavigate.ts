import { useUnit } from "effector-react";
import { useNavigate as useReactNavigate } from "react-router";
import { routerModel } from "../model";

export interface UseNavigateProps {
  direction: "lab" | "subject";
  id: string;
}

export const useNavigate = () => {
  const subjectId = useUnit(routerModel.$subjectId);
  const navigate = useReactNavigate();

  return ({ direction, id }: UseNavigateProps) => {
    switch (direction) {
      case "subject":
        navigate(`/subject/${id}`);
        break;
      default:
      case "lab":
        navigate(`/subject/${subjectId}/${id}`);
        break;
    }
  };
};
