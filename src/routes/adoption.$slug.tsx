import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { ArrowLeft, MapPin, ShieldCheck, Heart, CheckCircle2 } from "lucide-react";
import { ADOPTABLE_PETS } from "@/data/pets";

export const Route = createFileRoute("/adoption/$slug")({
  loader: ({ params }) => {
    const pet = ADOPTABLE_PETS.find((p) => p.slug === params.slug);
    if (!pet) throw notFound();
    return { pet };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Meet ${loaderData.pet.name}, Adoption` },
          { name: "description", content: loaderData.pet.story },
          { property: "og:image", content: loaderData.pet.img },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageLayout>
      <Section><div className="text-center"><h1 className="text-4xl font-bold">Pet not found</h1></div></Section>
    </PageLayout>
  ),
  component: PetPage,
});

function PetPage() {
  const { pet } = Route.useLoaderData();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", home: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success(`Your application for ${pet.name} was sent!`);
  };

  return (
    <PageLayout>
      <Toaster position="top-center" />
      <Section>
        <Link to="/adoption" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> All pets
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border-4 border-ink shadow-card">
            <img src={pet.img} alt={pet.name} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <Eyebrow>{pet.species}</Eyebrow>
            <h1 className="mt-3 text-5xl font-bold">{pet.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{pet.breed} · {pet.age}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {pet.location}
            </div>
            <p className="mt-6 text-base leading-relaxed">{pet.story}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Badge ok={pet.vaccinated} label="Vaccinated" />
              <Badge ok={pet.neutered} label="Spayed/Neutered" />
            </div>

            {sent ? (
              <div className="mt-8 rounded-3xl border-2 border-lime bg-lime/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-lime-deep" />
                <h3 className="mt-3 text-2xl font-bold">Application sent!</h3>
                <p className="mt-2 text-muted-foreground">The shelter will reach out within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 grid gap-4 rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
                <h3 className="text-2xl font-bold">Apply to meet {pet.name}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <FormField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <FormField label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <FormField label="Home type" value={form.home} onChange={(v) => setForm({ ...form, home: v })} placeholder="Apartment, house with yard…" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Tell us why {pet.name} would fit your home</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink"
                  />
                </div>
                <button type="submit" className="rounded-full bg-ink py-3 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
                  <Heart className="mr-2 inline h-4 w-4" /> Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className={`flex items-center gap-2 rounded-2xl border px-4 py-3 ${ok ? "border-lime bg-lime/15" : "border-border bg-card"}`}>
      <ShieldCheck className={`h-4 w-4 ${ok ? "text-lime-deep" : "text-muted-foreground"}`} />
      <span className="font-semibold">{label}</span>
    </div>
  );
}

function FormField({ label, value, onChange, type = "text", placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink" />
    </div>
  );
}
