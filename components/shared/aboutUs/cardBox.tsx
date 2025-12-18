import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  image: string | StaticImport;
  text: { title: string; subTitle: string; button: string };
  className?: string;
}

export const CardBox: React.FC<Props> = ({ className, text, image, link }) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center bg-primary rounded-xl text-secondary px-10",
        className
      )}
    >
      <div className="justify-center">
        <h3 className="font-semibold text-[18px] mb-2">{text.title}</h3>
        <p className="font-medium">{text.subTitle}</p>
        <Button variant={"secondary"} className="font-semibold mt-4">
          <Link href={link}>{text.button}</Link>
        </Button>
      </div>
      <Image src={image} alt="map" width={200} className="object-contain" />
    </div>
  );
};
