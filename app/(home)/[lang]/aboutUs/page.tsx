import { Container, Footer, Header, Title } from "@/components/shared";
import { getDictionary, SupportedLang } from "@/lib/getDictionary";
import { HeaderMobile } from "@/components/shared/mobile";
import { CardSection } from "@/components/shared/aboutUs/cardSection";
import { CardSectionMobile } from "@/components/shared/aboutUs/cardSectionMobile";
import { Docs } from "@/components/shared/aboutUs/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Aflați mai multe despre compania noastră, valorile și misiunea noastră.",
};

export default async function Page({
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

      <Container className="flex flex-col items-center justify-center mx-0 sm:mx-auto">
        <Title
          text={textData.aboutUs.title}
          size="xl"
          className="font-semibold text-primary text-[28px] sm:text-[40px] mt-6 "
        />
        <p className="font-semibold mt-1 mx-2 text-center text-base sm:text-[22px]">
          {textData.aboutUs.subTitle}
        </p>
        <CardSection
          textData={textData}
          className="hidden sm:visible sm:grid"
        />
        <CardSectionMobile textData={textData} className="visible sm:hidden " />
        <Title
          text={textData.aboutUs.docs.title}
          size="xl"
          className="font-semibold text-primary text-[28px] sm:text-[40px] mt-6 mx-2 "
        />
        <p className="font-medium mt-1 mx-2 text-center sm:text-center text-base sm:text-[22px]">
          {textData.aboutUs.docs.subTitle}
        </p>
        <Docs textData={textData} />
        <Footer textData={textData.footer} className="w-full" />
      </Container>
    </div>
  );
}
