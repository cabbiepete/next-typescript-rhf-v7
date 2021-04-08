import React from "react";
import { useController, RegisterOptions, UseFormReturn } from "react-hook-form";
import { TextField, TextFieldProps } from "@material-ui/core";

type RHFRulesType = {
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
};

export type ControlledTextFieldProps = TextFieldProps &
  RHFRulesType &
  Pick<UseFormReturn, "control">;
export const ControlledTextField = ({
  control,
  name,
  rules = {
    required: "Required"
  },

  defaultValue = "",
  ...rest
}: ControlledTextFieldProps): JSX.Element => {
  const {
    field: { ref, onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    name,
    control,
    rules,
    defaultValue
  });
  return (
    <TextField
      {...rest}
      error={!!error}
      helperText={error?.message}
      onBlur={onBlur}
      onChange={onChange}
      inputRef={ref}
      name={name}
      value={value}
      required={!!rules.required}
    />
  );
};
