"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { Error } from "@/components/ui/error";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  type CreateTeacherState,
  createTeacherAction,
} from "../_actions/create-teacher.action";

const initialFormState: CreateTeacherState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  },
  status: "default",
};

type CreateTeacherFormProps = {
  setOpen: (open:boolean) => void;
};
export function CreateTeacherForm({ setOpen }: CreateTeacherFormProps) {
  const { toast } = useToast();

  const [formState, onCreateItemAction] = useFormState(
    createTeacherAction,
    initialFormState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.status === "success") {
      toast({
        title: "נוסף מורה",
        description: "המורה הוגדר בהצלחה במערכת.",
      });
      formRef.current?.reset();
      setOpen(false)
    }
  }, [toast, formState, setOpen]);

  return (
    <>
      <h2 className="text-3xl mb-2">הוספת מורה</h2>
      {formState.status === "error" && (
        <Alert variant={"destructive"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Uh oh!</AlertTitle>
          <AlertDescription>{formState.errors}</AlertDescription>
        </Alert>
      )}
      <form
        ref={formRef}
        action={onCreateItemAction}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col"></div>
        <Label htmlFor="firstName">שם פרטי</Label>
        <Input
          data-testid="firstName"
          defaultValue={formState.form.firstName}
          name="firstName"
          id="firstName"
          autoFocus
          hasError={
            formState.status === "field-errors" && !!formState.errors.firstName
          }
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.firstName} />
        )}

        <Label htmlFor="lastName">שם משפחה</Label>
        <Input
          data-testid="lastName"
          defaultValue={formState.form.lastName}
          name="lastName"
          id="lastName"
          autoFocus
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.lastName} />
        )}
        <Label htmlFor="email">אימייל</Label>
        <Input
          data-testid="email"
          defaultValue={formState.form.email}
          name="email"
          id="email"
          autoFocus
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.email} />
        )}

        <Label htmlFor="phone">מספר טלפון</Label>
        <Input
          data-testid="phone"
          defaultValue={formState.form.phone}
          name="phone"
          id="phone"
          autoFocus
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.phone} />
        )}

        <Label htmlFor="username">שם משתמש</Label>
        <Input
          data-testid="username"
          defaultValue={formState.form.username}
          name="username"
          id="username"
          autoFocus
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.username} />
        )}

        <Label htmlFor="password">סיסמא</Label>
        <Input
          data-testid="password"
          defaultValue={formState.form.password}
          name="password"
          id="password"
          autoFocus
        ></Input>
        {formState.status === "field-errors" && (
          <Error error={formState.errors.password} />
        )}

        <SubmitButton
          type="submit"
          idleText="הוספה"
          submittingText="שולח..."
          className="mt-8"
        />
      </form>
    </>
  );
}
