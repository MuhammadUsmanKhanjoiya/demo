import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { useState } from "react";

const faqs = [
  {
    cat: "Getting Started",
    qa: [
      { q: "Is The Pets Club free?", a: "Yes, joining and creating a pet profile is free forever. Premium and Farm plans add vet consultations and bulk pricing." },
      { q: "Which animals do you support?", a: "Cats, dogs, birds, horses, dairy cattle, goats, sheep, poultry and most exotics. If we don't support your animal, tell us, we add new categories monthly." },
      { q: "Do I need an account to browse?", a: "No, but registration unlocks community, AI recommendations, and the ability to book vets." },
    ],
  },
  {
    cat: "Telemedicine",
    qa: [
      { q: "How fast can I talk to a vet?", a: "Average wait is 2.5 minutes. Premium members skip the queue." },
      { q: "Are prescriptions valid?", a: "Yes, our vets issue legally-valid digital prescriptions in regions where allowed. We send them directly to your local pharmacy." },
      { q: "What languages are supported?", a: "11 languages including English, Spanish, French, Mandarin, Arabic, Hindi and Portuguese." },
    ],
  },
  {
    cat: "Marketplace",
    qa: [
      { q: "Are products vet-approved?", a: "Every product is reviewed by our in-house veterinary team before listing." },
      { q: "What's your return policy?", a: "30 days, no questions asked. Pet didn't like it? Send it back." },
      { q: "Can I sell on the marketplace?", a: "Absolutely, apply via the 'Become a seller' page in Marketplace." },
    ],
  },
  {
    cat: "Adoption",
    qa: [
      { q: "Is matchmaking free?", a: "Yes. Adoption fees are set by individual shelters." },
      { q: "What if it doesn't work out?", a: "Most shelters accept returns within 30 days. We support you with onboarding guides too." },
    ],
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ, The Pets Club" },
      { name: "description", content: "Answers to common questions about The Pets Club: pricing, telemedicine, marketplace, adoption and more." },
      { property: "og:title", content: "Frequently Asked Questions, The Pets Club" },
      { property: "og:description", content: "Pricing, telemedicine, marketplace, adoption, answered." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [active, setActive] = useState(0);
  return (
    <PageLayout>
      <PageHero eyebrow="FAQ" title="Questions, answered." subtitle="Quick answers about pricing, telemedicine, the marketplace, adoption and more." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <Eyebrow>Topics</Eyebrow>
            <nav className="mt-4 flex flex-col gap-1">
              {faqs.map((c, i) => (
                <button
                  key={c.cat}
                  onClick={() => setActive(i)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${active === i ? "bg-ink text-cream" : "hover:bg-lime/30"}`}
                >
                  {c.cat}
                </button>
              ))}
            </nav>
          </aside>
          <div className="lg:col-span-3 divide-y divide-border rounded-3xl border-2 border-ink bg-card">
            {faqs[active].qa.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-muted text-ink transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="rounded-[2rem] border-2 border-ink bg-cream p-10 text-center lg:p-14">
          <h2 className="text-4xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground">Our team replies within an hour.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Contact us
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
