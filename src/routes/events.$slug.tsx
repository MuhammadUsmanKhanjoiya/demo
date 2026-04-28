import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2 } from "lucide-react";
import { EVENTS } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title}, The Pets Club Events` },
          { name: "description", content: loaderData.event.desc },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageLayout>
      <Section><div className="text-center"><h1 className="text-4xl font-bold">Event not found</h1></div></Section>
    </PageLayout>
  ),
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", guests: 1 });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success(`Registered for ${event.title}!`);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <Section>
        <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> All events
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow>Event</Eyebrow>
            <h1 className="mt-3 text-5xl font-bold leading-tight">{event.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {event.date}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.place}</span>
              <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" /> {event.spotsLeft} spots left</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed">{event.long}</p>
            <p className="mt-3 text-muted-foreground">{event.desc}</p>
          </div>

          <aside>
            {sent ? (
              <div className="rounded-3xl border-2 border-lime bg-lime/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-lime-deep" />
                <h3 className="mt-3 text-2xl font-bold">You're in!</h3>
                <p className="mt-2 text-muted-foreground">Confirmation emailed to {form.email}.</p>
                <Link to="/events" className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream">More events</Link>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
                <h3 className="text-2xl font-bold">Register</h3>
                <p className="mt-1 text-sm text-muted-foreground">Free for members</p>
                <div className="mt-5 grid gap-4">
                  <FormField label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <FormField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <div>
                    <label className="text-sm font-semibold">Guests</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink"
                    />
                  </div>
                  <button type="submit" className="mt-2 rounded-full bg-ink py-3 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
                    Register now
                  </button>
                </div>
              </form>
            )}
          </aside>
        </div>
      </Section>
    </PageLayout>
  );
}

function FormField({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink" />
    </div>
  );
}
