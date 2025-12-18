import { Dictionary } from "@/lib/getDictionary";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { CardBox } from "./cardBox";
import PeopleGroup from "@/public/people_group.png";
import Map3d from "@/public/map.png";
import ApplicationImage from "@/public/application_form.png";
interface Props {
  textData: Dictionary;
  className?: string;
}

export const CardSection: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-10 w-full my-12",
        className
      )}
    >
      <div className="flex flex-col w-full bg-primary rounded-xl hover:">
        <div className="flex justify-end">
          <Image src={PeopleGroup} width={350} alt="PeopleGroup" />
        </div>

        <p className="text-secondary font-medium text-[18px] mx-10 mt-4 mb-8 ">
          {textData.aboutUs.card1}
        </p>
      </div>

      <div className="grid grid-rows-2 gap-10 ">
        <CardBox
          image={Map3d}
          link="/contacts"
          text={{
            title: textData.aboutUs.card2.title,
            subTitle: textData.aboutUs.card2.subTitle,
            button: textData.aboutUs.card2.button,
          }}
        />
        <CardBox
          image={ApplicationImage}
          link="/"
          text={{
            title: textData.aboutUs.card3.title,
            subTitle: textData.aboutUs.card3.subTitle,
            button: textData.aboutUs.card3.button,
          }}
        />
      </div>
    </div>
  );
};
