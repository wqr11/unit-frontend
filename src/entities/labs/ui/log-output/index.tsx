import { PropsWithChildren } from "react";
import { LogOutputStyled, LogOutputText } from "./styled";

export interface LogOutputProps extends PropsWithChildren {}

export const LogOutput: React.FC<LogOutputProps> = ({ children }) => {
  return (
    <LogOutputStyled>
      <LogOutputText>{children}</LogOutputText>
    </LogOutputStyled>
  );
};
