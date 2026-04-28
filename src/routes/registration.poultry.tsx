import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { FormCard, StepProgress, StepNav, Field, Select, Textarea, ChoiceGrid, SuccessCard } from "@/components/site/StepForm";
import { Egg, Bird, Drumstick, Layers, ArrowRight, ShieldCheck } from "lucide-react";
import img from "@/assets/club-poultry.jpg";

export const Route = createFileRoute("/registration/poultry")({
  head: () => ({
    meta: [
      { title: "Poultry Farm Registration, The Pets Club" },
      { name: "description", content: "Register your poultry farm. Track flocks, prevent disease, and access marketplace." },
      { property: "og:title", content: "Poultry Farm Registration, The Pets Club" },
      { property: "og:image", content: img },
    ],
  }),
  component: PoultryRegistration,
});

const STEPS = ["Farm", "Flock", "Owner", "Review"];

function PoultryRegistration() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [farm, setFarm] = useState({ name: "", country: "", region: "", scale: "Backyard (under 100 birds)" });
  const [type, setType] = useState<"layer" | "broiler" | "breeder" | "mixed">("layer");
  const [flock, setFlock] = useState({ birds: "", sheds: "", eggsDaily: "" });
  const [owner, setOwner] = useState({ name: "", email: "", phone: "" });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!owner.name || !owner.email) {
      toast.error("Owner name and email are required.");
      setStep(3);
      return;
    }
    toast.success("Poultry farm registered, welcome to the network!");
    setDone(true);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero
        eyebrow="Poultry Farm Registration"
        title="Healthier flocks. Better margins."
        subtitle="Free to register. Real-time outbreak alerts, certified hatchery access and flock tools."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {done ? (
            <SuccessCard
              emoji="🐔"
              title="Welcome to the flock!"
              message="Your farm dashboard is being prepared. You'll receive a confirmation email with your activation link within minutes."
            >
              <Link to="/clubs/poultry" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
                Visit Poultry Club <ArrowRight className="h-4 w-4" />
              </Link>
            </SuccessCard>
          ) : (
            <form onSubmit={submit}>
              <FormCard>
                <StepProgress step={step} total={4} labels={STEPS} />

                {step === 1 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 1, Farm</Eyebrow>
                    <h2 className="text-3xl font-bold">Where is your farm?</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Farm name" placeholder="Sunrise Layers" value={farm.name} onChange={(e) => setFarm({ ...farm, name: e.target.value })} required />
                      <Field label="Country" placeholder="India" value={farm.country} onChange={(e) => setFarm({ ...farm, country: e.target.value })} required />
                      <Field label="Region / state" placeholder="Punjab" value={farm.region} onChange={(e) => setFarm({ ...farm, region: e.target.value })} />
                      <Select label="Farm scale" value={farm.scale} onChange={(v) => setFarm({ ...farm, scale: v })} options={["Backyard (under 100 birds)", "Small (100–1,000)", "Medium (1k–10k)", "Commercial (10k–100k)", "Industrial (100k+)"]} />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 2, Flock</Eyebrow>
                    <h2 className="text-3xl font-bold">Tell us about your flock.</h2>
                    <ChoiceGrid
                      cols={4}
                      value={type}
                      onChange={setType}
                      options={[
                        { id: "layer", label: "Layers", desc: "Egg production", icon: Egg },
                        { id: "broiler", label: "Broilers", desc: "Meat production", icon: Drumstick },
                        { id: "breeder", label: "Breeder", desc: "Hatching eggs", icon: Bird },
                        { id: "mixed", label: "Mixed", desc: "Multi-purpose", icon: Layers },
                      ]}
                    />
                    <div className="grid gap-5 md:grid-cols-3">
                      <Field label="Total birds" type="number" placeholder="5000" value={flock.birds} onChange={(e) => setFlock({ ...flock, birds: e.target.value })} />
                      <Field label="Sheds / houses" type="number" placeholder="3" value={flock.sheds} onChange={(e) => setFlock({ ...flock, sheds: e.target.value })} />
                      <Field label="Eggs / day" type="number" placeholder="4500" value={flock.eggsDaily} onChange={(e) => setFlock({ ...flock, eggsDaily: e.target.value })} />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 3, Owner</Eyebrow>
                    <h2 className="text-3xl font-bold">Your contact details.</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full name" placeholder="Maya Singh" value={owner.name} onChange={(e) => setOwner({ ...owner, name: e.target.value })} required />
                      <Field label="Email" type="email" placeholder="maya@farm.com" value={owner.email} onChange={(e) => setOwner({ ...owner, email: e.target.value })} required />
                      <Field label="Phone" type="tel" placeholder="+91 98xxxxxxxx" value={owner.phone} onChange={(e) => setOwner({ ...owner, phone: e.target.value })} />
                    </div>
                    <Textarea label="Notes" placeholder="Vaccinations in use, biosecurity setup, current challenges…" />
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 4, Review</Eyebrow>
                    <h2 className="text-3xl font-bold">All set?</h2>
                    <div className="grid gap-3 rounded-2xl bg-surface p-6 text-sm">
                      <Row k="Farm" v={`${farm.name || ", "} · ${farm.region || ""} ${farm.country}`} />
                      <Row k="Scale" v={farm.scale} />
                      <Row k="Type" v={type} />
                      <Row k="Flock" v={`${flock.birds || "0"} birds · ${flock.sheds || "0"} sheds`} />
                      <Row k="Eggs/day" v={flock.eggsDaily || ", "} />
                      <Row k="Owner" v={`${owner.name} · ${owner.email}`} />
                    </div>
                    <label className="flex items-start gap-3 text-sm text-muted-foreground">
                      <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-border" />
                      <span>I agree to The Pets Club <Link to="/terms" className="text-ink underline">Terms</Link> and <Link to="/privacy" className="text-ink underline">Privacy Policy</Link>.</span>
                    </label>
                  </div>
                )}

                <StepNav step={step} total={4} onPrev={prev} onNext={next} submitLabel="Register farm" />
              </FormCard>
            </form>
          )}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>Member benefits</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold">Tools that pay for themselves.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Outbreak alerts", d: "Real-time regional disease alerts and biosecurity playbooks.", i: ShieldCheck },
            { t: "Hatchery direct", d: "Order day-old chicks from certified hatcheries.", i: Bird },
            { t: "Feed at cost", d: "Bulk feed pricing and reliable delivery.", i: Layers },
            { t: "Flock records", d: "Per-shed counts, mortality, weight & yield tracking.", i: Egg },
            { t: "Vet visits", d: "Mobile poultry specialists for emergencies.", i: ShieldCheck },
            { t: "Buyer network", d: "Connect with verified egg & meat buyers.", i: Drumstick },
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
