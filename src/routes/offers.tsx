import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { Tag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Special Offers, The Pets Club" },
      { name: "description", content: "Member-only deals on food, vet care, accessories and more." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Special Offers" title="Member-only deals." subtitle="Exclusive discounts on the best brands and services. Updated weekly." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { tag: "30% OFF", title: "Premium Kibble", desc: "On all 5kg+ bags this week.", color: "bg-lime" },
            { tag: "FREE", title: "First Vet Consult", desc: "For new annual members.", color: "bg-ink text-cream" },
            { tag: "BOGO", title: "Cat Toys & Treats", desc: "Buy one, get one free.", color: "bg-cream" },
            { tag: "20% OFF", title: "Grooming Kits", desc: "Pro & DIY collections.", color: "bg-lime" },
            { tag: "$10 OFF", title: "First Order $50+", desc: "Use code WELCOME10.", color: "bg-cream" },
            { tag: "FREE SHIP", title: "All Farm Supplies", desc: "Orders over $200.", color: "bg-ink text-cream" },
          ].map((o, i) => (
            <div key={i} className={`rounded-3xl border-2 border-ink p-7 shadow-card ${o.color}`}>
              <Tag className="h-6 w-6" />
              <div className="mt-4 inline-block rounded-full border-2 border-current px-3 py-1 text-xs font-bold uppercase tracking-widest">{o.tag}</div>
              <h3 className="mt-3 text-2xl font-bold">{o.title}</h3>
              <p className="mt-2 text-sm opacity-80">{o.desc}</p>
              <Link to="/marketplace" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Claim now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  ),
});
