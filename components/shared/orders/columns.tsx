"use client";

import { OrderStatus } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export type Order = {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  idnp: string;
  bornDate: Date;
  totalAmount: number;
  status: OrderStatus;

  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fullName",
    header: "Nume",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Număr tel.",
  },
  {
    accessorKey: "idnp",
    header: "IDNP",
  },
  {
    accessorKey: "bornDate",
    header: "Data nașterii",
  },
  {
    accessorKey: "totalAmount",
    header: "Sumă",
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
  },
  {
    accessorKey: "updatedAt",
    header: "updatedAt",
  },
];
