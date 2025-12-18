import { cn } from "@/lib/utils";
import React from "react";
type InterfaceType = "primary" | "secondary";

interface Props {
  interfaceType?: InterfaceType;
  image: React.ReactElement;
  textData: {
    title: string;
    content: string;
  };
  className?: string;
  classNameImage?: string;
}

export const Card: React.FC<Props> = ({
  className,
  classNameImage,
  textData,
  image,
  interfaceType = "secondary",
}) => {
  return (
    <div
      className={cn(
        "bg-secondary rounded-xl border-[2px] border-gray-100 p-4 shadow-gray-100 shadow-lg",
        {
          "bg-primary  border-[2px] border-red-200 shadow-red-200 shadow-lg":
            interfaceType === "primary",
        },
        className
      )}
    >
      <div className={cn("p-1", classNameImage)}>{image}</div>
      <h5
        className={cn("text-primary font-semibold text-xl my-2 sm:my-4", {
          "text-secondary": interfaceType === "primary",
        })}
      >
        {textData.title}
      </h5>
      <p
        className={cn("text-primary font-medium text-sm", {
          "text-secondary": interfaceType === "primary",
        })}
      >
        {textData.content}
      </p>
    </div>
  );
};
