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

  if (data) {
    return (
      <LogOutputStyled>
        <TestResults>
          <TestStatus $passed={data.correct}>
            <Typography $variant="p-normal">
              {data.passed_tests} / {data.total_tests} tests passed
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
                {test.correct ? "✅ Passed" : "❌ Failed"}
              </Typography>

              {test.input && (
                <div>
                  <Typography $variant="p-normal">Input: </Typography>
                  <LogOutputText>{test.input}</LogOutputText>
                </div>
              )}

              {test.expected_output && (
                <div>
                  <Typography $variant="p-normal">Expected: </Typography>
                  <LogOutputText>{test.expected_output}</LogOutputText>
                </div>
              )}

              {test.actual_output && (
                <div>
                  <Typography $variant="p-normal">Actual: </Typography>
                  <LogOutputText>{test.actual_output}</LogOutputText>
                </div>
              )}

              {test.error && (
                <div>
                  <Typography $variant="p-normal">Error: </Typography>
                  <LogOutputText $error>{test.error}</LogOutputText>
                </div>
              )}

              {test.log && (
                <div>
                  <Typography $variant="p-normal">Log: </Typography>
                  <LogOutputText>{test.log}</LogOutputText>
                </div>
              )}

              {test.diff && (
                <div>
                  <Typography $variant="p-normal">Diff: </Typography>
                  <LogOutputText $warning>{test.diff}</LogOutputText>
                </div>
              )}
            </TestResultItem>
          ))}

          {data.errors.length > 0 && (
            <div>
              <Typography $variant="p-medium">Errors: </Typography>
              {data.errors.map((error, index) => (
                <LogOutputText key={index} $error>
                  {error}
                </LogOutputText>
              ))}
            </div>
          )}

          {displayLogs.length > 0 && (
            <div>
              <Typography $variant="p-medium">Execution Logs: </Typography>
              {displayLogs.map((log, index) => (
                <LogEntry key={index}>
                  <LogOutputText>{log}</LogOutputText>
                </LogEntry>
              ))}
            </div>
          )}
        </TestResults>
      </LogOutputStyled>
    );
  }

  return (
    <LogOutputStyled>
      <LogOutputText>{children}</LogOutputText>
    </LogOutputStyled>
  );
};
