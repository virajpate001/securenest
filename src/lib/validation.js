import { z } from "zod";

export const enquirySchema = z.object({
  vehicle: z.enum(["Two Wheeler", "Three Wheeler", "Four Wheeler", "Commercial Vehicle"], {
    errorMap: () => ({ message: "Please select a vehicle category" }),
  }),
  usage: z.enum(["Private", "Commercial"], {
    errorMap: () => ({ message: "Please select vehicle use" }),
  }),
  requirement: z.enum(["Brand New Vehicle", "Existing Vehicle", "Policy Renewal", "Need Guidance"], {
    errorMap: () => ({ message: "Please select a requirement" }),
  }),
  vehicleClass: z.string().optional().default(""),
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  registration: z.string().max(20).optional().default(""),
  consent: z.boolean().refine((v) => v === true, { message: "Consent is required" }),
  // Honeypot field — must remain empty
  company: z.string().max(0).optional(),
});