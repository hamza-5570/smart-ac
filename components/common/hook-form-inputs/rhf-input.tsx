import { Input, InputProps } from "@heroui/input";
import { SlotsToClasses } from "@heroui/theme";
import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

type RHFInputProps = {
  label?: string;
  name: string;
  control: Control<any, any>;
  id?: string;
  type?: string;
  placeholder?: string;
  classNames?:
    | SlotsToClasses<
        | "label"
        | "input"
        | "base"
        | "description"
        | "errorMessage"
        | "mainWrapper"
        | "inputWrapper"
        | "innerWrapper"
        | "clearButton"
        | "helperWrapper"
      >
    | undefined;
  inputProps?: InputProps;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
};

export default function RHFInput({
  control,
  label,
  name,
  type,
  id,
  rules,
  placeholder,
  classNames,
  inputProps,
}: RHFInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <Input
          ref={ref}
          errorMessage={error?.message}
          validationBehavior="aria"
          isInvalid={invalid}
          placeholder={placeholder}
          classNames={classNames}
          label={label}
          labelPlacement="outside"
          variant="flat"
          name={name}
          type={type}
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          {...inputProps}
        />
      )}
      rules={rules}
    />
  );
}
