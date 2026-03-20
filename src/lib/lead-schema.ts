import { z } from "zod";

const optionalPhoneSchema = z
  .string()
  .trim()
  .optional()
  .refine((value) => {
    if (!value) {
      return true;
    }

    const digits = value.replace(/\D/g, "");
    return digits.length >= 10;
  }, "Informe um telefone válido com DDD.");

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(80, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(120, "E-mail muito longo."),
  phone: optionalPhoneSchema,
  message: z
    .string()
    .trim()
    .max(400, "Mensagem muito longa.")
    .optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

