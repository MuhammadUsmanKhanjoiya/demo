import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, The Pets Club" },
      { name: "description", content: "Get in touch with The Pets Club team. We're here for you and your pet, 24/7." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero eyebrow="Contact" title="We're all ears (and paws)." subtitle="Get in touch, we usually reply within an hour." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Eyebrow>Reach us</Eyebrow>
            {[
              { icon: Mail, t: "Email", v: "hello@thepetsclub.com" },
              { icon: Phone, t: "Phone", v: "+1 (555) 010-7387" },
              { icon: MapPin, t: "HQ", v: "24 Wagging Tail Ave, Suite 365" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
                <c.icon className="h-5 w-5 text-lime-deep" />
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="mt-1 font-semibold">{c.v}</div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {sent ? (
              <div className="rounded-3xl border-2 border-lime bg-lime/10 p-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-3xl">✓</div>
                <h2 className="mt-4 text-3xl font-bold">Message received!</h2>
                <p className="mt-2 text-muted-foreground">We'll get back to you within an hour.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); toast.success("Message sent!"); setSent(true); }}
                className="grid gap-5 rounded-3xl border border-border bg-card p-8 shadow-card"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" placeholder="Jane Doe" required />
                  <Field label="Email" type="email" placeholder="jane@email.com" required />
                </div>
                <Field label="Subject" placeholder="How can we help?" />
                <div>
                  <label className="text-sm font-semibold">Message</label>
                  <textarea rows={5} required className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink" />
                </div>
                <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input {...props} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink" />
    </div>
  );
}
