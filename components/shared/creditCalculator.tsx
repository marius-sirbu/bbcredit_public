"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Slider } from "../ui/slider";
import { loanCalculator } from "@/lib/loanCalculator";

interface Props {
  className?: string;
  textData: {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    l5: string;
    currency: string;
    date: string;
  };
}

export const CreditCalculator: React.FC<Props> = ({ className, textData }) => {
  const [summaryCredit, setSummaryCredit] = React.useState<number[]>([1000]);
  const [summaryDays, setSummaryDays] = React.useState<number[]>([7]);
  const calcResult = loanCalculator(summaryCredit[0], summaryDays[0]);

  return (
    <div
      className={cn(
        "bg-secondary rounded-2xl max-w-[398px] sm:min-w-[470px] sm:max-w-[470px] ",
        className
      )}
    >
      <div className="flex flex-col ">
        <div className="mx-6 my-5 sm:m-10  ">
          <span className=" font-medium text-md sm:text-xl ">
            {textData.l1} {summaryCredit[0]} {textData.currency}
          </span>
          <Slider
            defaultValue={[1000]}
            value={summaryCredit}
            min={1000}
            max={40000}
            step={100}
            className="mt-4 max-w-[98%]"
            onValueChange={(value) => setSummaryCredit(value)}
          />
        </div>
        <div className="mx-6 my-5 sm:m-10 ">
          <span className="font-medium text-md sm:text-xl ">
            {textData.l2} {summaryDays[0]} {textData.date}
          </span>
          <Slider
            defaultValue={[1]}
            value={summaryDays}
            min={7}
            max={365}
            step={1}
            className="mt-4 max-w-[98%]"
            onValueChange={(value) => setSummaryDays(value)}
          />
        </div>
        <hr className="bg-gray-200 w-[90%] h-[1.5px] self-center" />
        <div className="flex flex-col mx-6 my-10 sm:m-10 gap-6">
          <span className="font-medium text-md sm:text-xl">
            {textData.l3} <b>{calcResult.rambursare.toFixed(2)}</b>{" "}
            {textData.currency}
          </span>
          <span className="font-medium text-md sm:text-xl">
            {textData.l4} <b>{calcResult.dobandaPePerioada.toFixed(2)}</b>{" "}
            {textData.currency}
          </span>
          <span className="font-medium text-md sm:text-xl">
            {textData.l5} <b>49.64 %</b>
          </span>
        </div>
      </div>
    </div>
  );
};
