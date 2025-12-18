"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Logo from "../../public/logo_svg.svg";
import LogoRed from "../../public/logo_red_svg.svg";
import Link from "next/link";
import { SupportedLang } from "@/lib/getDictionary";
import { setLocale } from "@/lib/setLocale";

interface Props {
  isSecondary?: boolean;
  textData: {
    l1: string;
    l2: string;
    button: string;
  };
  lang: SupportedLang;
  className?: string;
}

export const Header: React.FC<Props> = ({
  className,
  textData,
  lang,
  isSecondary = false,
}) => {
  return (
    <header className={cn("", className)}>
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              src={isSecondary ? LogoRed : Logo}
              alt="Logo"
              width={125}
              className="my-4"
              unoptimized
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex my-4 font-semibold text-md">
            <li
              className={cn("mr-6 text-white", { "text-primary": isSecondary })}
            >
              <Link href="/contacts">{textData.l1}</Link>
            </li>
            <li
              className={cn("mr-6 text-white", { "text-primary": isSecondary })}
            >
              <Link href="/aboutUs">{textData.l2}</Link>
            </li>
          </ul>
          {isSecondary === false && (
            <div className="ml-6  text-md ">
              <span
                className={cn("pl-2 cursor-pointer text-secondary font-light", {
                  "text-secondary font-bold underline":
                    lang === SupportedLang.Romanian,
                })}
                onClick={() => setLocale(SupportedLang.Romanian)}
              >
                RO
              </span>
              <span
                className={cn("pl-2 cursor-pointer text-secondary font-light", {
                  "text-secondary font-bold underline":
                    lang === SupportedLang.Russian,
                })}
                onClick={() => setLocale(SupportedLang.Russian)}
              >
                RU
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
