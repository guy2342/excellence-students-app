"use client";

import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  idleText: string;
  submittingText: string;
}
export function SubmitButton({
  idleText,
  submittingText,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className={cn(
        "disabled:bg-gray-400 disabled:cursor-default",
        props.className
      )}
      disabled={pending}
    >
      {pending ? (
        <div className="flex justify-center items-center gap-2">
          {" "}
          <span>{submittingText}</span>{" "}
          <Loader className="animate-spin repeat-infinite" />{" "}
        </div>
      ) : (
        idleText
      )}
    </Button>
  );
}
