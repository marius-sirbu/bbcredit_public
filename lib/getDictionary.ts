export enum SupportedLang {
  Romanian = "ro-RO",
  Russian = "ru-RU",
}

const dictionaries = {
  "ro-RO": () =>
    import("../dictionaries/ro.json").then((module) => module.default),
  "ru-RU": () =>
    import("../dictionaries/ru.json").then((module) => module.default),
};
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["ro-RO"]>>;
export const getDictionary = async (
  locale: SupportedLang
): Promise<Dictionary> => dictionaries[locale]();
