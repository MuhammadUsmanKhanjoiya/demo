import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { Heart, MapPin, Search } from "lucide-react";
import adoptionImg from "@/assets/adoption.jpg";
import { ADOPTABLE_PETS } from "@/data/pets";

export const Route = createFileRoute("/adoption")({
  head: () => ({
    meta: [
      { title: "Adoption, The Pets Club" },
      { name: "description", content: "Find your forever friend. AI-powered adoption matchmaking based on your lifestyle." },
      { property: "og:image", content: adoptionImg },
    ],
  }),
  component: AdoptionPage,
});

const SPECIES = ["All", "Dogs", "Cats", "Birds", "Other"] as const;

function AdoptionPage() {
  const [species, setSpecies] = useState<string>("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return ADOPTABLE_PETS.filter((p) => {
      if (species !== "All" && p.species !== species) return false;
      if (q && !`${p.name} ${p.breed} ${p.location}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [species, q]);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Adoption"
        title="Find a friend, save a life."
        subtitle="Browse vetted shelters and meet pets matched to your home, lifestyle, and love."
      />

      <Section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold">Available now</h2>
          <div className="flex flex-wrap gap-3">
            <div className="flex w-full items-center gap-2 rounded-full border-2 border-ink bg-card px-4 sm:w-64">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, breed, city…" className="w-full bg-transparent py-2.5 text-sm outline-none" />
            </div>
            <div className="flex flex-wrap gap-2">
              {SPECIES.map((t) => (
                <button
                  key={t}
                  onClick={() => setSpecies(t)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${species === t ? "bg-ink text-cream" : "bg-muted text-foreground hover:bg-lime/30"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="mt-10 rounded-3xl border-2 border-dashed border-border p-12 text-center text-muted-foreground">
            No pets match your filters. Try expanding your search.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link
                key={p.slug}
                to="/adoption/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.breed} · {p.age}</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border group-hover:bg-lime group-hover:text-ink">
                      <Heart className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </div>
                  <div className="mt-4 w-full rounded-full bg-ink py-2.5 text-center text-sm font-semibold text-cream group-hover:bg-ink-soft">
                    Meet {p.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>How adoption works</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Loved in 4 steps.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "Browse", d: "Or use AI matchmaking" },
            { n: "2", t: "Apply", d: "Quick application" },
            { n: "3", t: "Meet", d: "Visit your match" },
            { n: "4", t: "Adopt", d: "Welcome them home" },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-border bg-card p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime font-bold text-ink">{s.n}</div>
              <div className="mt-3 font-bold">{s.t}</div>
              <div className="text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/ml/matchmaking" className="inline-flex rounded-full bg-ink px-7 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
            Try AI matchmaking
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
