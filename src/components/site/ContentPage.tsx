import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { ArrowRight, Check } from "lucide-react";

export type Feature = { title: string; desc: string };
export type FAQ = { q: string; a: string };

interface ContentPageProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  intro?: ReactNode;
  features?: Feature[];
  faqs?: FAQ[];
  ctaTitle?: string;
  ctaText?: string;
  children?: ReactNode;
}

export function ContentPage({
  eyebrow,
  title,
  subtitle,
  heroImage,
  intro,
  features,
  faqs,
  ctaTitle = "Ready to get started?",
  ctaText = "Join The Pets Club today and unlock everything your pet needs.",
  children,
}: ContentPageProps) {
  return (
    <PageLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/registration/pet" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
            Get Started
          </Link>
          <Link to="/contact" className="rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">
            Contact us
          </Link>
        </div>
      </PageHero>

      {heroImage && (
        <div className="mx-auto -mt-12 max-w-5xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border-4 border-ink shadow-card">
            <img src={heroImage} alt={title} loading="lazy" width={1280} height={720} className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      )}

      {intro && (
        <Section>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-ink-soft">{intro}</div>
        </Section>
      )}

      {children}

      {features && features.length > 0 && (
        <Section className="bg-surface">
          <div className="text-center">
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Built for real pet parents.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime text-ink">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {faqs && faqs.length > 0 && (
        <Section>
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 text-4xl font-bold">Frequently asked.</h2>
              <p className="mt-3 text-muted-foreground">Can't find your answer? <Link to="/contact" className="text-ink underline underline-offset-4">Get in touch</Link>.</p>
            </div>
            <div className="lg:col-span-2 divide-y divide-border rounded-3xl border border-border bg-card">
              {faqs.map((f) => (
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
      )}

      <Section>
        <div className="rounded-[2rem] bg-lime p-10 text-center text-ink lg:p-16">
          <h2 className="text-balance text-4xl font-bold md:text-5xl">{ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl">{ctaText}</p>
          <Link to="/registration/pet" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Join Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
