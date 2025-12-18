import { ToOwner } from "@/components/shared/email/toOwner";
import toast from "react-hot-toast";
import nodemailer from "nodemailer";
import { ToClient } from "@/components/shared/email/toClient";

export interface EmailInterface {
  fullName: string;
  email: string;
  phoneNumber: string;
  idnp: string;
  bornDate: Date;
  totalAmount: number;
}
export const sendEmail = async ({
  bornDate,
  email,
  fullName,
  idnp,
  phoneNumber,
  totalAmount,
}: EmailInterface) => {
  const { renderToStaticMarkup } = await import("react-dom/server");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    debug: true,
  });
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error connecting to email server:", error);
    } else {
      console.log("Email server is ready to send messages:", success);
    }
  });
  try {
    const toOwner = await transporter.sendMail({
      from: "BBCredit | Ați primit o nouă solicitare!",
      to: "bbcredit.crm2@gmail.com",
      subject: "Ați primit o nouă solicitare!",
      text: "",
      html: renderToStaticMarkup(
        ToOwner({ bornDate, email, fullName, idnp, phoneNumber, totalAmount })
      ),
    });
    if (email !== "") {
      const toClient = await transporter.sendMail({
        from: "BBCredit",
        to: email,
        subject: "Solicitarea dvs. a fost înregistrată",
        text: "",
        html: renderToStaticMarkup(ToClient({ fullName })),
      });
      return { toOwner, toClient };
    }
    return toOwner;
  } catch (error) {
    toast.error("Email nu a fost trimis!");
    throw error;
  }
};
