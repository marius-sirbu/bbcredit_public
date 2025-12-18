"use client";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface Props {
  docName: string;
  docLink?: string;
  image: string | StaticImport;
  className?: string;
  downloadLink?: boolean;
}

export const Links: React.FC<Props> = ({
  className,
  image,
  docName,
  docLink,
  downloadLink = false,
}) => {
  const handleOpenPdf = () => {
    if (!downloadLink) window.open(docLink, "_blank");
  };
  const handleDownload = () => {
    if (downloadLink) {
      const link = document.createElement("a");
      link.href = "/docs/Raport_audit_OCN_BB_ONE_CREDIT_SRL_2022.docx";
      link.download = "Raport Audit 2022.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div
      className={cn(
        "flex sm:flex-col items-center sm:items-start  bg-secondary border-[2px] border-gray-100 rounded-xl min-h-[90px] sm:min-h-[150px] cursor-pointer hover:shadow-lg transition-all ease-out duration-500",
        className
      )}
      onClick={() => (handleOpenPdf(), handleDownload())}
    >
      <Image
        className="m-4 w-[45px] sm:w-[50px] object-contain"
        src={image}
        alt="link"
        unoptimized
      />
      <span className="font-medium p-4 border-l-[1.5px] border-dashed sm:border-0">
        {docName}
      </span>
    </div>
  );
};
