import { SupportedLang } from "@/lib/getDictionary";
import { z } from "zod";

export const applicationFormSchema = (locale: SupportedLang) => {
  return z.object({
    name: z.string().min(2, {
      message:
        locale === "ro-RO" ? "Cel putin 2 simboluri*" : "Минимум 2 символа*",
    }),
    lastName: z.string().min(2, {
      message:
        locale === "ro-RO" ? "Cel putin 2 simboluri*" : "Минимум 2 символа*",
    }),
    idnp: z.string().min(13, {
      message:
        locale === "ro-RO"
          ? "IDNP trebuie să aibă 13 caractere"
          : "IDNP должен содержать 13 символов",
    }),
    phone: z.string().min(9, {
      message:
        locale === "ro-RO"
          ? "Data nașterii este obligatorie*"
          : "Некорректный номер телефона*",
    }),
    email: z
      .string()
      .email({
        message: locale === "ro-RO" ? "Email incorect*" : "Некорректный email*",
      })
      .or(z.literal("")),
    bornDate: z
      .date({
        required_error:
          locale === "ro-RO"
            ? "Data nașterii este obligatorie."
            : "Дата рождения обязательна.",
      })
      .refine(
        (value) => {
          const currentDate = new Date();
          const minAgeDate = new Date();
          minAgeDate.setFullYear(currentDate.getFullYear() - 18);
          return value <= minAgeDate;
        },
        {
          message:
            locale === "ro-RO"
              ? "Trebuie să aveți cel puțin 18 ani."
              : "Вам должно быть не менее 18 лет.",
        }
      ),
    sum: z.string().min(4, {
      message:
        locale === "ro-RO" ? "Sumă insuficientă*" : "Недостаточная сумма*",
    }),
    personalDataCheck: z
      .boolean()
      .refine(async (value) => value === true, {
        message:
          locale === "ro-RO"
            ? "Trebuie să fiți de acord cu prelucrarea datelor personale."
            : "Вы должны согласиться с обработкой персональных данных.",
      })
      .default(false)
      .optional(),
  });
};
export type TApplicationFormSchema = z.infer<
  ReturnType<typeof applicationFormSchema>
>;
