import CreateSchoolForm from "@/components/createSchoolForm";
import CreateTeacherForm from "@/components/createTeacherForm";

export default async function SchoolsPage() {
  return (
    <div className="flex flex-col p-4">
      <div className="w-1/2">
        <h2 className="text-2xl">בתי ספר</h2>
      </div>
      {/* Cards  */}
      {/* Table  */}
      <CreateSchoolForm/>
    </div>
  );
}
