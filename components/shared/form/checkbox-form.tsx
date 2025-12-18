import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import React from "react";
import { Control, FormState } from "react-hook-form";
import { TApplicationFormSchema } from "../schemas/application-form-schema";
import { Dictionary } from "@/lib/getDictionary";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import accord from "@/public/accord.jpg";

interface Props {
  control: Control<TApplicationFormSchema>;
  formState: FormState<TApplicationFormSchema>;
  textData: Dictionary["applicationForm"];
}

export const CheckboxForm: React.FC<Props> = ({
  control,
  formState,
  textData,
}) => {
  return (
    <FormField
      control={control}
      name="personalDataCheck"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 mt-4 h-[65px]">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-[14px] sm:text-[16px] mb-2">
              {textData.checkbox}
              <Dialog>
                <DialogTrigger className="mx-1 underline text-[12px] text-primary font-normal">
                  {textData.supplimentar}
                </DialogTrigger>
                <DialogTitle />
                <DialogContent className="flex justify-center items-center min-w[400px]  sm:min-w-[670px]">
                  <Image
                    src={accord}
                    alt="Accord privind prelucrarea datelor cu caracter personal"
                    className="min-w[400px] sm:min-w-[650px]"
                    unoptimized
                  />
                </DialogContent>
              </Dialog>
            </FormLabel>
            {formState.errors.personalDataCheck && (
              <div className="text-primary text-[12px] pt-2  sm:mt-1">
                {formState.errors.personalDataCheck.message}
              </div>
            )}
          </div>
        </FormItem>
      )}
    />
  );
};
