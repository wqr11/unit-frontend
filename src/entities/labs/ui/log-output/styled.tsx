import { Typography } from "@/components/typography";
import { styled } from "styled-components";

export const LogOutputStyled = styled.div`
  margin-top: 24px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  max-width: 100%;
  max-height: 400px;
  overflow: auto;
  grid-area: log;
`;

export const LogOutputText = styled(Typography).attrs({
  $variant: "p-medium",
})<{ $error?: boolean; $warning?: boolean }>`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: ${({ theme, $error, $warning }) =>
    $error
      ? theme.colors.semantic.error
      : $warning
      ? theme.colors.semantic.warning
      : theme.colors.base.black};
  background-color: ${({ theme, $error, $warning }) =>
    $error
      ? theme.colors.semantic.errorBg
      : $warning
      ? theme.colors.semantic.warningBg
      : "transparent"};
  padding: ${({ $error, $warning }) => ($error || $warning ? "2px 4px" : "0")};
  border-radius: ${({ $error, $warning }) =>
    $error || $warning ? "2px" : "0"};
  margin: 2px 0;
`;

export const TestResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TestStatus = styled.div<{ $passed: boolean }>`
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme, $passed }) =>
    $passed ? theme.colors.semantic.successBg : theme.colors.semantic.errorBg};
  border: 1px solid
    ${({ theme, $passed }) =>
      $passed ? theme.colors.semantic.success : theme.colors.semantic.error};
`;

export const TestResultItem = styled.div<{ $passed: boolean }>`
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme, $passed }) =>
    $passed ? theme.colors.semantic.successBg : theme.colors.semantic.errorBg};
  border-left: 4px solid
    ${({ theme, $passed }) =>
      $passed ? theme.colors.semantic.success : theme.colors.semantic.error};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LogEntry = styled.div`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray1};
  border-radius: 4px;
  margin: 2px 0;
  border-left: 2px solid ${({ theme }) => theme.colors.grayScale.gray3};
`;
