import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { Section } from "@/components/site/Section";
import { ArrowLeft, Star, ShoppingBag, Truck, ShieldCheck, RotateCcw, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/marketplace/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name}, The Pets Club` },
          { name: "description", content: loaderData.product.blurb },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:image", content: loaderData.product.img },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageLayout>
      <Section>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Product not found</h1>
          <Link to="/marketplace" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream">Back to shop</Link>
        </div>
      </Section>
    </PageLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <PageLayout>
      <Section>
        <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Marketplace
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border-4 border-ink bg-card shadow-card">
            <img src={product.img} alt={product.name} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-lime-deep">{product.category}</div>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1 text-lime-deep"><Star className="h-4 w-4 fill-current" /> {product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <p className="mt-5 text-lg text-muted-foreground">{product.blurb}</p>
            <div className="mt-6 text-4xl font-bold">${product.price}</div>

            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center rounded-full border-2 border-ink">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-lg font-bold">−</button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-lg font-bold">+</button>
              </div>
              <button
                onClick={() => {
                  add({ slug: product.slug, name: product.name, price: product.price, img: product.img }, qty);
                  toast.success(`Added ${qty}× ${product.name} to cart`);
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft"
              >
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
            </div>

            <ul className="mt-8 grid gap-3">
              {product.details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-lime-deep" /> {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
              <Trust icon={Truck} label="Free shipping > $50" />
              <Trust icon={ShieldCheck} label="2-year warranty" />
              <Trust icon={RotateCcw} label="30-day returns" />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold">You may also like</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.slug} to="/marketplace/$slug" params={{ slug: r.slug }} className="group rounded-3xl border-2 border-ink bg-card p-3 shadow-card transition hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img src={r.img} alt={r.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold">{r.name}</h3>
                    <span className="text-lg font-bold">${r.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </PageLayout>
  );
}

function Trust({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-lime-deep" />
      <div className="mt-2 font-semibold">{label}</div>
    </div>
  );
}
