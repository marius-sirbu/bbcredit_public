import { NextRequest } from "next/server";
import { SupportedLang } from "./getDictionary";

export const getLocale = (request: NextRequest) => {
  const locales: string[] = ["ro-RO", "ru-RU"];

  const cookies = request.cookies;
  const localeFromCookie = cookies.get("locale")?.value;

  if (localeFromCookie && locales.includes(localeFromCookie)) {
    return localeFromCookie;
  }
  return SupportedLang.Romanian;
};
