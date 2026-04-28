import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing, The Pets Club" },
      { name: "description", content: "Free forever for pet parents. Premium plans for power users and farms, transparent pricing, no surprises." },
      { property: "og:title", content: "Pricing, The Pets Club" },
      { property: "og:description", content: "Free, Premium, and Farm tiers. Transparent. Cancel anytime." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Everything you need to register, connect, and shop.",
    features: ["Pet profile & health log", "Join all 5 clubs", "Marketplace access", "Adoption matchmaking", "Community forums"],
    cta: "Join Free",
    href: "/registration/pet",
    accent: false,
  },
  {
    name: "Premium",
    price: "$29",
    period: "/year",
    blurb: "Unlock 24/7 vet care, AI tools, and member discounts.",
    features: [
      "Everything in Free",
      "1 free vet consult / year",
      "10% off all consults",
      "Priority chat support",
      "AI care recommendations",
      "Exclusive offers & early access",
    ],
    cta: "Go Premium",
    href: "/registration/pet",
    accent: true,
  },
  {
    name: "Farm",
    price: "$89",
    period: "/year",
    blurb: "Built for dairy & poultry operators.",
    features: [
      "Everything in Premium",
      "Herd / flock management tools",
      "Mobile large-animal vets",
      "Bulk feed pricing",
      "Compliance toolkit",
      "Buyer network access",
    ],
    cta: "Register Farm",
    href: "/registration/dairy",
    accent: false,
  },
];

function PricingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Free for pets. Premium for power."
        subtitle="No setup fees. Cancel anytime. Every plan includes a 30-day money-back guarantee."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-[2rem] border-2 p-8 shadow-card ${
                t.accent ? "border-ink bg-ink text-cream lg:scale-105" : "border-ink bg-card"
              }`}
            >
              {t.accent && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold">{t.price}</span>
                <span className="text-sm opacity-70">{t.period}</span>
              </div>
              <p className={`mt-3 text-sm ${t.accent ? "text-cream/70" : "text-muted-foreground"}`}>{t.blurb}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${t.accent ? "bg-lime text-ink" : "bg-lime text-ink"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={t.href}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold ${
                  t.accent ? "bg-lime text-ink hover:bg-lime-deep" : "bg-ink text-cream hover:bg-ink-soft"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>Compare</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold">Side by side.</h2>
        </div>
        <div className="mt-10 overflow-x-auto rounded-3xl border-2 border-ink bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink text-cream">
              <tr>
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4">Free</th>
                <th className="px-6 py-4 text-lime">Premium</th>
                <th className="px-6 py-4">Farm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Community clubs", "✓", "✓", "✓"],
                ["Marketplace access", "✓", "✓", "✓"],
                ["Vet consultations", "Pay-per-visit", "1 free + 10% off", "Unlimited mobile"],
                ["AI recommendations", "Basic", "Personalized", "Herd-level"],
                ["Herd / flock tools", ", ", ", ", "✓"],
                ["Priority support", ", ", "✓", "Dedicated rep"],
                ["Bulk pricing", ", ", ", ", "✓"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} className={`px-6 py-4 ${i === 0 ? "font-semibold" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-lime p-10 text-center text-ink lg:p-16">
          <h2 className="text-4xl font-bold md:text-5xl">Still deciding?</h2>
          <p className="mx-auto mt-3 max-w-xl">Start free. Upgrade only if you love it.</p>
          <Link to="/registration/pet" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Start Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
