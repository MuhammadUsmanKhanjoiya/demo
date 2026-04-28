import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { FormCard, StepProgress, StepNav, Field, Select, Textarea, ChoiceGrid, SuccessCard } from "@/components/site/StepForm";
import { Tractor, Beef, Milk, Users, ArrowRight, ShieldCheck } from "lucide-react";
import img from "@/assets/club-farm.jpg";

export const Route = createFileRoute("/registration/dairy")({
  head: () => ({
    meta: [
      { title: "Dairy Farm Registration, The Pets Club" },
      { name: "description", content: "Register your dairy farm. Track herd health, yield, breeding and compliance." },
      { property: "og:title", content: "Dairy Farm Registration, The Pets Club" },
      { property: "og:image", content: img },
    ],
  }),
  component: DairyRegistration,
});

const STEPS = ["Farm", "Herd", "Owner", "Review"];

function DairyRegistration() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [farm, setFarm] = useState({ name: "", country: "", region: "", size: "Small (under 50 head)" });
  const [herdType, setHerdType] = useState<"cow" | "buffalo" | "goat" | "mixed">("cow");
  const [herd, setHerd] = useState({ count: "", lactating: "", yieldL: "" });
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
    toast.success("Dairy farm registered, welcome aboard!");
    setDone(true);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <PageHero
        eyebrow="Dairy Farm Registration"
        title="Run your dairy with data, not guesswork."
        subtitle="Free to register. Unlock herd tools, mobile vets, and bulk feed pricing in minutes."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {done ? (
            <SuccessCard
              emoji="🐄"
              title="Your dairy farm is registered!"
              message="Our agri team will email your activation link within 1 business hour. Bulk feed catalog access is unlocked."
            >
              <Link to="/clubs/farm" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
                Visit Farm Club <ArrowRight className="h-4 w-4" />
              </Link>
            </SuccessCard>
          ) : (
            <form onSubmit={submit}>
              <FormCard>
                <StepProgress step={step} total={4} labels={STEPS} />

                {step === 1 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 1, Farm</Eyebrow>
                    <h2 className="text-3xl font-bold">Tell us about your farm.</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Farm name" placeholder="Greenfields Dairy" value={farm.name} onChange={(e) => setFarm({ ...farm, name: e.target.value })} required />
                      <Field label="Country" placeholder="United States" value={farm.country} onChange={(e) => setFarm({ ...farm, country: e.target.value })} required />
                      <Field label="Region / state" placeholder="Wisconsin" value={farm.region} onChange={(e) => setFarm({ ...farm, region: e.target.value })} />
                      <Select label="Farm size" value={farm.size} onChange={(v) => setFarm({ ...farm, size: v })} options={["Small (under 50 head)", "Medium (50–200 head)", "Large (200–1,000)", "Industrial (1,000+)"]} />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 2, Herd</Eyebrow>
                    <h2 className="text-3xl font-bold">What's in your herd?</h2>
                    <ChoiceGrid
                      cols={4}
                      value={herdType}
                      onChange={setHerdType}
                      options={[
                        { id: "cow", label: "Cattle", desc: "Holstein, Jersey…", icon: Beef },
                        { id: "buffalo", label: "Buffalo", desc: "Murrah, Nili-Ravi", icon: Tractor },
                        { id: "goat", label: "Goat", desc: "Saanen, Boer…", icon: Milk },
                        { id: "mixed", label: "Mixed", desc: "Multiple species", icon: Users },
                      ]}
                    />
                    <div className="grid gap-5 md:grid-cols-3">
                      <Field label="Total animals" type="number" placeholder="120" value={herd.count} onChange={(e) => setHerd({ ...herd, count: e.target.value })} />
                      <Field label="Lactating" type="number" placeholder="80" value={herd.lactating} onChange={(e) => setHerd({ ...herd, lactating: e.target.value })} />
                      <Field label="Avg yield (L/day)" type="number" placeholder="22" value={herd.yieldL} onChange={(e) => setHerd({ ...herd, yieldL: e.target.value })} />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 3, Owner</Eyebrow>
                    <h2 className="text-3xl font-bold">Your contact details.</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full name" placeholder="John Carter" value={owner.name} onChange={(e) => setOwner({ ...owner, name: e.target.value })} required />
                      <Field label="Email" type="email" placeholder="john@farm.com" value={owner.email} onChange={(e) => setOwner({ ...owner, email: e.target.value })} required />
                      <Field label="Phone" type="tel" placeholder="+1 555 123 4567" value={owner.phone} onChange={(e) => setOwner({ ...owner, phone: e.target.value })} />
                    </div>
                    <Textarea label="Anything else we should know?" placeholder="Special needs, infrastructure, current vet partners…" />
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-5">
                    <Eyebrow>Step 4, Review</Eyebrow>
                    <h2 className="text-3xl font-bold">Looks good?</h2>
                    <div className="grid gap-3 rounded-2xl bg-surface p-6 text-sm">
                      <Row k="Farm" v={`${farm.name || ", "} · ${farm.region || ""} ${farm.country}`} />
                      <Row k="Size" v={farm.size} />
                      <Row k="Herd" v={`${herdType} · ${herd.count || "0"} animals · ${herd.lactating || "0"} lactating`} />
                      <Row k="Avg yield" v={`${herd.yieldL || ", "} L/day`} />
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
          <Eyebrow>What you unlock</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold">Built for modern dairies.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Herd records", d: "Per-animal vaccination, treatment & breeding history.", i: ShieldCheck },
            { t: "Yield analytics", d: "Daily milk production charts, spot drops early.", i: Milk },
            { t: "Mobile vets", d: "On-call large-animal vets within 30 km.", i: Tractor },
            { t: "Bulk marketplace", d: "Member-only feed and supplement pricing.", i: Beef },
            { t: "Compliance toolkit", d: "Forms and reminders for local regulations.", i: ShieldCheck },
            { t: "Buyer network", d: "Connect with verified milk buyers in your region.", i: Users },
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
