import { RefObject } from "react";

export const scrollToApplicationForm = (
  value: React.RefObject<HTMLDivElement> | RefObject<null>
) => {
  return value?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
