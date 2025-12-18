import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo_svg.svg";
import LogoRed from "../../../public/logo_red_svg.svg";
import { Menu } from "lucide-react";
import { HeaderMenu } from "./header-menu";
import { Dictionary, SupportedLang } from "@/lib/getDictionary";
import Link from "next/link";

interface Props {
  isSecondary?: boolean;
  lang: SupportedLang;
  textData: Dictionary["headerMobile"];
  className?: string;
}

export const HeaderMobile: React.FC<Props> = ({
  className,
  textData,
  lang,
  isSecondary = false,
}) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center bg-primary",
        { "bg-white": isSecondary },
        className
      )}
    >
      <div className="p-4">
        <Link href="/">
          <Image src={isSecondary ? LogoRed : Logo} alt="Logo" width={80} />
        </Link>
      </div>
      <div className="p-4 text-white">
        <HeaderMenu
          triggerText={<Menu className={cn({ "text-primary": isSecondary })} />}
          textData={textData}
          lang={lang}
        />
      </div>
    </header>
  );
};
