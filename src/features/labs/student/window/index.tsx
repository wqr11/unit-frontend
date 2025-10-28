import { Textarea } from "@/components/fields/textarea";
import { Typography } from "@/components/typography";
import { LabWindowStyled } from "../../styled";
import {
  StudentLabWindowButtons,
  StudentLabWindowFields,
  StudentLabWindowTestButton,
} from "./styled";
import { ILab, LogOutput, labsModel } from "@/entities/labs";
import { $form } from "./model";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { useLayoutEffect, useMemo } from "react";

export interface StudentLabWindowProps {
  lab?: ILab;
}

export const StudentLabWindow: React.FC<StudentLabWindowProps> = ({ lab }) => {
  const form = useForm($form);

  const labsResults = useUnit(labsModel.$labsTestResults);

  const data = useMemo(
    () => labsResults.find((l) => l.id === lab?.id),
    [labsResults, lab]
  );

  useLayoutEffect(() => {
    if (!lab) return;

    form.setForm(lab);
  }, [lab]);

  if (!lab) return;

  return (
    <LabWindowStyled>
      <Typography $variant="p-medium">
        Работа: {lab?.name ?? "<пусто>"}
      </Typography>
      <StudentLabWindowFields>
        <Textarea
          style={{ gridArea: "answer" }}
          label="Решение"
          value={form.fields.student_code.value}
          onChange={form.fields.student_code.onChange}
        />
        <LogOutput data={data} />
      </StudentLabWindowFields>
      <StudentLabWindowButtons>
        <StudentLabWindowTestButton onClick={() => form.submit()}>
          Test
        </StudentLabWindowTestButton>
        <StudentLabWindowTestButton>Submit</StudentLabWindowTestButton>
      </StudentLabWindowButtons>
    </LabWindowStyled>
  );
};
