import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Video, Globe2, Lock, Zap, Pill, Stethoscope, ArrowRight } from "lucide-react";
import vetImg from "@/assets/vet-telemedicine.jpg";

export const Route = createFileRoute("/telemedicine")({
  head: () => ({
    meta: [
      { title: "Telemedicine, The Pets Club" },
      { name: "description", content: "24/7 video consultations with verified veterinarians in 11 languages." },
      { property: "og:title", content: "Telemedicine, The Pets Club" },
      { property: "og:description", content: "24/7 vet consultations in your language." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero
        eyebrow="Telemedicine"
        title="A vet in your pocket. 24/7."
        subtitle="HD video consultations with 150+ verified veterinarians across 8 specializations and 11 languages."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/booking" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
            Find a vet now
          </Link>
          <a href="#how" className="rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">
            How it works
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border-4 border-ink shadow-card">
              <img src={vetImg} alt="Vet" loading="lazy" width={1024} height={1024} className="w-full" />
            </div>
            <div className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl bg-lime px-4 py-3 shadow-card">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-ink" />
              <span className="text-sm font-bold text-ink">Live · 23 vets online</span>
            </div>
            <div className="absolute -left-4 bottom-10 rounded-2xl bg-ink px-4 py-3 text-cream shadow-card">
              <div className="text-xs uppercase tracking-widest text-lime">Avg wait</div>
              <div className="text-xl font-bold">2.5 min</div>
            </div>
          </div>
          <div>
            <Eyebrow>Why telemedicine</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold">Real care. No travel. No stress.</h2>
            <p className="mt-4 text-muted-foreground">
              Skip the waiting room. Talk to a verified vet in minutes, get a digital prescription, and follow up, all from home.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Video, t: "HD Video", d: "Crystal clear, secure" },
                { icon: Globe2, t: "11 Languages", d: "Talk in your language" },
                { icon: Lock, t: "End-to-end Secure", d: "HIPAA-grade privacy" },
                { icon: Zap, t: "3-min Avg Wait", d: "Real-time matching" },
                { icon: Pill, t: "Digital Prescriptions", d: "Sent to your pharmacy" },
                { icon: Stethoscope, t: "8 Specializations", d: "From dermatology to surgery" },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border border-border bg-card p-4">
                  <f.icon className="h-5 w-5 text-lime-deep" />
                  <div className="mt-2 font-bold">{f.t}</div>
                  <div className="text-xs text-muted-foreground">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="how" className="bg-surface">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Three steps to a healthier pet.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Describe", d: "Tell us about your pet's symptoms in 60 seconds." },
            { n: "02", t: "Match", d: "Get connected with the right specialist instantly." },
            { n: "03", t: "Treat", d: "Receive guidance, prescriptions and follow-up plan." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border-2 border-ink bg-card p-7">
              <div className="font-display text-5xl font-bold text-lime-deep">{s.n}</div>
              <div className="mt-4 text-2xl font-bold">{s.t}</div>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink p-10 text-cream lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Membership</Eyebrow>
              <h2 className="mt-4 text-4xl font-bold">Annual plan, $29/year.</h2>
              <p className="mt-3 text-cream/70">Includes one free consultation, 10% off all future visits, and 24/7 priority access.</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link to="/registration/pet" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-semibold text-ink hover:bg-lime-deep">
                Get Membership <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-cream/60">Cancel anytime · 30-day money back</span>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  ),
});
