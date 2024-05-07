import { Button } from "@/components/ui/button";
import { Coordinator, columns } from "./columns";
import { DataTable } from "./data-table";
import Search from "@/components/search";

async function getData(): Promise<Coordinator[]> {
  // Fetch data from your API here.
  return [
    {
      id: "123412341",
      firstName: "גיא",
      lastName: "גולדן",
      email: "guy@gmail.com",
      phone: "054-1234567",
      schoolName: "עירייה",
      employerName: "נווה דוד",
      username: "guy",
      password: "1234",
    },
    {
      id: "525252252",
      firstName: "1גיא",
      lastName: "sfsaf",
      email: "guy234@gmail.com",
      phone: "054-1234567",
      schoolName: "עירייה",
      employerName: "נווה דוד",
      username: "guy1",
      password: "1234",
    },
    {
      id: "626262262",
      firstName: "2גיא",
      lastName: "sfsaf",
      email: "guy234@gmail.com",
      phone: "054-1234567",
      schoolName: "עירייה",
      employerName: "נווה דוד",
      username: "guy2",
      password: "1234",
    },
  ];
}

export default async function CoordinatorsPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10 flex flex-col gap-4">
      <Button variant={"outline"} size={"lg"} className="w-16 self-end">
        הוספה
      </Button>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
