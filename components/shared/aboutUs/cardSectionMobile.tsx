import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import PeopleGroup from "@/public/people_group.png";
import Map3d from "@/public/map.png";
import ApplicationImage from "@/public/application_form.png";
import { Dictionary } from "@/lib/getDictionary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Props {
  textData: Dictionary;
  className?: string;
}

export const CardSectionMobile: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 items-center w-full my-6 min-h-[395px]",
        className
      )}
    >
      <div className="flex justify-center items-center bg-primary w-[95%]  min-h-[170px] rounded-xl p-4">
        <Image
          src={PeopleGroup}
          alt="PeopleGroup"
          width={100}
          className="object-contain"
          unoptimized
        />
        <p className="text-[12px] text-secondary  mx-4">
          {textData.aboutUs.card1}
        </p>
      </div>

      <div className="flex items-center bg-primary w-[95%] min-h-[170px] rounded-xl p-4">
        <Image src={Map3d} alt="Map" width={100} className="object-contain" unoptimized/>
        <div className="flex flex-col justify-start gap-2 mx-4">
          <h3 className="text-secondary">{textData.aboutUs.card2.title}</h3>
          <p className="text-[12px] text-secondary  mb-2">
            {textData.aboutUs.card2.subTitle}
          </p>
          <Button variant={"secondary"} size={"sm"}>
            <Link href="/contacts">{textData.aboutUs.card2.button}</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center bg-primary w-[95%] min-h-[170px] rounded-xl p-4">
        <Image
          src={ApplicationImage}
          alt="ApplicationImage"
          width={100}
          className="object-contain"
          unoptimized
        />
        <div className="flex flex-col justify-start gap-2 mx-4">
          <h3 className="text-secondary">{textData.aboutUs.card3.title}</h3>
          <p className="text-[12px] text-secondary mb-2">
            {textData.aboutUs.card3.subTitle}
          </p>
          <Button variant={"secondary"} size={"sm"}>
            <Link href="/">{textData.aboutUs.card3.button}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
