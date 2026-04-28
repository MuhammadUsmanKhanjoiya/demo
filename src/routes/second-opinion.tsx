import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { ArrowRight, FileText, Send, Users, Video } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/second-opinion")({
  head: () => ({
    meta: [
      { title: "Second Opinion, The Pets Club" },
      { name: "description", content: "Get a second expert opinion on your pet's case from $9.90. Submit reports, get expert responses, choose your vet." },
      { property: "og:title", content: "Second Opinion Service, The Pets Club" },
      { property: "og:description", content: "A second pair of expert eyes, from $9.90." },
    ],
  }),
  component: SecondOpinionPage,
});

const steps = [
  { n: "01", icon: FileText, t: "Online registration", d: "Provide essential details to start your second-opinion request." },
  { n: "02", icon: Send, t: "Submit reports securely", d: "Upload medical reports, lab results and photos through our encrypted portal." },
  { n: "03", icon: Users, t: "Multiple expert responses", d: "Our panel reviews your case. You see profiles, ask questions, and pick your vet." },
  { n: "04", icon: Video, t: "Video consultation", d: "Real-time video call with the chosen specialist, questions answered, plan delivered." },
];

function SecondOpinionPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero
        eyebrow="Second Opinion · from $9.90"
        title="A second pair of expert eyes."
        subtitle="Already have a diagnosis? Get a personalised review from a panel of board-certified specialists, from anywhere in the world."
      >
        <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
          Make a request <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border-2 border-ink bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-lime-deep">{s.n}</span>
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-lime"><s.icon className="h-5 w-5 text-ink" /></div>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <div className="rounded-3xl border-2 border-lime bg-lime/10 p-10 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-3xl">📄</div>
              <h2 className="mt-4 text-3xl font-bold">Request received!</h2>
              <p className="mt-2 text-muted-foreground">Our specialists will respond within 24 hours. Check your inbox for next steps.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Second-opinion request submitted!"); setSubmitted(true); }}
              className="grid gap-5 rounded-3xl border-2 border-ink bg-card p-8 shadow-card"
            >
              <Eyebrow>Start your request</Eyebrow>
              <h2 className="text-3xl font-bold">Tell us about your pet's case.</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" placeholder="Jane Doe" required />
                <Field label="Email" type="email" placeholder="jane@email.com" required />
                <Field label="Pet name" placeholder="Buddy" required />
                <Field label="Pet species & breed" placeholder="Dog · Golden Retriever" required />
                <Field label="Pet age" placeholder="2 years" />
                <Select label="Specialisation needed" options={["General", "Surgery", "Dermatology", "Cardiology", "Internal Medicine", "Behaviour", "Emergency", "Other"]} />
              </div>
              <div>
                <label className="text-sm font-semibold">Case description</label>
                <textarea rows={5} required className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-ink outline-none" placeholder="Current diagnosis, symptoms, treatments tried, and what you'd like a second opinion on." />
              </div>
              <div>
                <label className="text-sm font-semibold">Upload reports (optional)</label>
                <div className="mt-2 rounded-2xl border-2 border-dashed border-border bg-background p-8 text-center text-sm text-muted-foreground">
                  Drop PDF/JPG/PNG files here, or click to browse
                </div>
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
                Submit request, $9.90 <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">Secure submission · Reports visible only to vets you select.</p>
            </form>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input {...props} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-ink outline-none" />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <select className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-ink outline-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
