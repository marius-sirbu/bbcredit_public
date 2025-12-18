import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo_black_svg-01.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dictionary } from "@/lib/getDictionary";
import Link from "next/link";

interface Props {
  textData: Dictionary["footer"];
  className?: string;
}

export const Footer: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 border-t-[1.5px] w-full",
        className
      )}
    >
      <div className="flex flex-col col-span-2 sm:col-span-1 mx-6 pt-6">
        <div className="h-[55px]">
          <Image src={Logo} alt="Logo" width={125} unoptimized />
        </div>
        <ul className="flex flex-col gap-2 my-6 font-medium text-gray-600">
          <li>{"O.C.N. 'B&B ONE CREDIT' S.R.L."}</li>
          <li>IDNO: 1020600022645</li>
          <li>{textData.address}</li>
        </ul>
      </div>
      <div className="flex flex-col col-span-2 sm:col-span-1 mx-6 pt-6">
        <h6 className="sm:h-[55px] text-lg font-semibold">
          {textData.col2.title}
        </h6>
        <ul className="flex flex-col gap-2 my-6 font-medium  cursor-pointer">
          <li>
            <Link href={`/aboutUs`}>{textData.col2.link1}</Link>
          </li>
          <li>
            <Link href={`/contacts`}>{textData.col2.link2}</Link>
          </li>
          <li>
            <Dialog>
              <DialogTrigger>{textData.col2.link3}</DialogTrigger>
              <DialogContent className="max-w-[95%] sm:max-w-[30%] rounded-lg">
                <DialogHeader>
                  <DialogTitle>{textData.dialog.dialogTitle}</DialogTitle>
                  <div className="text-gray-600">
                    <div className="flex flex-col my-4">
                      <span className="text-base font-gray-700 font-semibold">
                        {textData.dialog.t1}
                      </span>
                      <p>{textData.dialog.s1}</p>
                    </div>
                    <div className="flex flex-col my-4">
                      <span className="text-base font-gray-700 font-semibold">
                        {textData.dialog.t2}
                      </span>
                      <p>{textData.dialog.s2}</p>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
    </div>
  );
};
