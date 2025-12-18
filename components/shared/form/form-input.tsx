"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Control } from "react-hook-form";
import { TApplicationFormSchema } from "../schemas/application-form-schema";
import { Input } from "../../ui/input";

interface Props {
  type?: string;
  control: Control<TApplicationFormSchema>;
  name: Exclude<keyof TApplicationFormSchema, "bornDate" | "personalDataCheck">;
  label: string;
  placeholder: string;
}

export const FormInput: React.FC<Props> = ({
  type,
  label,
  name,
  placeholder,
  control,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mx-1 sm:mx-4 mt-4 col-span-2 sm:col-span-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
