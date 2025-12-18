"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { useStoreSection } from "@/store/useSection";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  image?: StaticImport;
  text: {
    title: string;
    subtitle: string;
  };
  shouldSetRef?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<Props> = ({
  className,
  text,
  image,
  shouldSetRef = false,
}) => {
  const ref = React.useRef(null);
  const { setRef } = useStoreSection();
  React.useEffect(() => {
    if (shouldSetRef) {
      setRef(ref);
    }
  }, []);
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-2 justify-center items-center mt-14 sm:mt-16 mb-10 sm:mb-16   mx-4 sm:mx-0",
        className
      )}
    >
      <Title
        text={text.title}
        size="sm"
        className="text-[28px] sm:text-[40px] font-semibold text-primary text-center"
      />
      <h3 className="text-[18px]  sm:text-xl font-semibold text-gray-800 text-center">
        {text.subtitle}
      </h3>
      {image && <Image src={image} alt="faqImage" width={90} unoptimized/>}
    </div>
  );
};
