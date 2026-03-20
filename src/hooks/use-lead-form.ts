"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { leadFormSchema, type LeadFormValues } from "@/lib/lead-schema";
import { submitLead } from "@/lib/integrations/lead-capture";

export type SubmitStatus = "idle" | "success" | "error";

export function useLeadForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("idle");

    try {
      await submitLead(values);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  });

  return {
    form,
    status,
    handleSubmit: onSubmit,
    isSubmitting: form.formState.isSubmitting,
  };
}

