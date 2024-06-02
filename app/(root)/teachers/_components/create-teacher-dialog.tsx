'use client'

//  UI
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {CreateTeacherForm} from "./create-teacher-form"
import { useState } from "react";

export  function CreateTeacherDialog() {
  const [open, setOpen] = useState(false);
   
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>הוסף מורה חדש</Button>
      </DialogTrigger>
      <DialogContent className="px-8 py-4">
        <CreateTeacherForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
