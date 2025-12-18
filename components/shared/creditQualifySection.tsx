import { Dictionary } from "@/lib/getDictionary";
import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "./card";
import Image from "next/image";
import card_1_image from "@/public/card_1.png";
import card_2_image from "@/public/card_2.png";
import card_3_image from "@/public/card_3.png";

interface Props {
  textData: Dictionary["creditQualify"];
  className?: string;
}

export const CreditQualifySection: React.FC<Props> = ({
  className,
  textData,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-3 sm:grid-rows-1  sm:grid-cols-3 gap-10 my-10 mx-6 sm:mx-0 ",
        className
      )}
    >
      <Card
        classNameImage="justify-self-start min-w-full col-span-1"
        image={
          <Image
            src={card_1_image}
            alt="Buletin de indentitate"
            width={170}
            className="m-4 h-[170px] object-cover"
            unoptimized
          />
        }
        textData={{
          title: textData.card_1_title,
          content: textData.card_1_content,
        }}
      />
      <Card
        classNameImage="justify-self-start"
        image={
          <Image
            src={card_2_image}
            alt="Telefon mobil"
            width={170}
            className="m-4  h-[170px] object-cover"
            unoptimized
          />
        }
        textData={{
          title: textData.card_2_title,
          content: textData.card_2_content,
        }}
      />
      <Card
        classNameImage="justify-self-start"
        image={
          <Image
            src={card_3_image}
            alt="Vârstă"
            width={170}
            className="m-4  h-[170px] object-cover"
            unoptimized
          />
        }
        textData={{
          title: textData.card_3_title,
          content: textData.card_3_content,
        }}
      />
    </div>
  );
};
