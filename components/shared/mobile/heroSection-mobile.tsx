"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "../title";
import { Button } from "@/components/ui/button";
import { CreditCalculator } from "../creditCalculator";
import MoneyHand from "../../../public/money-hand-01.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useStoreSection } from "@/store/useSection";
import { scrollToApplicationForm } from "@/lib/scrollToApplicationForm ";

interface Props {
  className?: string;
  textData: {
    title: string;
    preTitle: string;
    paragraph: string;
    button: string;
    loanCalculator: {
      mobileTitle: string;
      l1: string;
      l2: string;
      l3: string;
      l4: string;
      l5: string;
      currency: string;
      date: string;
    };
  };
}

export const HeroSectionMobile: React.FC<Props> = ({ className, textData }) => {
  const { ref } = useStoreSection();
  return (
    <div className={cn("flex flex-col bg-primary overflow-hidden", className)}>
      <div className="mt-6  px-4">
        <Badge variant="outline" className="text-primary bg-secondary p-1 my-4">
          {textData.preTitle}
        </Badge>
        <Title
          className="text-secondary font-bold mb-6 text-4xl w-[90%]"
          size="2xl"
          text={
            <>
              {textData.title.slice(0, -10)}
              <b className="text-[#BDE35A] text-[34px]">
                {textData.title.slice(-10)}
              </b>
            </>
          }
        />
        <div>
          <p className="text-secondary font-regular text-lg mb-6 w-[]">
            {textData.paragraph}
          </p>
        </div>
        <div className="flex justify-center   content-center w-full mb-4">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="w-[90%] font-semibold flex flex-1 text-[18px]"
            onClick={() => scrollToApplicationForm(ref)}
          >
            {textData.button}
          </Button>
        </div>
        <div className="relative mb-8 ">
          <Image
            src={MoneyHand}
            alt="MoneyImage"
            width={130}
            className="absolute top-[80px] right-[-65px] rotate-[-20deg] z-20"
            unoptimized
          />
          <div className="flex justify-center z-40">
            <Title
              text={textData.loanCalculator.mobileTitle}
              size="lg"
              className="text-secondary mt-10 justify-center font-semibold z-20"
            />
          </div>

          <div className="flex justify-center">
            <CreditCalculator
              className="z-10 mt-6"
              textData={textData.loanCalculator}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
