import { cn } from "@/lib/utils";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dictionary } from "@/lib/getDictionary";

interface Props {
  className?: string;
  textData: Dictionary["faq"];
}

export const Faq: React.FC<Props> = ({ className, textData }) => {
  return (
    <div className={cn("mx-6 sm:mx-0", className)}>
      <Accordion type="multiple" className=" ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start text-lg font-semibold">
            {textData.q1}
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            {textData.r1}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start text-lg font-semibold">
            {textData.q2}
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            {textData.r2}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start text-lg font-semibold">
            {textData.q3}
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            {textData.r3}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start text-lg font-semibold">
            {textData.q4}
          </AccordionTrigger>
          <AccordionContent className="text-base font-medium">
            {textData.r4}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
