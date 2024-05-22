"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createSchoolAction } from "@/actions/school";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  street: z.string().min(2).max(50),
  number: z.string().min(2).max(50),
});

export default function CreateSchoolForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
      street: "",
      number: "",
      phone: "",
    },
  });



  return (
    <Form {...form} >
      <form action={createSchoolAction}  className="space-y-8">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input id="name" placeholder="Enter name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the teacher.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormControl>
                <Input id="city" placeholder="Enter city" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the teacher.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="street">Street</FormLabel>
              <FormControl>
                <Input id="street" placeholder="Enter street" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the teacher.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="number">Number</FormLabel>
              <FormControl>
                <Input id="number" placeholder="Enter number" {...field} />
              </FormControl>
              <FormDescription>
                This is the number of the teacher.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl>
                <Input id="phone" placeholder="Enter phone" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the teacher.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
