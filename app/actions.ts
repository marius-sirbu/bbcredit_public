"use server";
import { TApplicationFormSchema } from "@/components/shared/schemas/application-form-schema";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function createOrder(data: TApplicationFormSchema) {
  try {
    await sendEmail({
      bornDate: data.bornDate,
      email: data.email,
      fullName: data.name + " " + data.lastName,
      idnp: data.idnp,
      phoneNumber: data.phone,
      totalAmount: Number(data.sum),
    });
    await prisma.order.create({
      data: {
        fullName: data.name + " " + data.lastName,
        email: data.email,
        phoneNumber: data.phone,
        idnp: data.idnp,
        bornDate: data.bornDate,
        totalAmount: Number(data.sum),
        status: "PENDING",
      },
    });
  } catch (error) {
    console.error(error);
    JSON.parse(
      JSON.stringify(
        NextResponse.json(
          { message: "Failed to create order" },
          { status: 500 }
        )
      )
    );
  } finally {
    return JSON.parse(
      JSON.stringify(
        NextResponse.json(
          { message: "Order created successfully" },
          { status: 200 }
        )
      )
    );
  }
}
