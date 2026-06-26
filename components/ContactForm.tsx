"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site } from "@/lib/site";

const fields = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name", required: true },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", required: true },
  { name: "school", label: "School / Organization", type: "text", autoComplete: "organization", required: true },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off", required: true },
] as const;

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    const body = [
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `School: ${data.get("school")}`,
      `Subject: ${data.get("subject")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    const mailto = `${site.emailHref}?subject=${encodeURIComponent(
      `Booking inquiry: ${data.get("subject") ?? "iTHINKBIG"}`,
    )}&body=${encodeURIComponent(body)}`;

    // Simulate handoff, then open the user's email client as a graceful fallback.
    window.setTimeout(() => {
      setStatus("success");
      window.location.href = mailto;
      form.reset();
    }, 700);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-600" />
        <h3 className="mt-4 text-2xl font-extrabold text-ink">
          Thank you — let&apos;s think big together!
        </h3>
        <p className="mt-2 max-w-md text-ink/65">
          Your request is on its way. We&apos;ll be in touch shortly. Prefer to
          talk now? Call us at{" "}
          <a href={site.phoneHref} className="font-bold text-brand-700">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div
            key={f.name}
            className={f.name === "subject" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={f.name}
              className="mb-1.5 block text-sm font-bold text-ink"
            >
              {f.label} {f.required && <span className="text-brand-600">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              className="w-full rounded-xl border border-ink/15 bg-mist/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200"
              placeholder={f.label}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-bold text-ink"
          >
            Message <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-y rounded-xl border border-ink/15 bg-mist/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200"
            placeholder="Tell us about your school, your students, dates you're considering, and what you're hoping for…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-[0_14px_30px_-12px_rgba(13,58,240,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Booking Request <Send className="h-5 w-5" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-ink/45">
        By submitting, you&apos;ll open a pre-filled email to our team. We
        typically respond within one business day.
      </p>
    </form>
  );
}
