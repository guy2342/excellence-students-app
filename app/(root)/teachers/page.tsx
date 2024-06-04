import { Button } from "@/components/ui/button";
import { columns } from "./_components/columns";
import { CreateTeacherDialog } from "./_components/create-teacher-dialog";
import { DataTable } from "./_components/data-table";

export default async function TeachersPage() {
  // Get all teachers
  // Display teacher in table
  // Add button to create new teacher
  return (
    <div className="container flex flex-col px-8 py-4 h-full w-full">
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold ">טבלת מורים</h1>
        </div>
        <div className="flex gap-2">
          <CreateTeacherDialog />
          <Button variant={"ghost"}>ייצוא</Button>
        </div>
      </div>
      <div>
        <DataTable
          columns={columns}
          data={[
            {
              id: "312243066",
              firstName: "גיא",
              lastName: "חזות",
              programProfession:"מתמטיקה",
              employee:"עירייה",
              school:"חוגים"
            },
            {
              id: "123456789",
              firstName: "גיא",
              lastName: "חזות",
              programProfession:"מתמטיקה",
              employee:"עירייה",
              school:"חוגים"
            },
          ]}
        />
      </div>
    </div>
  );
}
