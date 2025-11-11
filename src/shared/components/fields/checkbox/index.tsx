import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { CheckboxLabel, CheckboxInput, CheckboxWrapper } from "./styled";

export interface CheckboxProps extends PropsWithChildren {
  $disabled?: boolean;
  checked?: boolean;
  onInput?: (value: boolean) => unknown;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  $disabled = false,
  children,
  checked,
  onInput,
}) => {
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if ($disabled) {
        return;
      }
      onInput?.(!checked);
    },
    [$disabled]
  );

  return (
    <CheckboxWrapper>
      <CheckboxLabel>{children}</CheckboxLabel>
      <CheckboxInput $disabled onInput={handleInput} checked={checked}/>
    </CheckboxWrapper>
  );
};
