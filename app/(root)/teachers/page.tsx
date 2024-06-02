import { columns } from "./_components/columns";
import { CreateTeacherDialog } from "./_components/create-teacher-dialog";
import { DataTable } from "./_components/data-table";
import { taskSchema } from "./data/schema";

export default async function TeachersPage() {
  // Get all teachers
  // Display teacher in table
  // Add button to create new teacher
  return (
    <div className="container flex flex-col px-8 py-4 h-full w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="dark:text-black">טבלת מורים</h1>
        </div>
        <CreateTeacherDialog />
      </div>
      <div>
        <DataTable
          columns={columns}
          data={[
            {
              id: "test1",
              label: "label1",
              priority: "low",
              status: "todo",
              title: "test1",
            },

            {
              id: "test2",
              label: "label2",
              priority: "high",
              status: "done",
              title: "test2",
            },
          ]}
        />
      </div>
    </div>
  );
}
