import React from 'react'
import {
  useController,
  RegisterOptions,
  FieldPath,
  Control,
} from 'react-hook-form'
import { TextField, TextFieldProps } from '@material-ui/core'

type RHFRulesType = {
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
}

export type ControlledTextFieldProps<TFieldValues> = TextFieldProps &
  RHFRulesType & {
    // Pick<UseFormReturn<TFieldValues>, 'control'> &
    name: FieldPath<TFieldValues>
    control: Control<TFieldValues>
  }
export function ControlledTextField<TFieldValues>({
  control,
  name,
  rules = {
    required: 'Required',
  },

  defaultValue = '',
  ...rest
}: ControlledTextFieldProps<TFieldValues>): JSX.Element {
  const {
    field: { ref, onChange, onBlur, value },
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
    rules,
    defaultValue,
  })
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
  )
}
