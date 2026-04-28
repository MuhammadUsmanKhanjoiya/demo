import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { Section, Eyebrow } from "@/components/site/Section";
import { Heart, Home, Clock, Users, ArrowRight } from "lucide-react";
import img from "@/assets/adoption.jpg";

export const Route = createFileRoute("/ml/matchmaking")({
  head: () => ({
    meta: [
      { title: "Adoption Matchmaking, The Pets Club" },
      { name: "description", content: "Smart pet-parent matching based on lifestyle, home and personality. AI-powered. Heart-approved." },
      { property: "og:title", content: "AI Adoption Matchmaking, The Pets Club" },
      { property: "og:description", content: "Take a 2-minute quiz. Meet your perfect pet match." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="AI Adoption Matchmaking"
      title="Find the pet that fits your life."
      subtitle="Take a 2-minute quiz. Our AI matches you with pets ready to thrive in your home."
      heroImage={img}
      features={[
        { title: "Lifestyle Quiz", desc: "Activity, home size, schedule, family, a holistic profile." },
        { title: "Compatibility Scoring", desc: "Each pet is scored against your needs (and theirs)." },
        { title: "Shelter Network", desc: "We work with 200+ verified shelters worldwide." },
        { title: "Trial Periods", desc: "Some shelters allow short trial stays, risk-free love." },
        { title: "Onboarding Support", desc: "Guides for the first 30 days with your new pet." },
        { title: "Vet Bundle", desc: "Free first vet consult for adopted pets." },
      ]}
      ctaTitle="Take the matching quiz."
    >
      <Section>
        <div className="text-center">
          <Eyebrow>How matching works</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Four signals. One perfect match.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Home, t: "Your home", d: "Apartment or house, indoor or outdoor, fenced yard?" },
            { icon: Clock, t: "Your schedule", d: "Hours alone, work-from-home, travel frequency." },
            { icon: Users, t: "Your family", d: "Kids, other pets, allergies, energy level." },
            { icon: Heart, t: "Your heart", d: "Cuddly lap-pet or running buddy? Calm or playful?" },
          ].map((s) => (
            <div key={s.t} className="rounded-3xl border-2 border-ink bg-card p-7 text-center shadow-card">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime"><s.icon className="h-6 w-6 text-ink" /></div>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Real results</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold">3,200 adoptions. 96% still together after a year.</h2>
            <p className="mt-3 text-muted-foreground">Our matching outperforms traditional adoption by 3x in long-term retention.</p>
            <Link to="/adoption" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
              Browse adoptable pets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "3,200", l: "Adoptions" },
              { n: "96%", l: "Still together" },
              { n: "200+", l: "Shelter partners" },
              { n: "8 min", l: "Average match time" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl border-2 border-ink bg-cream p-6">
                <div className="font-display text-4xl font-bold text-ink">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink-soft">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </ContentPage>
  ),
});
