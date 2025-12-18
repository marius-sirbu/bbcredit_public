import { Dictionary } from "@/lib/getDictionary";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  textData: Dictionary["contacts"];
  className?: string;
}

export const MapAddress: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 mt-12 w-full bg-secondary rounded-xl ",
        className
      )}
    >
      <div className="flex flex-col col-span-2 sm:col-span-1">
        <div className="flex flex-col m-5 sm:m-10 border-b-[1px] border-gray-300">
          <span className="font-semibold text-[18px] sm:text-[22px] mb-2">
            {textData.address.name}
          </span>
          <span className="flex font-semibold text-[14px] sm:text-base border-gray-700 mb-2">
            {textData.address.address1}
            <ArrowRight className="mx-2 w-6" />
          </span>
        </div>
        <div className="flex flex-col gap-2 m-5 sm:m-10 border-b-[1px] border-gray-300">
          <span className="font-semibold text-[18px] sm:text-[22px] mb-2">
            {textData.phone.name}
          </span>
          <Link href="tel:+37360066331">
            <span className="flex font-semibold text-[14px] sm:text-base border-gray-700 mb-2">
              {textData.phone.phone1}
              <Phone className="mx-2 w-5" />
            </span>
          </Link>

          <Link href="tel:+37360066332">
            <span className="flex font-semibold text-[14px] sm:text-base border-gray-700 mb-2">
              {textData.phone.phone2}
              <Phone className="mx-2 w-5" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mx-5 my-5 sm:mx-10 sm:my-4 ">
          <span className="font-semibold text-[18px] sm:text-[22px] mb-2">
            {textData.email.name}
          </span>
          <Link href="mailto:bbcredit.crm@gmail.com">
            <span className="flex font-semibold text-[14px] sm:text-base border-gray-700 mb-2">
              {textData.email.emailAdress}
              <Mail className="mx-2 w-5" />
            </span>
          </Link>
        </div>
      </div>

      <div className="p-4 col-span-2 sm:col-span-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d571.8345491258386!2d28.843136364941586!3d47.01827192352427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1735329033095!5m2!1sru!2s"
          className="border-2 rounded-xl w-full sm:w-[600px] h-[450px] "
        ></iframe>
      </div>
    </div>
  );
};
