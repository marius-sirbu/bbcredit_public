"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  applicationFormSchema,
  TApplicationFormSchema,
} from "../schemas/application-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../ui/form";

import { Button } from "../../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Dictionary, SupportedLang } from "@/lib/getDictionary";

import { Title } from "../title";
import { FormInput } from "./form-input";
import { DataPickerForm } from "./data-picker-form";
import { CheckboxForm } from "./checkbox-form";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";

interface Props {
  className?: string;
  textData: Dictionary["applicationForm"];
  lang: SupportedLang;
}

export const ApplicationForm: React.FC<Props> = ({
  className,
  textData,
  lang,
}) => {
  const form = useForm<TApplicationFormSchema>({
    resolver: zodResolver(applicationFormSchema(lang)),
    defaultValues: {
      name: "",
      lastName: "",
      idnp: "",
      phone: "",
      email: "",
      bornDate: new Date(),
      sum: "",
      personalDataCheck: false,
    },
  });
  async function onSubmit(
    values: z.infer<ReturnType<typeof applicationFormSchema>>
  ) {
    try {
      createOrder(values);
      toast.success(textData.toastSuccess, {
        duration: 3000,
        style: { textAlign: "start" },
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(textData.toastError, {
        duration: 3000,
        style: { textAlign: "start" },
      });
    }
  }
  return (
    <div
      className={cn(
        "flex flex-col bg-gray-100 border-[2px] border-gray-50 rounded-xl mx-4 sm:m-2 mb-20 p-4 shadow-md shadow-gray-100 ",
        className
      )}
    >
      <Title
        text={textData.title}
        size="md"
        className="self-center font-semibold text-primary my-6 text-[22px] "
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 items-start "
        >
          <FormInput
            name="name"
            label={textData.name}
            placeholder={textData.namePlaceholder}
            control={form.control}
          />
          <FormInput
            name="lastName"
            label={textData.lastName}
            placeholder={textData.lastNamePlaceholder}
            control={form.control}
          />
          <FormInput
            name="idnp"
            label={textData.idnp}
            placeholder={textData.idnpPlaceholder}
            control={form.control}
          />
          <FormInput
            name="phone"
            label={textData.phoneNumber}
            placeholder={textData.phoneNumberPlaceholder}
            control={form.control}
          />
          <FormInput
            name="email"
            label={textData.email}
            placeholder={textData.emailPlaceholder}
            control={form.control}
          />

          <DataPickerForm
            locale={lang}
            textData={textData}
            control={form.control}
          />
          <FormInput
            name="sum"
            label={textData.sum}
            placeholder={textData.sumPlaceholder}
            control={form.control}
          />
          <div className=" col-span-2">
            <CheckboxForm
              control={form.control}
              formState={form.formState}
              textData={textData}
            />
          </div>
          <div className="flex justify-center col-span-2  ">
            <Button
              type="submit"
              size={"lg"}
              className="mt-3 mb-3 sm:mb-5 sm:mt-6 w-[90%] sm:w-[40%] self-center font-semibold text-sm"
            >
              {textData.button}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
