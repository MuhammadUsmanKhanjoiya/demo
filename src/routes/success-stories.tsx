import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Quote, Heart, ArrowRight } from "lucide-react";
import dogImg from "@/assets/club-dog.jpg";
import catImg from "@/assets/club-cat.jpg";
import farmImg from "@/assets/club-farm.jpg";
import birdsImg from "@/assets/club-birds-horse.jpg";
import poultryImg from "@/assets/club-poultry.jpg";
import adoptionImg from "@/assets/adoption.jpg";

const stories = [
  { name: "Luna, the midnight kitten", who: "Aisha M. · Brooklyn, NY", img: catImg, quote: "At 1am, Luna wouldn't eat. A vet was on video in 90 seconds and walked me through what to do until morning. She made it. I'll never forget it." },
  { name: "Buddy finds a home", who: "Priya K. · Seattle, WA", img: dogImg, quote: "AI matchmaking suggested Buddy from a shelter 200km away. Three video calls, one weekend road-trip, and our forever boy was home." },
  { name: "Greenfield Dairy goes digital", who: "Daniel R. · Pennsylvania", img: farmImg, quote: "We tracked yields per cow for the first time. Spotted a sub-clinical mastitis case in Bessie before it cost us thousands. Game changer." },
  { name: "Mango the macaw", who: "Carlos D. · Mexico City", img: birdsImg, quote: "Tropical bird specialists in your city are rare. The Pets Club connected me with one in São Paulo who literally saved my macaw's wing." },
  { name: "Sunrise Layers, biosecurity win", who: "Faith O. · Nairobi", img: poultryImg, quote: "Real-time outbreak alerts let us isolate three sheds in time. We didn't lose a single hen during the regional flu wave." },
  { name: "Milo & Bean, bonded forever", who: "The Murphy family · Seattle", img: adoptionImg, quote: "We almost adopted just one. The matchmaking quiz nudged us toward a bonded pair. Best decision, they're inseparable." },
];

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories, The Pets Club" },
      { name: "description", content: "Real stories from members: rescued pets, digital dairies, and lives changed by The Pets Club community." },
      { property: "og:title", content: "Success Stories, The Pets Club" },
      { property: "og:description", content: "Wins from our community. Tails, feathers, and heart." },
      { property: "og:image", content: dogImg },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Success Stories"
        title="Real wins. Real wagging tails."
        subtitle="A few stories from our 50,000+ members across 12 countries, pets rescued, herds saved, friendships forged."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className={`overflow-hidden rounded-[2rem] border-2 border-ink shadow-card ${i % 3 === 0 ? "bg-lime" : "bg-card"}`}
            >
              <div className="grid sm:grid-cols-[180px_1fr]">
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <Quote className="h-7 w-7 opacity-30" />
                  <p className="mt-3 text-pretty leading-relaxed">"{s.quote}"</p>
                  <div className="mt-5 border-t border-current/10 pt-4">
                    <div className="font-bold">{s.name}</div>
                    <div className="text-sm opacity-70">{s.who}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-cream">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { n: "12,400", l: "Vet consults / month" },
            { n: "3,200", l: "Adoptions matched" },
            { n: "98%", l: "Member satisfaction" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl border border-cream/10 bg-cream/5 p-8">
              <Heart className="h-6 w-6 text-lime" />
              <div className="mt-4 font-display text-5xl font-bold text-lime">{s.n}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-cream/60">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-lime p-10 text-center text-ink lg:p-16">
          <h2 className="text-balance text-4xl font-bold md:text-5xl">Write your own story.</h2>
          <p className="mx-auto mt-3 max-w-xl">Free to join. We'll be there at 2am too.</p>
          <Link to="/registration/pet" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Join Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
