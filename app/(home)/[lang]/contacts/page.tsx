import { Container, Footer, Header, Title } from "@/components/shared";
import { MapAddress } from "@/components/shared/contacts/mapAddress";
import { HeaderMobile } from "@/components/shared/mobile";
import { getDictionary, SupportedLang } from "@/lib/getDictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacte",
  description: "Pagina de contact pentru a lua legătura cu noi.",
};

export default async function Contacts({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const lang = (await params).lang;
  const textData = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <Container className="w-full">
        <Header
          textData={textData.header}
          lang={lang}
          className="hidden sm:visible sm:block"
          isSecondary={true}
        />
        <HeaderMobile
          textData={textData.headerMobile}
          className="sm:hidden"
          lang={lang}
          isSecondary={true}
        />
      </Container>
      <Container className="flex flex-col items-center justify-center mx-4 sm:mx-auto">
        <Title
          text={textData.contacts.title}
          size="xl"
          className="font-semibold text-primary text-[28px] sm:text-[40px] mt-6 "
        />
        <p className=" w-full sm:w-[70%] leading-7 font-semibold mt-1 mx-2 text-center text-base sm:text-[22px]">
          {textData.contacts.subTitle}
        </p>

        <MapAddress textData={textData.contacts} />
        <Footer textData={textData.footer} className="mt-6" />
      </Container>
    </div>
  );
}
