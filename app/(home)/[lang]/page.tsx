import React from "react";
import {
  Container,
  CreditQualifySection,
  Faq,
  Header,
  HeroSection,
  WhyUs,
  Footer,
} from "@/components/shared";
import { ApplicationForm } from "@/components/shared/form";
import { HeaderMobile } from "@/components/shared/mobile";
import { HeroSectionMobile } from "@/components/shared/mobile/heroSection-mobile";
import { SectionTitle } from "@/components/shared/sectionTitle";
import { getDictionary, SupportedLang } from "@/lib/getDictionary";
import ImageFaq from "@/public/faq-chat.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBCredit | Credite pentru toți până la 40.000 lei",
  description:
    "Aflați mai multe despre compania noastră, valorile și misiunea noastră.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as SupportedLang;
  const textData = await getDictionary(lang);
  return (
    <div>
      <div className="bg-primary">
        <Container className="relative">
          <Header
            textData={textData.header}
            lang={lang}
            className="hidden sm:visible sm:block"
          />
          <HeaderMobile
            textData={textData.headerMobile}
            className="sm:hidden"
            lang={lang}
          />
          <HeroSection
            textData={textData.heroSection}
            className="hidden sm:visible sm:block"
          />
          <HeroSectionMobile
            textData={textData.heroSection}
            className="sm:hidden"
          />
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <SectionTitle
            text={{
              title: textData.applicationForm.outsideFormTitle,
              subtitle: textData.applicationForm.outsideFormSubtitle,
            }}
            shouldSetRef={true}
          />

          <ApplicationForm textData={textData.applicationForm} lang={lang} />
        </Container>
      </div>
      <div>
        <Container>
          <SectionTitle
            text={{
              title: textData.creditQualify.title,
              subtitle: textData.creditQualify.subTitle,
            }}
          />
          <CreditQualifySection textData={textData.creditQualify} />
        </Container>
      </div>
      <div>
        <Container>
          <SectionTitle
            text={{
              title: textData.faq.title,
              subtitle: textData.faq.subTitle,
            }}
            image={ImageFaq}
          />
          <Faq textData={textData.faq} />
        </Container>
      </div>
      <div>
        <Container>
          <SectionTitle
            text={{
              title: textData.whyUs.title,
              subtitle: textData.whyUs.subTitle,
            }}
          />
          <WhyUs textData={textData.whyUs} />
        </Container>
      </div>
      <div>
        <Container>
          <Footer textData={textData.footer} />
        </Container>
      </div>
    </div>
  );
}
