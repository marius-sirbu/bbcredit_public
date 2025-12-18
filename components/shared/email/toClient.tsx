import React from "react";

interface EmailTemplateProps {
  fullName: string;
}

export const ToClient: React.FC<EmailTemplateProps> = ({ fullName }) => {
  return (
    <div className="font-sans text-gray-800 leading-relaxed">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Stimate/Stimată {fullName},
      </h1>

      <p className="mb-4">
        Vă mulțumim pentru solicitarea dvs. Echipa noastră a primit cererea și
        vă va contacta în cel mai scurt timp posibil.
      </p>

      <p className="mb-4">
        Dacă aveți întrebări suplimentare, nu ezitați să ne contactați.
      </p>

      <p className="mt-6 font-semibold">
        Cu respect, <br />
        <span className="text-blue-600">Echipa BB Credit</span>
      </p>
    </div>
  );
};
