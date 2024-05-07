"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Coordinator = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  schoolName: string
  employerName: string
  username: string
  password: string
}

export const columns: ColumnDef<Coordinator>[] = [
  {
    accessorKey: "id",
    header: "תז",
  },
  {
    accessorKey: "firstName",
    header: "שם פרטי",
  },
  {
    accessorKey: "lastName",
    header: "שם משפחה",
  },
  {
    accessorKey: "email",
    header: "מייל",
  },
  {
    accessorKey: "phone",
    header: "טלפון",
  },
  {
    accessorKey: "schoolName",
    header: "בית ספר",
  },
  {
    accessorKey: "employerName",
    header: "מעסיק",
  },
  {
    accessorKey: "username",
    header: "שם משתמש",
  },
  {
    accessorKey: "password",
    header: "סיסמא",
  },
]
