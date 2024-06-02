"use server";

import { db } from "@/lib/db";
import { ValidationError } from "@/lib/errors";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Form State types
type Form = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username?: string;
  password?: string;
};

type FieldErrorsState = {
  status: "field-errors";
  errors: Partial<Record<keyof Form, string>>;
};

type DefaultState = {
  status: "default";
};

type SubmitErrorState = {
  status: "error";
  errors: string;
};

type SuccessState = {
  status: "success";
};

export type CreateTeacherState = { form: Form } & (
  | SuccessState
  | SubmitErrorState
  | FieldErrorsState
  | DefaultState
);

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phone: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export async function createTeacherAction(
  state: CreateTeacherState,
  formData: FormData
): Promise<CreateTeacherState> {
  const submittedForm = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    username: formData.get("username") as string,
    password: formData.get("phone") as string,
  };

  try {
     formSchema.parse(submittedForm);
    

    console.log("Form: ", submittedForm);
    const emailExists = await db.teacher.findUnique({
      where: {
        email: submittedForm.email,
      },
    });
    if (emailExists) {
      return {
        form: submittedForm,
        status: "field-errors",
        errors: {
          email: "Email already exists",
        },
      };
    }

    const usernameExists = await db.teacher.findUnique({
      where: {
        username: submittedForm.username,
      },
    });
    if (usernameExists) {
      return {
        form: submittedForm,
        status: "field-errors",
        errors: {
          username: "Username already exists",
        },
      };
    }

    const createdTeacher = await db.teacher.create({
      data: {
        firstName: submittedForm.firstName,
        lastName: submittedForm.lastName,
        email: submittedForm.email,
        phone: submittedForm.phone,
        username: submittedForm.username,
        password: submittedForm.password,
      },
    });

    revalidatePath("/teachers");
    return {
      form: createdTeacher,
      status: "success",
    };
  } catch (err) {
    const error = err as Error;
    if (error instanceof ValidationError) {
      return {
        form: submittedForm,
        status: "field-errors",
        errors: error.getErrors(),
      };
    } else {
      return {
        form: submittedForm,
        status: "error",
        errors: error.message,
      };
    }
  }
}
