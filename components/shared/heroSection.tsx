"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CreditCalculator } from "./creditCalculator";
import Image from "next/image";
import MoneyHand from "../../public/money-hand_2.png";
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

export const HeroSection: React.FC<Props> = ({ className, textData }) => {
  const { ref } = useStoreSection();
  return (
    <div
      className={cn("flex items-center bg-primary min-h-[600px]", className)}
    >
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col items-start justify-center ">
          <Title
            size="2xl"
            text={
              <>
                {textData.title.slice(0, -10)}
                <b className="text-[#BDE35A] text-[54px]">
                  {textData.title.slice(-10)}
                </b>
              </>
            }
            className="text-secondary font-bold mb-8 leading-[65px] w-[520px]"
          />
          <div className="bg-secondary p-1 mb-8">
            <h2 className="font-bold text-[48px] text-primary">
              {textData.preTitle}
            </h2>
          </div>
          <p className="text-secondary font-regular text-lg mb-4 ">
            {textData.paragraph}
          </p>
          <Button
            className="font-semibold text-lg"
            variant="secondary"
            size={"lg"}
            onClick={() => scrollToApplicationForm(ref)}
          >
            {textData.button}
            <ArrowRight />
          </Button>
        </div>
        <div className="my-6 ml-6 flex justify-end ">
          <CreditCalculator
            className="z-10"
            textData={textData.loanCalculator}
          />
          <div className="absolute bottom-[200px] right-[445px]">
            <Image src={MoneyHand} alt="money" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
};
