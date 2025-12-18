import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "./card";
import { Dictionary } from "@/lib/getDictionary";
import PercentageGif from "@/public/percentage.gif";
import TimeGif from "@/public/time.gif";
import MoneyGif from "@/public/money.gif";
import Image from "next/image";

interface Props {
  textData: Dictionary["whyUs"];
  className?: string;
}

export const WhyUs: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-3 sm:grid-rows-1  sm:grid-cols-3 gap-10 my-10 mx-6 sm:mx-0",
        className
      )}
    >
      <Card
        interfaceType="primary"
        classNameImage="flex "
        image={
          <Image
            unoptimized
            src={PercentageGif}
            alt="Dobândă redusă la credit"
            className="m-4 w-[170px] object-contain  "
          />
        }
        textData={{ title: textData.t1, content: textData.s1 }}
      />
      <Card
        interfaceType="primary"
        classNameImage="flex "
        image={
          <Image
            unoptimized
            src={TimeGif}
            alt="Simplu și rapid"
            className="m-4 w-[170px] object-contain  "

          />
        }
        textData={{ title: textData.t2, content: textData.s2 }}
      />
      <Card
        interfaceType="primary"
        classNameImage="flex "
        image={
          <Image
            unoptimized
            src={MoneyGif}
            alt="Transparență totală"
            className="m-4 w-[170px] object-contain  "
          />
        }
        textData={{ title: textData.t3, content: textData.s3 }}
      />
    </div>
  );
};
