'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  code: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
})

export default function CreateTeacherForm() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      code: "",
      address: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

   
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              <FormDescription>This is the name of the teacher.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Code Field */}
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="code">Code</FormLabel>
              <FormControl>
                <Input id="code" placeholder="Enter code" {...field} />
              </FormControl>
              <FormDescription>This is the code of the teacher.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address Field */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="address">Address</FormLabel>
              <FormControl>
                <Input id="address" placeholder="Enter address" {...field} />
              </FormControl>
              <FormDescription>This is the address of the teacher.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
