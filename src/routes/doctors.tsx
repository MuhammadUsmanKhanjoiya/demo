import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Star, ShieldCheck, Globe2, Search, ArrowRight } from "lucide-react";
import { DOCTORS } from "@/data/doctors";
import { SPECIALIZATIONS } from "@/data/specializations";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Find a Veterinarian, The Pets Club" },
      { name: "description", content: "Browse 150+ verified veterinarians by specialisation, language and price. Book a video consultation in minutes." },
      { property: "og:title", content: "Find a Veterinarian, The Pets Club" },
      { property: "og:description", content: "Verified vets in 11 languages, ready to consult 24/7." },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState<string>("All");
  const [lang, setLang] = useState<string>("All");

  const allLanguages = useMemo(
    () => Array.from(new Set(DOCTORS.flatMap((d) => d.languages))).sort(),
    []
  );

  const filtered = DOCTORS.filter((d) => {
    if (spec !== "All" && d.specialty !== spec) return false;
    if (lang !== "All" && !d.languages.includes(lang)) return false;
    if (q && !`${d.name} ${d.specialty} ${d.country}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <PageLayout>
      <PageHero
        eyebrow="Find a Veterinarian"
        title="150+ verified vets. One click away."
        subtitle="Filter by specialisation, language and availability, book a video consultation in minutes."
      />

      <Section>
        {/* Filters */}
        <div className="rounded-3xl border-2 border-ink bg-card p-5 shadow-card">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search vets, country, specialty…"
                className="w-full bg-transparent py-3 text-sm focus:outline-none"
              />
            </div>
            <select value={spec} onChange={(e) => setSpec(e.target.value)} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none">
              <option>All</option>
              {SPECIALIZATIONS.map((s) => <option key={s.slug}>{s.name}</option>)}
            </select>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none">
              <option>All</option>
              {allLanguages.map((l) => <option key={l}>{l}</option>)}
            </select>
            <button
              onClick={() => { setQ(""); setSpec("All"); setLang("All"); }}
              className="rounded-2xl border-2 border-ink bg-card px-5 py-3 text-sm font-semibold hover:bg-lime hover:text-ink"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Showing <b className="text-ink">{filtered.length}</b> of {DOCTORS.length} verified vets
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <article key={d.id} className="overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                  <ShieldCheck className="h-3 w-3" /> Verified
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs text-cream backdrop-blur">{d.flag} {d.country}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-lime-deep">
                    <Star className="h-3.5 w-3.5 fill-current" /> {d.rating} <span className="text-muted-foreground">({d.reviews})</span>
                  </div>
                  <span className="text-sm font-bold">${d.price}<span className="text-xs text-muted-foreground">/visit</span></span>
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.specialty}</p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-muted-foreground" />
                  {d.languages.map((l) => (
                    <span key={l} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-ink-soft">{l}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="text-muted-foreground">Next: <b className="text-ink">{d.next}</b></span>
                  <Link to="/booking" search={{ doctor: d.id }} className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream hover:bg-ink-soft">
                    Book <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border-2 border-dashed border-border p-12 text-center">
            <p className="text-muted-foreground">No vets match your filters.</p>
          </div>
        )}
      </Section>

      <Section className="bg-surface">
        <div className="rounded-[2rem] bg-ink p-10 text-cream lg:p-14">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Are you a vet?</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">Join 150+ verified vets earning on The Pets Club.</h3>
              <p className="mt-3 text-cream/70">Set your hours, your rates, your specialty. We bring the patients.</p>
            </div>
            <div className="lg:text-right">
              <Link to="/vet-application" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink hover:bg-lime-deep">
                Apply as a vet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
