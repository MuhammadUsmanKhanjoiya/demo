import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { ShoppingBag, Star, Search, ArrowUpDown } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace, The Pets Club" },
      { name: "description", content: "Premium food, accessories, and care products for every pet, plus farm supplies." },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const { add } = useCart();

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (cat !== "All") list = list.filter((p) => p.category === cat);
    if (q) list = list.filter((p) => `${p.name} ${p.blurb}`.toLowerCase().includes(q.toLowerCase()));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Sale & Purchase"
        title="Premium gear. Member prices."
        subtitle="From organic food to vet-approved accessories. Buy from trusted brands, sell what you no longer need."
      />

      <Section>
        <div className="rounded-3xl border-2 border-ink bg-card p-5 shadow-card">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_auto]">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="w-full bg-transparent py-3 text-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="w-full bg-transparent py-3 text-sm focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
            <button onClick={() => { setQ(""); setCat("All"); setSort("featured"); }} className="rounded-2xl border-2 border-ink bg-card px-5 py-3 text-sm font-semibold hover:bg-lime hover:text-ink">
              Reset
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((t) => (
              <button
                key={t}
                onClick={() => setCat(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === t ? "bg-ink text-cream" : "bg-muted hover:bg-lime/30"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Showing <b className="text-ink">{filtered.length}</b> of {PRODUCTS.length} products
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-3xl border-2 border-dashed border-border p-12 text-center text-muted-foreground">
            No products match your filters.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <div key={p.slug} className="group rounded-3xl border-2 border-ink bg-card p-3 shadow-card transition hover:-translate-y-1">
                <Link to="/marketplace/$slug" params={{ slug: p.slug }} className="block">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                </Link>
                <div className="p-3">
                  <div className="flex items-center gap-1 text-xs text-lime-deep">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {p.rating} <span className="text-muted-foreground">({p.reviews})</span>
                  </div>
                  <Link to="/marketplace/$slug" params={{ slug: p.slug }} className="mt-1 block font-bold hover:text-lime-deep">
                    {p.name}
                  </Link>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-lg font-bold">${p.price}</span>
                    <button
                      onClick={() => {
                        add({ slug: p.slug, name: p.name, price: p.price, img: p.img });
                        toast.success(`Added ${p.name} to cart`);
                      }}
                      aria-label={`Add ${p.name} to cart`}
                      className="rounded-full bg-ink p-2 text-cream hover:bg-ink-soft"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section className="bg-lime">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Sell on The Pets Club</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold text-ink md:text-5xl">List your products. Reach pet parents.</h2>
            <p className="mt-3 max-w-md text-ink-soft">Verified seller program with low fees, dedicated support, and a built-in audience of 50,000+ engaged buyers.</p>
            <Link to="/partners" className="mt-6 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
              Become a seller
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[{ n: "50k+", l: "Buyers" }, { n: "2k+", l: "Sellers" }, { n: "4.8★", l: "Avg rating" }].map((s) => (
              <div key={s.l} className="rounded-2xl border-2 border-ink bg-cream p-5 text-center">
                <div className="font-display text-3xl font-bold text-ink">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-ink-soft">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
