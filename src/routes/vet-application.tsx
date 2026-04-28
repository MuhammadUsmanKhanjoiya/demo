import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { FormCard, StepProgress, StepNav, Field, Select, Textarea, SuccessCard } from "@/components/site/StepForm";
import { Stethoscope, DollarSign, Clock, Globe2, ArrowRight, ShieldCheck, Quote, Sparkles, FileCheck, Video, GraduationCap, Star } from "lucide-react";
import vet1 from "@/assets/vet-1.jpg";
import vet2 from "@/assets/vet-2.jpg";
import vet3 from "@/assets/vet-3.jpg";

export const Route = createFileRoute("/vet-application")({
  head: () => ({
    meta: [
      { title: "Apply as a Vet, The Pets Club" },
      { name: "description", content: "Join 150+ verified vets earning on The Pets Club. Set your hours, your rates, your specialty." },
      { property: "og:title", content: "Become a Vet Partner, The Pets Club" },
      { property: "og:description", content: "Earn more. Help more pets. Set your own hours." },
    ],
  }),
  component: VetApplicationPage,
});

const STEPS = ["About you", "Practice", "Availability", "Submit"];

function VetApplicationPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [you, setYou] = useState({ name: "", email: "", phone: "", country: "" });
  const [practice, setPractice] = useState({ license: "", specialty: "General Practice", years: "3–5", languages: "" });
  const [avail, setAvail] = useState({ hours: "10–20", rate: "120", timezone: "GMT", motivation: "" });

  // Earnings calculator
  const [calc, setCalc] = useState({ rate: 120, hours: 10 });
  const monthly = calc.rate * calc.hours * 4;

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!you.name || !you.email || !practice.license) {
      toast.error("Please complete your name, email and license number.");
      return;
    }
    toast.success("Application submitted! We'll be in touch within 48 hours.");
    setDone(true);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero
        eyebrow="Vet Application"
        title="Earn more. Help more pets."
        subtitle="Set your own hours, rates and specialties. We bring patients, payments, and the tools, you bring the expertise."
      />

      {/* Hero stats */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: DollarSign, t: "$80–180/hr", d: "Average earnings, on top of your day practice." },
            { icon: Clock, t: "Your schedule", d: "Pick your hours. As few as 4 hours per week." },
            { icon: Globe2, t: "Global patients", d: "Reach pet parents in 12 countries, in your language." },
            { icon: Stethoscope, t: "Tools included", d: "EHR, prescriptions, video, payments, all built-in." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
              <b.icon className="h-6 w-6 text-lime-deep" />
              <h3 className="mt-3 text-xl font-bold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Earnings calculator */}
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Earnings calculator</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">See what you could earn.</h2>
            <p className="mt-4 text-muted-foreground">Drag the sliders to estimate your monthly side income on The Pets Club. No upfront fees, we take a flat 15% per consult.</p>
          </div>
          <div className="rounded-3xl border-2 border-ink bg-card p-8 shadow-card">
            <label className="text-sm font-semibold">Your hourly rate (USD): <span className="text-lime-deep">${calc.rate}</span></label>
            <input type="range" min={40} max={300} step={5} value={calc.rate} onChange={(e) => setCalc({ ...calc, rate: +e.target.value })} className="mt-2 w-full accent-ink" />

            <label className="mt-6 block text-sm font-semibold">Hours per week: <span className="text-lime-deep">{calc.hours}h</span></label>
            <input type="range" min={4} max={40} step={1} value={calc.hours} onChange={(e) => setCalc({ ...calc, hours: +e.target.value })} className="mt-2 w-full accent-ink" />

            <div className="mt-8 rounded-2xl bg-lime p-6 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-ink-soft">Estimated monthly earnings</div>
              <div className="font-display text-5xl font-bold text-ink">${monthly.toLocaleString()}</div>
              <div className="mt-1 text-xs text-ink-soft">Net of platform fee · 4 weeks</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process timeline */}
      <Section>
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">From application to first consult in days.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            { n: "1", i: FileCheck, t: "Apply", d: "Fill the form below, 2 minutes." },
            { n: "2", i: Video, t: "Verify", d: "30-min video call to verify your license." },
            { n: "3", i: GraduationCap, t: "Onboard", d: "Quick training on the platform & our protocols." },
            { n: "4", i: Sparkles, t: "Go live", d: "Your profile goes live. Patients start booking." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
              <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-ink font-bold text-cream">{s.n}</div>
              <s.i className="mt-4 h-6 w-6 text-lime-deep" />
              <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Requirements</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold">What we look for.</h2>
            <ul className="mt-6 grid gap-3">
              {[
                "Active veterinary license in your country",
                "Minimum 2 years of clinical experience",
                "Reliable internet & a quiet space for video calls",
                "Fluent in at least one of: English, Spanish, French, Hindi, Arabic",
                "Commitment to our patient-first code of conduct",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime-deep" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Specializations in demand</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold">We need you most in:</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Dermatology",
                "Behaviour",
                "Nutrition",
                "Exotic animals",
                "Avian",
                "Large animal",
                "Emergency",
                "Oncology",
                "Cardiology",
                "Ophthalmology",
              ].map((s) => (
                <Link key={s} to="/specializations" className="rounded-full border-2 border-ink bg-card px-4 py-2 text-sm font-semibold transition hover:bg-lime">
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center">
          <Eyebrow>Vets love it here</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">From our partner vets.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { img: vet1, name: "Dr. Amelia Chen", role: "Small Animal · UK", quote: "I do 8 hours a week from home. It's covered my mortgage payment for two years now.", stars: 5 },
            { img: vet2, name: "Dr. Marco Silva", role: "Exotics · Brazil", quote: "Finally a platform that takes exotic animals seriously. My patient pool tripled in 3 months.", stars: 5 },
            { img: vet3, name: "Dr. Priya Nair", role: "Behaviour · India", quote: "The tools are incredible. EHR, prescriptions, payments, I never go back to my clinic software.", stars: 5 },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
              <Quote className="h-7 w-7 text-lime-deep" />
              <p className="mt-3 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-lime-deep text-lime-deep" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section className="bg-surface" id="apply">
        <div className="mx-auto max-w-3xl">
          {done ? (
            <SuccessCard
              emoji="🩺"
              title="Application received!"
              message="Our partnerships team will reach out within 48 hours to schedule your verification call."
            >
              <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
                Meet our vets <ArrowRight className="h-4 w-4" />
              </Link>
            </SuccessCard>
          ) : (
            <form onSubmit={submit}>
              <FormCard>
                <StepProgress step={step} total={4} labels={STEPS} />

                {step === 1 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 1, About you</Eyebrow>
                    <h2 className="text-3xl font-bold">Tell us who you are.</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full name" placeholder="Dr. Jane Doe" value={you.name} onChange={(e) => setYou({ ...you, name: e.target.value })} required />
                      <Field label="Email" type="email" placeholder="jane@clinic.com" value={you.email} onChange={(e) => setYou({ ...you, email: e.target.value })} required />
                      <Field label="Phone" type="tel" placeholder="+1 555 123 4567" value={you.phone} onChange={(e) => setYou({ ...you, phone: e.target.value })} />
                      <Field label="Country" placeholder="United States" value={you.country} onChange={(e) => setYou({ ...you, country: e.target.value })} required />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 2, Your practice</Eyebrow>
                    <h2 className="text-3xl font-bold">Where do you practice?</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="License number" placeholder="VET-XXXXXX" value={practice.license} onChange={(e) => setPractice({ ...practice, license: e.target.value })} required />
                      <Select label="Primary specialization" value={practice.specialty} onChange={(v) => setPractice({ ...practice, specialty: v })} options={["General Practice", "Dermatology", "Behaviour", "Surgery", "Nutrition", "Emergency", "Exotic", "Large Animal", "Oncology", "Cardiology"]} />
                      <Select label="Years of experience" value={practice.years} onChange={(v) => setPractice({ ...practice, years: v })} options={["0–2", "3–5", "6–10", "10+"]} />
                      <Field label="Languages spoken" placeholder="English, Spanish" value={practice.languages} onChange={(e) => setPractice({ ...practice, languages: e.target.value })} />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 3, Availability</Eyebrow>
                    <h2 className="text-3xl font-bold">How would you like to work?</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Select label="Hours per week" value={avail.hours} onChange={(v) => setAvail({ ...avail, hours: v })} options={["4–10", "10–20", "20–40", "Full-time"]} />
                      <Field label="Target hourly rate (USD)" type="number" placeholder="120" value={avail.rate} onChange={(e) => setAvail({ ...avail, rate: e.target.value })} />
                      <Field label="Time zone" placeholder="GMT, EST…" value={avail.timezone} onChange={(e) => setAvail({ ...avail, timezone: e.target.value })} />
                    </div>
                    <Textarea label="Why do you want to join?" placeholder="A short note on your motivation and the kind of cases you love." value={avail.motivation} onChange={(e) => setAvail({ ...avail, motivation: e.target.value })} />
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 4, Confirm</Eyebrow>
                    <h2 className="text-3xl font-bold">Ready to submit?</h2>
                    <div className="grid gap-3 rounded-2xl bg-surface p-6 text-sm">
                      <Row k="Name" v={you.name || ", "} />
                      <Row k="Country" v={you.country || ", "} />
                      <Row k="License" v={practice.license || ", "} />
                      <Row k="Specialty" v={`${practice.specialty} · ${practice.years} yrs`} />
                      <Row k="Languages" v={practice.languages || ", "} />
                      <Row k="Availability" v={`${avail.hours} hrs/week · $${avail.rate || ", "}/hr · ${avail.timezone || ", "}`} />
                    </div>
                    <label className="flex items-start gap-3 text-sm text-muted-foreground">
                      <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-border" />
                      <span>I confirm my license is active and agree to The Pets Club <Link to="/terms" className="text-ink underline">Partner Terms</Link>.</span>
                    </label>
                  </div>
                )}

                <StepNav step={step} total={4} onPrev={prev} onNext={next} submitLabel="Submit application" />
              </FormCard>
            </form>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border pb-2 last:border-0 last:pb-0">
      <span className="font-semibold text-muted-foreground">{k}</span>
      <span className="text-right text-ink">{v}</span>
    </div>
  );
}
