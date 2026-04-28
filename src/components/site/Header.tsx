import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, PhoneCall, Globe2, Search, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo-dark.png";
import logoWhite from "@/assets/logo-white.png";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Home", to: "/" },
  {
    label: "Clubs",
    to: "/clubs",
    children: [
      { label: "Cat Club", to: "/clubs/cats" },
      { label: "Dog Club", to: "/clubs/dogs" },
      { label: "Birds & Horse Club", to: "/clubs/birds-horse" },
      { label: "Farm Animals Club", to: "/clubs/farm" },
      { label: "Poultry Club", to: "/clubs/poultry" },
    ],
  },
  {
    label: "Find a Vet",
    to: "/doctors",
    children: [
      { label: "Browse Veterinarians", to: "/doctors" },
      { label: "Specialisations", to: "/specializations" },
      { label: "Telemedicine", to: "/telemedicine" },
      { label: "Second Opinion", to: "/second-opinion" },
      { label: "Digital Prescription", to: "/prescription" },
      { label: "Membership, $29/yr", to: "/membership" },
    ],
  },
  {
    label: "Services",
    to: "/telemedicine",
    children: [
      { label: "Adoption", to: "/adoption" },
      { label: "Marketplace", to: "/marketplace" },
      { label: "Veterinary Partners", to: "/partners" },
      { label: "Smart Recommendations", to: "/ml/recommendations" },
      { label: "Adoption Matchmaking", to: "/ml/matchmaking" },
      { label: "AI Chatbot", to: "/ml/chatbot" },
    ],
  },
  {
    label: "Register",
    to: "/registration",
    children: [
      { label: "Pet Registration", to: "/registration/pet" },
      { label: "Dairy Farm", to: "/registration/dairy" },
      { label: "Poultry Farm", to: "/registration/poultry" },
      { label: "Apply as a Vet", to: "/vet-application" },
    ],
  },
  {
    label: "Discover",
    to: "/blogs",
    children: [
      { label: "Blogs", to: "/blogs" },
      { label: "Events", to: "/events" },
      { label: "Special Offers", to: "/offers" },
      { label: "Success Stories", to: "/success-stories" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header({ variant = "light" as "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isDark = variant === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${isDark ? "text-cream" : "text-foreground"}`}>
      {/* Utility bar */}
      <div className="hidden bg-ink text-cream lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <div className="flex items-center gap-5 text-cream/80">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />24/7 Telemedicine, vets online now</span>
            <span className="inline-flex items-center gap-1.5"><PhoneCall className="h-3 w-3" /> +1 (555) 010-7387</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="inline-flex items-center gap-1.5 hover:text-lime"><Globe2 className="h-3 w-3" /> EN · 11 langs</button>
            <Link to="/offers" className="hover:text-lime">Member offers</Link>
            <Link to="/partners" className="hover:text-lime">Become a Vet Partner</Link>
          </div>
        </div>
      </div>

      <div
        className={`backdrop-blur-md transition-all ${
          isDark ? "bg-ink/85" : scrolled ? "bg-background/90 shadow-soft" : "bg-background/70"
        } border-b ${scrolled ? "border-border" : "border-transparent"}`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 ${scrolled ? "py-2" : "py-3"}`}>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={isDark ? logoWhite : logo}
              alt="The Pets Club"
              className={`w-auto transition-all ${scrolled ? "h-9" : "h-11"}`}
              width={170}
              height={44}
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium hover:bg-lime/25 hover:text-foreground">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-1 rounded-3xl border border-border bg-card p-3 text-foreground opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm transition hover:bg-lime/25"
                        activeProps={{ className: "bg-lime/40 font-semibold" }}
                      >
                        {c.label}
                        <ChevronDown className="h-3 w-3 -rotate-90 opacity-40" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full px-3 py-2 text-sm font-medium hover:bg-lime/25 hover:text-foreground"
                  activeProps={{ className: "bg-lime text-ink" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-lime/30">
              <Search className="h-4 w-4" />
            </button>
            <CartButton />
            <Link
              to="/doctors"
              className="hidden rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold hover:bg-ink hover:text-cream xl:inline-block"
            >
              Find a Vet
            </Link>
            <Link
              to="/registration/pet"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream shadow-soft hover:bg-ink-soft"
            >
              Join Free
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <CartButton />
            <button
              className="rounded-full p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto max-h-[80vh] max-w-7xl overflow-y-auto px-4 py-3">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileSub(mobileSub === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between py-2.5 text-left font-semibold text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          mobileSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSub === item.label && (
                      <div className="ml-3 border-l border-border pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm text-muted-foreground"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-semibold text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-3 grid gap-2">
                <Link
                  to="/telemedicine"
                  onClick={() => setOpen(false)}
                  className="block rounded-full border border-border px-4 py-2.5 text-center text-sm font-semibold"
                >
                  Book a Vet
                </Link>
                <Link
                  to="/registration/pet"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-cream"
                >
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function CartButton() {
  const { count } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Link
      to="/cart"
      aria-label={`Cart, ${count} items`}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-lime/30"
    >
      <ShoppingBag className="h-4 w-4" />
      {mounted && count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold text-cream">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
