import { cn } from "@/lib/utils";
import React from "react";
import LinkImage from "@/public/link.png";
import { Links } from "./links";
import { Dictionary } from "@/lib/getDictionary";

interface Props {
  textData: Dictionary;
  className?: string;
}

export const Docs: React.FC<Props> = ({ className, textData }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-4 gap-5 mx-4 sm:gap-20 my-16",
        className
      )}
    >
      <Links
        docName={textData.aboutUs.docs.doc1}
        docLink="/docs/Regulament_privind_prestarea_serviciilor_de_Credit.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc2}
        docLink="/docs/Regulament_privind_cadrul_de_administrare_a_activitii.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc3}
        docLink="/docs/Reguli_privind_Mecanismul_de_solutionare_a_petitiilor.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc4}
        downloadLink={true}
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc5}
        docLink="/docs/Extras_din_Registrul_organizațiilor_de_creditare_nebancară_autorizate.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc6}
        docLink="/docs/Informaii_standard_privind_acordarea_creditului_nebancar.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc7}
        docLink="/docs/Raport_audit_OCN_BB_ONE_CREDIT_SRL_2023.pdf"
        image={LinkImage}
      />
      <Links
        docName={textData.aboutUs.docs.doc8}
        docLink="/docs/Raport_audit_OCN_BB_ONE_CREDIT_SRL_2024.pdf"
        image={LinkImage}
      />
    </div>
  );
};
