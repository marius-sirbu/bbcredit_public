"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../ui/calendar";

import { cn } from "@/lib/utils";
import { ro, ru } from "date-fns/locale";
import { Dictionary } from "@/lib/getDictionary";
import { Control } from "react-hook-form";
import { TApplicationFormSchema } from "../schemas/application-form-schema";
interface Props {
  className?: string;
  control: Control<TApplicationFormSchema>;
  locale: "ru-RU" | "ro-RO";
  textData: Dictionary["applicationForm"];
}

export const DataPickerForm: React.FC<Props> = ({
  className,
  locale,
  textData,
  control,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const dateConvertedToLanguage = (value: Date) =>
    new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(value);

  return (
    <FormField
      control={control}
      name="bornDate"
      render={({ field }) => (
        <FormItem
          className={cn("flex flex-col mt-6 mx-1 sm:mx-4 w-full", className)}
        >
          <FormLabel>{textData.dataPicker.label}</FormLabel>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[98%] sm:w-[95%] pl-3 text-[12px] sm:text-[14px] text-left font-normal rounded-md ",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    dateConvertedToLanguage(field.value)
                  ) : (
                    <span>{textData.dataPicker.indication}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                fixedWeeks
                captionLayout="dropdown-buttons"
                locale={locale === "ro-RO" ? ro : ru}
                mode="single"
                selected={field.value}
                onSelect={(e) => {
                  field.onChange(e);
                  setTimeout(() => setIsCalendarOpen(false), 110);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                fromYear={1960}
                toYear={2030}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
