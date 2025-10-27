import { Typography } from "@/components/typography";
import { SubmitButtonStyled } from "./styled";

export interface SubmitButtonProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => unknown;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  fullWidth,
  onClick,
}) => {
  return (
    <SubmitButtonStyled onClick={onClick} $fullWidth={fullWidth}>
      <Typography $variant="p-medium">{children}</Typography>
    </SubmitButtonStyled>
  );
};
