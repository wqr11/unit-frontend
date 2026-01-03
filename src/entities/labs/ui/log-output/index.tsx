import { PropsWithChildren } from "react";
import {
  LogOutputStyled,
  LogOutputText,
  TestResultItem,
  TestStatus,
  LogEntry,
  TestResults,
} from "./styled";

import { TestLabsResult as TestResult } from "../..";
import { Typography } from "@/components/typography";

export interface LogOutputProps extends PropsWithChildren {
  data?: TestResult;
}

export const LogOutput: React.FC<LogOutputProps> = ({ children, data }) => {
  const displayLogs = data?.logs || [];

  if (!data) {
    return (
      <LogOutputStyled>
        <LogOutputText>{children}</LogOutputText>
      </LogOutputStyled>
    );
  }

  return (
    <LogOutputStyled>
      <TestResults>
        <TestStatus $passed={data.correct}>
          <Typography $variant="p-normal">
            {data.passed_tests} / {data.total_tests} тестов пройдено
            {data.total_tests > 0 &&
              ` (${(data.success_rate * 100).toFixed(1)}%)`}
          </Typography>
        </TestStatus>

        {data.detailed_results.map((test, index) => (
          <TestResultItem
            key={test.test_number || index}
            $passed={test.correct}
          >
            <Typography $variant="p-medium">
              Test {test.test_number}:{" "}
              {test.correct ? "✅ Пройден" : "❌ Не пройден"}
            </Typography>

            {test.input && (
              <div>
                <Typography $variant="p-normal">Входные данные: </Typography>
                <LogOutputText>{test.input}</LogOutputText>
              </div>
            )}

            {test.diff && <LogOutputText $warning>{test.diff}</LogOutputText>}
          </TestResultItem>
        ))}

        {data.errors.length > 0 && (
          <div>
            <Typography $variant="p-medium">Ошибки: </Typography>
            {data.errors.map((error, index) => (
              <LogOutputText key={index} $error>
                {error}
              </LogOutputText>
            ))}
          </div>
        )}

        {displayLogs.length > 0 && (
          <div>
            <Typography $variant="p-medium">Логи исполнения:</Typography>
            <LogEntry>
              <LogOutputText>{data.logs.join("\n")}</LogOutputText>
            </LogEntry>
          </div>
        )}
      </TestResults>
    </LogOutputStyled>
  );
};
