import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { useCart } from "@/lib/cart";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart, The Pets Club" },
      { name: "description", content: "Review your selected items and proceed to checkout." },
      { property: "og:title", content: "Your Cart, The Pets Club" },
      { property: "og:description", content: "Review your selected items and proceed to checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 7.5;
  const total = subtotal + shipping;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Cart"
        title="Your basket"
        subtitle="Free shipping on orders over $50. Members save an extra 10% at checkout."
      />

      <Section>
        {items.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-border p-16 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Discover premium gear for every pet.</p>
            <Link
              to="/marketplace"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft"
            >
              Browse marketplace <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4">
              {items.map((it) => (
                <div
                  key={it.slug}
                  className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-card p-4 shadow-card sm:flex-row sm:items-center"
                >
                  <Link to="/marketplace/$slug" params={{ slug: it.slug }} className="shrink-0">
                    <img
                      src={it.img}
                      alt={it.name}
                      className="h-28 w-28 rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link
                      to="/marketplace/$slug"
                      params={{ slug: it.slug }}
                      className="font-bold hover:text-lime-deep"
                    >
                      {it.name}
                    </Link>
                    <div className="mt-1 text-sm text-muted-foreground">${it.price.toFixed(2)} each</div>
                    <div className="mt-3 inline-flex items-center rounded-full border-2 border-ink">
                      <button
                        onClick={() => setQty(it.slug, it.qty - 1)}
                        aria-label="Decrease"
                        className="px-3 py-1.5 font-bold"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold">{it.qty}</span>
                      <button
                        onClick={() => setQty(it.slug, it.qty + 1)}
                        aria-label="Increase"
                        className="px-3 py-1.5 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="text-lg font-bold">${(it.price * it.qty).toFixed(2)}</div>
                    <button
                      onClick={() => {
                        remove(it.slug);
                        toast.success(`Removed ${it.name}`);
                      }}
                      aria-label="Remove from cart"
                      className="rounded-full border border-border p-2 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => {
                    clear();
                    toast.message("Cart cleared");
                  }}
                  className="text-sm font-semibold text-muted-foreground hover:text-ink"
                >
                  Clear cart
                </button>
                <Link to="/marketplace" className="text-sm font-semibold text-ink hover:text-lime-deep">
                  Continue shopping →
                </Link>
              </div>
            </div>

            <aside className="h-fit rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
              <h2 className="text-xl font-bold">Order summary</h2>
              <div className="mt-4 space-y-2 text-sm">
                <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`} />
                <div className="my-3 border-t border-border" />
                <Row label="Total" value={`$${total.toFixed(2)}`} bold />
              </div>
              <button
                onClick={() => toast.success("Checkout coming soon, your cart is saved.")}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft"
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </button>
              <div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">
                <Trust icon={Truck} label="Free over $50" />
                <Trust icon={ShieldCheck} label="Secure pay" />
                <Trust icon={RotateCcw} label="30-day returns" />
              </div>
            </aside>
          </div>
        )}
      </Section>
    </PageLayout>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "text-base font-bold" : "text-muted-foreground"}`}>
      <span>{label}</span>
      <span className={bold ? "text-ink" : "text-ink"}>{value}</span>
    </div>
  );
}

function Trust({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="rounded-xl border border-border p-2 text-center">
      <Icon className="mx-auto h-3.5 w-3.5 text-lime-deep" />
      <div className="mt-1 font-semibold">{label}</div>
    </div>
  );
}
