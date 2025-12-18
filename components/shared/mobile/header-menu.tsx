"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dictionary, SupportedLang } from "@/lib/getDictionary";
import Image from "next/image";
import Logo from "@/public/logo_black_svg-01.svg";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { setLocale } from "@/lib/setLocale";

interface Props {
  lang: SupportedLang;
  triggerText: React.ReactNode;
  textData: Dictionary["headerMobile"];
}

export const HeaderMenu: React.FC<Props> = ({
  triggerText,
  textData,
  lang,
}) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>{triggerText}</DrawerTrigger>
      <DrawerContent className="min-h-full rounded-none">
        <DrawerHeader className="flex flex-col mx-2">
          <div className="flex justify-between items-center border-b-[1.5px] pb-4">
            <Link href={"/"}>
              <Image src={Logo} alt="BBLogo" width={80} />
            </Link>

            <div className="flex  sm:ml-6 text-md ">
              <span
                className={cn("pl-2 cursor-pointer text-black font-light", {
                  "text-primary font-bold underline":
                    lang === SupportedLang.Romanian,
                })}
                onClick={() => setLocale(SupportedLang.Romanian)}
              >
                RO
              </span>
              <span
                className={cn("pl-2 cursor-pointer text-black font-light", {
                  "text-primary font-bold underline":
                    lang === SupportedLang.Russian,
                })}
                onClick={() => setLocale(SupportedLang.Russian)}
              >
                RU
              </span>
            </div>
            <DrawerClose className="flex justify-end w-[80px]">
              <Menu />
            </DrawerClose>
          </div>
          <div className="flex flex-col gap-4 py-4 border-b-[1.5px]  ">
            <DrawerTitle className="font-medium text-start text-[20px]">
              <Link href="/aboutUs">{textData.link1}</Link>
            </DrawerTitle>
            <DrawerTitle className="font-medium text-start text-[20px] ">
              <Link href="/contacts">{textData.link2}</Link>
            </DrawerTitle>
          </div>
          <div className="flex flex-col gap-2 py-2 pb-4">
            <DrawerTitle className="font-medium text-start my-2">
              <Button variant={"outline"}>
                <Link
                  href="tel:+37360066331"
                  className="flex items-center gap-3 text-[16px]"
                >
                  <Phone width={22} /> +373 (60) 066 331
                </Link>
              </Button>
            </DrawerTitle>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
