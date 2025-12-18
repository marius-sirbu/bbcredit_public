"use server";
import { cookies } from "next/headers";
import { SupportedLang } from "./getDictionary";
import { redirect } from "next/navigation";

export const setLocale = async (value: SupportedLang) => {
  const cookieStore = await cookies();
  try {
    await cookieStore.set("locale", value, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
    });
  } catch (error) {
    console.error(error);
  } finally {
    redirect("/");
  }
};
