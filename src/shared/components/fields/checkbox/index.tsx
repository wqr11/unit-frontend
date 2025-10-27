import React, { PropsWithChildren, useCallback } from "react";
import { CheckboxLabel, CheckboxInput, CheckboxWrapper } from "./styled";

export interface CheckboxProps extends PropsWithChildren {
  $disabled?: boolean;
  onChange?: (value: boolean) => unknown;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  $disabled,
  children,
  onChange,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if ($disabled) {
        return;
      }
      onChange?.(e.target.checked);
    },
    [$disabled]
  );

  return (
    <CheckboxWrapper>
      <CheckboxLabel>{children}</CheckboxLabel>
      <CheckboxInput $disabled onChange={handleChange} />
    </CheckboxWrapper>
  );
};
