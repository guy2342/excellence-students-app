"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { employees, programProfessions, schools } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { isNumeric } from "@/lib/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 gap-2 items-center space-x-2">
        <Input
          placeholder="חפש תז, שם פרטי, שם משפחה..."
          value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            const filterValue = event.target.value;
            table.getColumn("id")?.setFilterValue(filterValue);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("school") && (
          <DataTableFacetedFilter
            column={table.getColumn("school")}
            title="בתי ספר"
            options={schools}
          />
        )}
        {table.getColumn("employee") && (
          <DataTableFacetedFilter
            column={table.getColumn("employee")}
            title="מעסיק"
            options={employees}
          />
        )}
        {table.getColumn("programProfession") && (
          <DataTableFacetedFilter
            column={table.getColumn("programProfession")}
            title="מקצוע בתוכנית"
            options={programProfessions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            נקה
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}
