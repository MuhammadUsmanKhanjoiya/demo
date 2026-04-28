import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Check, Sparkles, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership, The Pets Club" },
      { name: "description", content: "Annual membership, $29/year. One free vet consult, 10% off all visits, 24/7 priority access." },
      { property: "og:title", content: "Annual Membership, The Pets Club" },
      { property: "og:description", content: "First consultation free. Cancel anytime, 30-day refund." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero
        eyebrow="Membership"
        title="Join now & get your first consultation free."
        subtitle="Yearly membership for $29, peace of mind, expert care, and members-only perks all year long."
      >
        <Link to="/registration/pet" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
          Get membership <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-2xl rounded-[2rem] border-4 border-ink bg-lime p-10 text-ink shadow-card lg:p-14">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime">
              <Sparkles className="h-3 w-3" /> Most loved plan
            </span>
          </div>
          <div className="mt-6 text-center">
            <div className="font-display text-7xl font-bold leading-none">$29<span className="text-2xl">/yr</span></div>
            <p className="mt-3 text-ink-soft">All-inclusive yearly membership.</p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-sm">
            {[
              "1 free veterinary consultation included",
              "10% discount on all future visits",
              "24/7 priority access, skip the queue",
              "AI-powered care recommendations",
              "Exclusive member offers & early access",
              "Free shipping on marketplace orders $50+",
              "Cancel anytime, 30-day money-back guarantee",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-lime"><Check className="h-3 w-3" /></span>
                {f}
              </li>
            ))}
          </ul>
          <Link to="/registration/pet" className="mt-9 flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
            Join now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>Members say</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">$29 well spent.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { name: "Aisha M.", quote: "The free consult paid for the whole year on day one. Luna got expert care at midnight." },
            { name: "Daniel R.", quote: "10% off compounds fast when you have multiple animals. No-brainer." },
            { name: "Priya K.", quote: "Priority access means I'm in a video call with a vet within 2 minutes. Worth every cent." },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl border-2 border-ink bg-card p-7 shadow-card">
              <div className="flex gap-0.5 text-lime-deep">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4 text-sm font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border-2 border-ink bg-card">
          {[
            { q: "Is this a subscription?", a: "Yes, billed yearly. Cancel anytime from Settings; full refund within 30 days." },
            { q: "Does the free consult expire?", a: "It's valid for the full membership year. Use it whenever you need it." },
            { q: "Can I add multiple pets?", a: "Yes, your membership covers your entire household, no extra fees." },
            { q: "What if I'm not happy?", a: "30-day money-back, no questions asked. Email hello@thepetsclub.com." },
          ].map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-muted text-ink transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </PageLayout>
  ),
});
