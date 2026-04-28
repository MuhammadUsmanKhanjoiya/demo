import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Heart, Sparkles, Globe2, Shield, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import vetImg from "@/assets/vet-telemedicine.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, The Pets Club" },
      { name: "description", content: "Our mission is simple: every pet, everywhere, deserves expert care, community and love." },
      { property: "og:title", content: "About The Pets Club" },
      { property: "og:description", content: "Five clubs. One platform. A global community for pet parents." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="Built by pet parents, for pet parents."
        subtitle="The Pets Club unites community, commerce, and veterinary care so every animal, from city kitten to dairy cow, gets the love they deserve."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 animate-blob bg-lime/40 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-ink shadow-card">
              <img src={heroImg} alt="Happy pets" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A platform born from a midnight emergency.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In 2024, our co-founder Maya couldn't find a vet at 2am when her cat Luna stopped eating. The Pets Club was built so no pet parent would ever feel that alone again.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today, we serve over 50,000 pets across 12 countries, from apartment kittens to working dairy herds, with the same belief: better care belongs to everyone.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Four ideas guide every decision.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "Care first", d: "Every animal, pet, livestock, exotic, has equal access to expert care." },
            { icon: Globe2, t: "No borders", d: "11 languages, 12 countries, one community of pet lovers." },
            { icon: Sparkles, t: "AI as a friend", d: "Technology that empowers vets and parents, never replaces the bond." },
            { icon: Shield, t: "Trust & safety", d: "Every vet verified. Every product reviewed. Every transaction secure." },
          ].map((v) => (
            <div key={v.t} className="rounded-3xl border-2 border-ink bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime"><v.icon className="h-6 w-6 text-ink" /></div>
              <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { n: "50k+", l: "Pets registered" },
            { n: "150+", l: "Verified vets" },
            { n: "12", l: "Countries" },
            { n: "11", l: "Languages" },
            { n: "200+", l: "Shelter partners" },
            { n: "98%", l: "Satisfaction" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl border border-border p-8">
              <div className="font-display text-6xl font-bold text-lime-deep">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Our team</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Vets, engineers, and animal-obsessed humans.</h2>
            <p className="mt-4 text-cream/70">
              We're a remote team of 38 across 9 countries, board-certified veterinarians, ML researchers, designers, and operators united by one goal: better lives for animals.
            </p>
            <Link to="/careers" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime-deep">
              Join the team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-cream/10 bg-cream/5">
                <img src={vetImg} alt="Team" loading="lazy" className="h-full w-full object-cover opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-lime p-10 text-center text-ink lg:p-16">
          <Users className="mx-auto h-10 w-10" />
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold md:text-5xl">Be part of the movement.</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">Free for life, no credit card. Just join, register your pet, and get cared for.</p>
          <Link to="/registration/pet" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Join Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
