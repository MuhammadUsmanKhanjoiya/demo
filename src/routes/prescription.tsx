import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { ArrowRight, Pill, ClipboardCheck, Truck, Shield } from "lucide-react";

export const Route = createFileRoute("/prescription")({
  head: () => ({
    meta: [
      { title: "Online Prescriptions, The Pets Club" },
      { name: "description", content: "Get a digital veterinary prescription after a video consultation. Sent directly to your local pharmacy." },
      { property: "og:title", content: "Online Prescriptions, The Pets Club" },
      { property: "og:description", content: "Digital, legally-valid prescriptions delivered to your pharmacy." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero
        eyebrow="Prescriptions"
        title="Get a prescription, the easy way."
        subtitle="A short video consult with a verified vet, and your prescription is sent straight to your local pharmacy."
      >
        <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
          Get started <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", icon: ClipboardCheck, t: "Register & describe", d: "Create your pet profile and tell us what's going on in 60 seconds." },
            { n: "02", icon: Pill, t: "Video consult", d: "Talk to a verified vet. They'll assess and confirm a treatment plan." },
            { n: "03", icon: Shield, t: "Digital prescription", d: "Legally-valid in supported regions. E-signed and stored in your account." },
            { n: "04", icon: Truck, t: "Pharmacy pickup", d: "We send it to your chosen local pharmacy, or our delivery partner." },
          ].map((s) => (
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>What we can prescribe</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Most common pet medications.</h2>
            <p className="mt-4 text-muted-foreground">Antibiotics, anti-parasitics, anti-inflammatories, dermatology treatments and more, for cats, dogs, birds, horses and farm animals. Some controlled substances and emergency drugs require an in-person visit.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all">
              Ask if we can prescribe yours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Antibiotics", "Anti-parasitics", "Pain & anti-inflammatories", "Dermatology", "Allergy medication", "Behavioural support", "Nutrition & supplements", "Refills of existing scripts"].map((m) => (
              <li key={m} className="flex items-center gap-2 rounded-2xl border-2 border-ink bg-card p-4 text-sm">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-ink">✓</span>{m}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink p-10 text-cream lg:p-14">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Important</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold">Online prescriptions complement, not replace, emergency care.</h3>
              <p className="mt-3 text-cream/70">For life-threatening situations, please contact your nearest emergency vet immediately.</p>
            </div>
            <div className="lg:text-right">
              <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink hover:bg-lime-deep">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  ),
});
