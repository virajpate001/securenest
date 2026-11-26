"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { enquirySchema } from "@/lib/validation";
import { buildWhatsAppUrl, formatEnquiryMessage } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-border-soft bg-bg-main px-4 py-3 text-sm text-primary " +
  "outline-none transition-all focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 " +
  "placeholder:text-text-muted";

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-2 font-manrope text-sm font-bold text-primary">
      <span>{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}

export default function QuoteForm({ defaultRequirement = "" }) {
  const [status, setStatus] = useState("idle"); // idle | opening
  const [fallbackUrl, setFallbackUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      vehicle: "", usage: "", requirement: defaultRequirement,
      vehicleClass: "", name: "", mobile: "", registration: "",
      consent: false, company: "",
    },
  });

  const onSubmit = (data) => {
    setStatus("opening");
    const message = formatEnquiryMessage(data);
    const url = buildWhatsAppUrl(message);
    setFallbackUrl(url);

    setTimeout(() => {
      window.location.href = url;
      reset();
      setStatus("idle");
    }, 300);
  };

  return (
    <Reveal className="rounded-[1.5rem] border border-border-soft bg-white p-8 shadow-brand md:p-10">
      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold text-primary">
          Vehicle insurance enquiry
        </h3>
        <p className="mt-2 text-sm text-text-sec">
          Your details will open securely in WhatsApp — just tap Send to reach our team.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Honeypot */}
        <input
          type="text" tabIndex={-1} autoComplete="off"
          {...register("company")}
          className="hidden" aria-hidden="true"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Vehicle category" error={errors.vehicle?.message}>
            <select {...register("vehicle")} className={inputCls}>
              <option value="">Select vehicle</option>
              <option>Two Wheeler</option>
              <option>Three Wheeler</option>
              <option>Four Wheeler</option>
              <option>Commercial Vehicle</option>
            </select>
          </Field>
          <Field label="Vehicle use" error={errors.usage?.message}>
            <select {...register("usage")} className={inputCls}>
              <option value="">Select use</option>
              <option>Private</option>
              <option>Commercial</option>
            </select>
          </Field>
        </div>

        <Field label="Insurance requirement" error={errors.requirement?.message}>
          <select {...register("requirement")} className={inputCls}>
            <option value="">Select requirement</option>
            <option>Brand New Vehicle</option>
            <option>Existing Vehicle</option>
            <option>Policy Renewal</option>
            <option>Need Guidance</option>
          </select>
        </Field>

        <Field label="Vehicle class (if applicable)" error={errors.vehicleClass?.message}>
          <select {...register("vehicleClass")} className={inputCls}>
            <option value="">Not applicable / Not sure</option>
            <option>LPV – Light Passenger Vehicle</option>
            <option>LMV – Light Motor Vehicle</option>
            <option>LGV – Light Goods Vehicle</option>
            <option>HGV – Heavy Goods Vehicle</option>
          </select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" error={errors.name?.message}>
            <input {...register("name")} placeholder="Enter your name" className={inputCls} />
          </Field>
          <Field label="Mobile number" error={errors.mobile?.message}>
            <input
              {...register("mobile")}
              type="tel" inputMode="numeric" maxLength={10}
              placeholder="10-digit number" className={inputCls}
            />
          </Field>
        </div>

        <Field label="Vehicle registration (optional)" error={errors.registration?.message}>
          <input
            {...register("registration")}
            placeholder="e.g. MH 02 AB 1234" className={inputCls}
          />
        </Field>

        <label className="flex items-start gap-3 rounded-xl bg-bg-soft p-4 text-sm text-text-sec">
          <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 rounded border-border-soft text-brand-yellow focus:ring-brand-yellow" />
          <span>
            I agree to be contacted about this enquiry on WhatsApp and acknowledge the{" "}
            <a href="/privacy-policy" className="font-medium text-primary underline hover:text-brand-yellow">privacy notice</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs font-medium text-red-500">{errors.consent.message}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-2 w-full"
          disabled={status === "opening"}
        >
          <MessageCircle className="h-5 w-5" />
          {status === "opening" ? "Opening WhatsApp…" : "Send enquiry on WhatsApp"}
        </Button>

        {status === "opening" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-text-sec"
            role="status" aria-live="polite"
          >
            If WhatsApp didn't open automatically,{" "}
            <a href={fallbackUrl} className="font-bold text-primary underline hover:text-brand-yellow" target="_blank" rel="noopener noreferrer">
              tap here to open the chat
            </a>
            .
          </motion.p>
        )}
      </form>
    </Reveal>
  );
}