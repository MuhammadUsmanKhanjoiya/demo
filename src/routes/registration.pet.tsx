import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { FormCard, StepProgress, StepNav, Field, Select, Textarea, ChoiceGrid, SuccessCard } from "@/components/site/StepForm";
import { Cat, Dog, Bird, Rabbit, ArrowRight, Gift, Stethoscope, Heart } from "lucide-react";

export const Route = createFileRoute("/registration/pet")({
  head: () => ({
    meta: [
      { title: "Pet Registration, The Pets Club" },
      { name: "description", content: "Register your pet to unlock vet care, community, marketplace and AI services." },
    ],
  }),
  component: PetRegistration,
});

const STEPS = ["Pet", "Health", "You", "Done"];

function PetRegistration() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [species, setSpecies] = useState<"dog" | "cat" | "bird" | "small">("dog");
  const [pet, setPet] = useState({ name: "", breed: "", age: "", weight: "", gender: "Female" });
  const [health, setHealth] = useState({ vaccinated: "Yes", neutered: "No", allergies: "", notes: "" });
  const [owner, setOwner] = useState({ name: "", email: "", phone: "", city: "" });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!owner.name || !owner.email) {
      toast.error("Your name and email are required.");
      setStep(3);
      return;
    }
    toast.success(`${pet.name || "Your pet"} is in the club! 🐾`);
    setDone(true);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero
        eyebrow="Pet Registration"
        title="Welcome your pet to the club."
        subtitle="Free forever. Takes under 2 minutes, and your first vet consult is on us."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {done ? (
            <SuccessCard
              emoji="🎉"
              title={`Welcome, ${pet.name || "friend"}!`}
              message="Your free vet consult voucher is on its way. Check your inbox for next steps."
            >
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
                  Book a vet now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/marketplace" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">
                  Shop essentials
                </Link>
              </div>
            </SuccessCard>
          ) : (
            <form onSubmit={submit}>
              <FormCard>
                <StepProgress step={step} total={4} labels={STEPS} />

                {step === 1 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 1, Your pet</Eyebrow>
                    <h2 className="text-3xl font-bold">Who are we welcoming?</h2>
                    <ChoiceGrid
                      cols={4}
                      value={species}
                      onChange={setSpecies}
                      options={[
                        { id: "dog", label: "Dog", icon: Dog },
                        { id: "cat", label: "Cat", icon: Cat },
                        { id: "bird", label: "Bird", icon: Bird },
                        { id: "small", label: "Small / other", desc: "Rabbit, reptile…", icon: Rabbit },
                      ]}
                    />
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Pet name" placeholder="Buddy" value={pet.name} onChange={(e) => setPet({ ...pet, name: e.target.value })} required />
                      <Field label="Breed" placeholder="Golden Retriever" value={pet.breed} onChange={(e) => setPet({ ...pet, breed: e.target.value })} />
                      <Field label="Age" placeholder="2 years" value={pet.age} onChange={(e) => setPet({ ...pet, age: e.target.value })} />
                      <Field label="Weight (kg)" placeholder="12" value={pet.weight} onChange={(e) => setPet({ ...pet, weight: e.target.value })} />
                      <Select label="Gender" value={pet.gender} onChange={(v) => setPet({ ...pet, gender: v })} options={["Female", "Male", "Unknown"]} />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 2, Health</Eyebrow>
                    <h2 className="text-3xl font-bold">A quick health snapshot.</h2>
                    <p className="text-sm text-muted-foreground">This helps our vets give you the best advice. You can update it anytime.</p>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Select label="Up to date on vaccinations?" value={health.vaccinated} onChange={(v) => setHealth({ ...health, vaccinated: v })} options={["Yes", "Partially", "No", "Not sure"]} />
                      <Select label="Neutered / spayed?" value={health.neutered} onChange={(v) => setHealth({ ...health, neutered: v })} options={["Yes", "No", "Scheduled"]} />
                    </div>
                    <Field label="Known allergies" placeholder="Chicken, grass…" value={health.allergies} onChange={(e) => setHealth({ ...health, allergies: e.target.value })} />
                    <Textarea label="Medical notes" placeholder="Any conditions, medications, surgeries or fun facts?" value={health.notes} onChange={(e) => setHealth({ ...health, notes: e.target.value })} />
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 3, You</Eyebrow>
                    <h2 className="text-3xl font-bold">How do we reach you?</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Your name" placeholder="Jane Doe" value={owner.name} onChange={(e) => setOwner({ ...owner, name: e.target.value })} required />
                      <Field label="Email" type="email" placeholder="jane@email.com" value={owner.email} onChange={(e) => setOwner({ ...owner, email: e.target.value })} required />
                      <Field label="Phone (optional)" type="tel" placeholder="+1 555 123 4567" value={owner.phone} onChange={(e) => setOwner({ ...owner, phone: e.target.value })} />
                      <Field label="City" placeholder="London" value={owner.city} onChange={(e) => setOwner({ ...owner, city: e.target.value })} />
                    </div>
                    <label className="flex items-start gap-3 text-sm text-muted-foreground">
                      <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-border" />
                      <span>Send me care tips and member offers. Unsubscribe any time.</span>
                    </label>
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 4, Confirm</Eyebrow>
                    <h2 className="text-3xl font-bold">Ready to join?</h2>
                    <div className="grid gap-3 rounded-2xl bg-surface p-6 text-sm">
                      <Row k="Pet" v={`${pet.name || ", "} · ${species} · ${pet.breed || "Mixed"}`} />
                      <Row k="Age / weight" v={`${pet.age || ", "} · ${pet.weight ? pet.weight + " kg" : ", "}`} />
                      <Row k="Vaccinations" v={health.vaccinated} />
                      <Row k="Owner" v={`${owner.name} · ${owner.email}`} />
                      <Row k="City" v={owner.city || ", "} />
                    </div>
                    <div className="rounded-2xl bg-lime/30 p-5 text-sm">
                      🎁 <strong>Welcome gift:</strong> Free 15-min vet consult + 10% off your first marketplace order.
                    </div>
                    <label className="flex items-start gap-3 text-sm text-muted-foreground">
                      <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-border" />
                      <span>I agree to The Pets Club <Link to="/terms" className="text-ink underline">Terms</Link> and <Link to="/privacy" className="text-ink underline">Privacy Policy</Link>.</span>
                    </label>
                  </div>
                )}

                <StepNav step={step} total={4} onPrev={prev} onNext={next} submitLabel="Join the club, free" />
              </FormCard>
            </form>
          )}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { i: Gift, t: "Free vet consult", d: "Welcome gift on us, book any time." },
            { i: Stethoscope, t: "24/7 telemedicine", d: "Talk to a vet within 5 minutes, day or night." },
            { i: Heart, t: "Lifetime health record", d: "Vaccinations, weight, vet notes, all in one place." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <b.i className="h-6 w-6 text-lime-deep" />
              <h3 className="mt-3 text-lg font-bold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
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
