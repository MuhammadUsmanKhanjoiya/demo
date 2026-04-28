import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import { SPECIALIZATIONS } from "@/data/specializations";

export const Route = createFileRoute("/specializations")({
  head: () => ({
    meta: [
      { title: "Veterinary Specialisations, The Pets Club" },
      { name: "description", content: "12 medical branches: general practice, surgery, dermatology, behaviour, cardiology, nutrition and more." },
      { property: "og:title", content: "Veterinary Specialisations, The Pets Club" },
      { property: "og:description", content: "Find the right specialist, from emergency to ophthalmology." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero
        eyebrow="Specialisations"
        title="The right specialist for every pet."
        subtitle="From general practice to cardiology, 12 medical branches, 150+ verified vets ready to consult."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALIZATIONS.map((s) => (
            <Link
              key={s.slug}
              to="/doctors"
              className="group rounded-3xl border-2 border-ink bg-card p-7 shadow-card transition hover:-translate-y-1 hover:bg-lime"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-ink transition group-hover:bg-ink group-hover:text-lime">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all">
                Find a vet <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="rounded-[2rem] bg-lime p-10 text-center text-ink lg:p-14">
          <h2 className="text-balance text-4xl font-bold md:text-5xl">Not sure which specialist you need?</h2>
          <p className="mx-auto mt-3 max-w-xl">Start with our AI Chatbot or a general practice consult, they'll route you to the right specialist.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/ml/chatbot" className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream hover:bg-ink-soft">Ask the AI</Link>
            <Link to="/doctors" className="rounded-full border-2 border-ink bg-card px-7 py-3.5 text-sm font-bold text-ink hover:bg-ink hover:text-cream">Browse all vets</Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  ),
});
