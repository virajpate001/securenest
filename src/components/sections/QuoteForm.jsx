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
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm " +
  "outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-bold text-ink">
      <span>{label}</span>
      {children}
      {error && <span className="font-normal text-red-600">{error}</span>}
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

    // Give the UI a tick to render the "Opening WhatsApp…" state,
    // then navigate.
    setTimeout(() => {
      window.location.href = url;
      // Reset the form so a back-navigation shows a clean slate.
      reset();
      setStatus("idle");
    }, 300);
  };

  return (
    <Reveal className="rounded-card bg-white p-6 shadow-brand md:p-8">
      <div className="mb-6">
        <strong className="block font-display text-xl text-ink">
          Vehicle insurance enquiry
        </strong>
        <small className="text-muted">
          Your details will open in WhatsApp — just tap Send to reach our team.
        </small>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Honeypot — hidden from users, bots fill it, we ignore */}
        <input
          type="text" tabIndex={-1} autoComplete="off"
          {...register("company")}
          className="hidden" aria-hidden="true"
        />

        <div className="grid gap-4 sm:grid-cols-2">
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

        <div className="grid gap-4 sm:grid-cols-2">
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

        <label className="flex items-start gap-2 text-xs text-muted">
          <input type="checkbox" {...register("consent")} className="mt-1" />
          <span>
            I agree to be contacted about this enquiry on WhatsApp and acknowledge the{" "}
            <a href="/privacy-policy" className="underline hover:text-ink">privacy notice</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600">{errors.consent.message}</p>
        )}

        <Button
          type="submit"
          variant="gold"
          className="w-full mt-2"
          disabled={status === "opening"}
        >
          <MessageCircle className="h-5 w-5" />
          {status === "opening" ? "Opening WhatsApp…" : "Send enquiry on WhatsApp"}
        </Button>

        {status === "opening" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xs text-muted"
            role="status" aria-live="polite"
          >
            If WhatsApp didn't open automatically,{" "}
            <a href={fallbackUrl} className="font-bold underline text-gold-dark" target="_blank" rel="noopener noreferrer">
              tap here to open the chat
            </a>
            .
          </motion.p>
        )}
      </form>
    </Reveal>
  );
}