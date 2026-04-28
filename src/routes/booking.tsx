import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { DOCTORS } from "@/data/doctors";
import { Star, ShieldCheck, Globe2, ArrowRight, CheckCircle2, Calendar, Clock, Video, Phone, MessageSquare } from "lucide-react";

type BookingSearch = { doctor?: string };

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>): BookingSearch => ({
    doctor: typeof s.doctor === "string" ? s.doctor : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book a Consultation, The Pets Club" },
      { name: "description", content: "Book a video consultation with a verified veterinarian in minutes." },
    ],
  }),
  component: BookingPage,
});

const TIME_SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30", "20:00"];
const CONSULT_MODES = [
  { id: "video", label: "Video call", icon: Video, desc: "HD live video" },
  { id: "audio", label: "Audio call", icon: Phone, desc: "Voice only" },
  { id: "chat", label: "Chat", icon: MessageSquare, desc: "Async messages" },
];

function BookingPage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(1);
  const [doctorId, setDoctorId] = useState(search.doctor ?? DOCTORS[0].id);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [slot, setSlot] = useState("14:00");
  const [mode, setMode] = useState("video");
  const [pet, setPet] = useState({ name: "", species: "Dog", age: "", symptoms: "" });
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [confirmed, setConfirmed] = useState(false);

  const doctor = useMemo(() => DOCTORS.find((d) => d.id === doctorId) ?? DOCTORS[0], [doctorId]);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name.trim() || !contact.email.trim()) {
      toast.error("Please complete your contact details.");
      return;
    }
    setConfirmed(true);
    toast.success("Booking confirmed! Check your email.");
  };

  if (confirmed) {
    return (
      <PageLayout>
        <Toaster position="top-center" />
        <Section>
          <div className="mx-auto max-w-2xl rounded-[2rem] border-2 border-lime bg-lime/10 p-12 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime">
              <CheckCircle2 className="h-10 w-10 text-ink" />
            </div>
            <h1 className="mt-6 text-4xl font-bold">You're booked.</h1>
            <p className="mt-3 text-muted-foreground">
              Your {mode} consultation with <b className="text-ink">{doctor.name}</b> is confirmed for{" "}
              <b className="text-ink">{date} at {slot}</b>.
            </p>
            <div className="mt-8 grid gap-3 rounded-2xl bg-card p-5 text-left text-sm">
              <Row label="Vet" value={doctor.name} />
              <Row label="Specialty" value={doctor.specialty} />
              <Row label="Mode" value={mode.charAt(0).toUpperCase() + mode.slice(1)} />
              <Row label="Date" value={`${date} · ${slot}`} />
              <Row label="Pet" value={`${pet.name || ", "} (${pet.species})`} />
              <Row label="Confirmation sent to" value={contact.email} />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/doctors" className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
                Back to vets
              </Link>
              <Link to="/" className="rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-cream">
                Home
              </Link>
            </div>
          </div>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero eyebrow="Book a consultation" title="Three minutes. One healthier pet." subtitle="Choose your vet, time, and tell us about your pet, we handle the rest." />

      <Section>
        {/* Stepper */}
        <ol className="mx-auto mb-10 flex max-w-3xl items-center justify-between gap-2">
          {["Vet", "Time", "Pet", "Confirm"].map((label, i) => {
            const n = i + 1;
            const active = step === n;
            const done = step > n;
            return (
              <li key={label} className="flex flex-1 items-center gap-2">
                <button
                  onClick={() => setStep(n)}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-sm font-bold transition ${
                    active ? "border-ink bg-ink text-cream" : done ? "border-lime bg-lime text-ink" : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {done ? "✓" : n}
                </button>
                <span className={`hidden text-sm font-semibold sm:inline ${active ? "text-ink" : "text-muted-foreground"}`}>{label}</span>
                {i < 3 && <span className={`h-0.5 flex-1 ${done ? "bg-lime" : "bg-border"}`} />}
              </li>
            );
          })}
        </ol>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Main panel */}
          <div className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card lg:p-8">
            {step === 1 && (
              <div>
                <Eyebrow>Step 1</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold">Pick your vet</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DOCTORS.slice(0, 8).map((d) => {
                    const sel = d.id === doctorId;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setDoctorId(d.id)}
                        className={`flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition ${sel ? "border-ink bg-lime/20" : "border-border hover:border-ink"}`}
                      >
                        <img src={d.img} alt={d.name} className="h-14 w-14 rounded-xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-bold">{d.name}</div>
                          <div className="truncate text-xs text-muted-foreground">{d.specialty}</div>
                          <div className="mt-1 flex items-center gap-2 text-xs">
                            <span className="flex items-center gap-0.5 text-lime-deep"><Star className="h-3 w-3 fill-current" />{d.rating}</span>
                            <span className="text-muted-foreground">·</span>
                            <span className="font-bold">${d.price}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <Link to="/doctors" className="mt-4 inline-flex text-sm font-semibold text-ink underline">Browse all 150+ vets</Link>
              </div>
            )}

            {step === 2 && (
              <div>
                <Eyebrow>Step 2</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold">Pick a time</h2>
                <div className="mt-6 grid gap-5">
                  <div>
                    <label className="text-sm font-semibold">Date</label>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Available slots</label>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSlot(t)}
                          className={`rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition ${slot === t ? "border-ink bg-ink text-cream" : "border-border hover:border-ink"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Consultation mode</label>
                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      {CONSULT_MODES.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMode(m.id)}
                          className={`flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition ${mode === m.id ? "border-ink bg-lime/20" : "border-border hover:border-ink"}`}
                        >
                          <m.icon className="h-5 w-5 text-lime-deep" />
                          <div>
                            <div className="text-sm font-bold">{m.label}</div>
                            <div className="text-xs text-muted-foreground">{m.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <Eyebrow>Step 3</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold">Tell us about your pet</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Input label="Pet name" value={pet.name} onChange={(v) => setPet({ ...pet, name: v })} placeholder="Buddy" />
                  <div>
                    <label className="text-sm font-semibold">Species</label>
                    <select value={pet.species} onChange={(e) => setPet({ ...pet, species: e.target.value })} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink">
                      {["Dog", "Cat", "Bird", "Horse", "Cattle", "Poultry", "Other"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <Input label="Age" value={pet.age} onChange={(v) => setPet({ ...pet, age: v })} placeholder="2 years" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-semibold">Symptoms / reason for visit</label>
                  <textarea
                    rows={4}
                    value={pet.symptoms}
                    onChange={(e) => setPet({ ...pet, symptoms: e.target.value })}
                    placeholder="Describe what you're seeing..."
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <form onSubmit={submit}>
                <Eyebrow>Step 4</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold">Your details</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Input label="Full name" value={contact.name} onChange={(v) => setContact({ ...contact, name: v })} required />
                  <Input label="Email" type="email" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} required />
                  <Input label="Phone" value={contact.phone} onChange={(v) => setContact({ ...contact, phone: v })} placeholder="+1 555 …" />
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm">
                  <div className="font-semibold">Booking summary</div>
                  <div className="mt-2 grid gap-1 text-muted-foreground">
                    <span>{doctor.name} · {doctor.specialty}</span>
                    <span>{date} · {slot} · {mode}</span>
                    <span className="font-bold text-ink">Total: ${doctor.price}</span>
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
                  Confirm & pay ${doctor.price}
                </button>
              </form>
            )}

            <div className="mt-8 flex justify-between">
              <button onClick={prev} disabled={step === 1} className="rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold disabled:opacity-40">
                Back
              </button>
              {step < 4 && (
                <button onClick={next} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-cream hover:bg-ink-soft">
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Side summary */}
          <aside className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <img src={doctor.img} alt={doctor.name} className="h-16 w-16 rounded-2xl object-cover" />
              <div>
                <div className="font-bold">{doctor.name}</div>
                <div className="text-xs text-muted-foreground">{doctor.specialty}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-lime-deep">
                  <Star className="h-3 w-3 fill-current" /> {doctor.rating} <span className="text-muted-foreground">({doctor.reviews})</span>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4 text-lime-deep" /> Verified · {doctor.flag} {doctor.country}</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Globe2 className="h-4 w-4 text-lime-deep" /> {doctor.languages.join(", ")}</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4 text-lime-deep" /> {date}</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-lime-deep" /> {slot}</div>
            </div>
            <div className="mt-5 rounded-2xl bg-lime/20 p-4 text-sm">
              <div className="font-bold">Member price: $0</div>
              <div className="text-xs text-muted-foreground">Includes 1 free consult/year + 10% off all visits.</div>
              <Link to="/membership" className="mt-2 inline-flex text-xs font-bold text-ink underline">Get membership →</Link>
            </div>
          </aside>
        </div>
      </Section>
    </PageLayout>
  );
}

function Input({ label, value, onChange, type = "text", placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-semibold text-ink">{value}</span>
    </div>
  );
}
