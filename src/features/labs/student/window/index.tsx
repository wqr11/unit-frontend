import { Textarea } from "@/shared/components/fields/textarea";
import { LabWindowStyled } from "../../styled";
import { StudentLabWindowFields } from "./styled";
import { LogOutput } from "@/entities/labs";

export const StudentLabWindow = () => {
  return (
    <LabWindowStyled>
      <StudentLabWindowFields>
        <Textarea label="Решение" />
        <LogOutput>
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
        </LogOutput>
      </StudentLabWindowFields>
    </LabWindowStyled>
  );
};
