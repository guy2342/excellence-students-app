"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { schools, employees, programProfessions } from "../data/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

type TeacherDataTable = {
  id: string;
  firstName: string;
  lastName: string;
  programProfession: string;
  employee: string;
  school: string;
};

export const columns: ColumnDef<TeacherDataTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="תז" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="שם פרטי" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("firstName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="שם משפחה" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("lastName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "school",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="בית ספר" />
    ),
    cell: ({ row }) => {
      const school = schools.find(
        (school) => school.label === row.getValue("school")
      );

      if (!school) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{school.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "employee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="מעסיק" />
    ),
    cell: ({ row }) => {
      const employee = employees.find(
        (employee) => employee.label === row.getValue("employee")
      );

      if (!employee) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{employee.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "programProfession",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="מקצוע בתוכנית" />
    ),
    cell: ({ row }) => {
      const programProfession = programProfessions.find(
        (programProfession) =>
          programProfession.label === row.getValue("programProfession")
      );
      if (!programProfession) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{programProfession.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
