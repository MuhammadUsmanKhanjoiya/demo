import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import logoLime from "@/assets/logo-lime.png";
import {
  Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Shield, Heart, Award,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-ink text-cream">
      {/* Newsletter band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime">
              <Heart className="h-3 w-3" /> Newsletter
            </span>
            <h3 className="mt-4 text-balance text-3xl font-bold md:text-4xl">
              Get pet care tips, new arrivals & member offers.
            </h3>
            <p className="mt-2 text-cream/60">Join 50,000+ pet parents. One email a week. Unsubscribe anytime.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed! 🐾"); setEmail(""); }}
            className="flex w-full overflow-hidden rounded-full border border-cream/15 bg-cream/5 p-1.5 backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-5 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime-deep">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logoLime} alt="The Pets Club" className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              The all-in-one pet care platform combining community, commerce, and veterinary services. From first paw to forever family.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-cream/10 p-3">
                <Shield className="h-4 w-4 text-lime" />
                <div className="mt-2 font-bold">Verified Vets</div>
                <div className="text-cream/50">Licensed & vetted</div>
              </div>
              <div className="rounded-xl border border-cream/10 p-3">
                <Award className="h-4 w-4 text-lime" />
                <div className="mt-2 font-bold">2025 Award</div>
                <div className="text-cream/50">Petcare Innovator</div>
              </div>
              <div className="rounded-xl border border-cream/10 p-3">
                <Heart className="h-4 w-4 text-lime" />
                <div className="mt-2 font-bold">50k+ Pets</div>
                <div className="text-cream/50">Happy & healthy</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-cream/20 p-2 transition hover:border-lime hover:text-lime"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Clubs" items={[
            ["/clubs/cats", "Cat Club"],
            ["/clubs/dogs", "Dog Club"],
            ["/clubs/birds-horse", "Birds & Horse"],
            ["/clubs/farm", "Farm Animals"],
            ["/clubs/poultry", "Poultry"],
          ]} />
          <FooterCol title="Vet Care" items={[
            ["/doctors", "Browse Vets"],
            ["/specializations", "Specialisations"],
            ["/telemedicine", "Telemedicine"],
            ["/second-opinion", "Second Opinion"],
            ["/prescription", "Digital Prescription"],
            ["/membership", "Membership $29/yr"],
          ]} />
          <FooterCol title="Services" items={[
            ["/adoption", "Adoption"],
            ["/marketplace", "Marketplace"],
            ["/ml/recommendations", "AI Recommendations"],
            ["/ml/chatbot", "AI Chatbot"],
            ["/partners", "Vet Partners"],
          ]} />
          <FooterCol title="Company" items={[
            ["/about", "About"],
            ["/pricing", "Pricing"],
            ["/success-stories", "Success Stories"],
            ["/careers", "Careers"],
            ["/blogs", "Blogs"],
            ["/events", "Events"],
            ["/contact", "Contact"],
          ]} />

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-lime">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@thepetsclub.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 010-7387</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 24 Wagging Tail Ave,<br />Suite 365</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Pets Club. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-lime">Privacy</Link>
            <Link to="/terms" className="hover:text-lime">Terms</Link>
            <Link to="/faq" className="hover:text-lime">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-sm font-semibold text-lime">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-cream/70">
        {items.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="transition hover:text-lime">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
