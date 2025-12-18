import React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  idnp: string;
  bornDate: Date;
  totalAmount: number;
}

export const ToOwner: React.FC<EmailTemplateProps> = ({
  fullName,
  email,
  phoneNumber,
  idnp,
  bornDate,
  totalAmount,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h3>
        Ați primit o nouă solicitare din partea unui client. Mai jos găsiți
        detaliile:
      </h3>

      <table
        style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              Nume complet:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {fullName}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              Email:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {email}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              Număr de telefon:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {phoneNumber}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              IDNP:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{idnp}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              Data nașterii:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {new Date(bornDate).toLocaleDateString()}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                fontWeight: "bold",
              }}
            >
              Sumă totală:
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {totalAmount.toFixed(2)} Lei
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Vă rugăm să răspundeți cât mai curând posibil pentru a oferi o
        experiență excelentă clientului.
      </p>
    </div>
  );
};
