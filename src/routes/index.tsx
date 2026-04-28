import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import {
  ArrowRight, Stethoscope, Heart, ShoppingBag, Sparkles, Users, ShieldCheck,
  CalendarDays, Bot, PawPrint, Star, Video, MessageCircle, Phone, Lock, Globe2,
  Apple, Smartphone,
} from "lucide-react";
import heroVet from "@/assets/hero-vet-call.jpg";
import heroPip from "@/assets/hero-pet-pip.jpg";
import vetImg from "@/assets/vet-telemedicine.jpg";
import adoptionImg from "@/assets/adoption.jpg";
import shopImg from "@/assets/shop.jpg";
import catImg from "@/assets/club-cat.jpg";
import dogImg from "@/assets/club-dog.jpg";
import birdsImg from "@/assets/club-birds-horse.jpg";
import farmImg from "@/assets/club-farm.jpg";
import poultryImg from "@/assets/club-poultry.jpg";
import appPhone from "@/assets/app-phone.png";
import { SPECIALIZATIONS } from "@/data/specializations";
import { DOCTORS } from "@/data/doctors";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pets Club, Find an Online Vet in Your Language" },
      {
        name: "description",
        content:
          "Multilingual telemedicine for every animal. Talk to a verified vet in 11 languages, join clubs, shop premium care, and get AI-powered recommendations.",
      },
      { property: "og:title", content: "The Pets Club, Find an Online Vet in Your Language" },
      { property: "og:description", content: "150+ verified vets · 11 languages · 24/7 video consultations." },
      { property: "og:image", content: heroVet },
    ],
  }),
  component: HomePage,
});

const clubs = [
  { name: "Cat Club", to: "/clubs/cats", img: catImg, count: "12k members" },
  { name: "Dog Club", to: "/clubs/dogs", img: dogImg, count: "28k members" },
  { name: "Birds & Horse", to: "/clubs/birds-horse", img: birdsImg, count: "5.4k members" },
  { name: "Farm Animals", to: "/clubs/farm", img: farmImg, count: "3.1k farms" },
  { name: "Poultry", to: "/clubs/poultry", img: poultryImg, count: "1.8k farms" },
];

const services = [
  { icon: Stethoscope, title: "Telemedicine", desc: "24/7 video consults with verified vets in your language.", to: "/telemedicine" },
  { icon: Heart, title: "Adoption", desc: "Find your forever friend, vetted shelters & families.", to: "/adoption" },
  { icon: ShoppingBag, title: "Marketplace", desc: "Premium food, accessories, and care products.", to: "/marketplace" },
  { icon: Sparkles, title: "AI Recommendations", desc: "Personalized food, accessories & care plans.", to: "/ml/recommendations" },
  { icon: Users, title: "Adoption Matchmaking", desc: "Smart pet matches based on your lifestyle.", to: "/ml/matchmaking" },
  { icon: Bot, title: "AI Chatbot", desc: "Instant pet care Q&A, anytime, any pet.", to: "/ml/chatbot" },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO, bold all-caps headline + live video consult card */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-32 h-72 w-72 animate-blob bg-lime/40 blur-3xl" />
          <div className="absolute right-10 top-10 h-64 w-64 animate-blob bg-lime-deep/30 blur-3xl" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-card/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink-soft backdrop-blur">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-lime"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" /></span>
              150+ Active Veterinarians Online
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
              Find an<br />
              <span className="relative inline-block">
                <span className="relative z-10">online vet</span>
                <span className="absolute -bottom-2 left-0 right-0 -z-0 h-4 bg-lime" />
              </span><br />
              in your language.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg text-ink-soft">
              The Pets Club is a multilingual telemedicine platform, real-time video consultations with verified veterinarians for cats, dogs, birds, horses, farm animals & poultry, all over the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/doctors"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-soft hover:bg-ink-soft"
              >
                Find a veterinarian
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/telemedicine"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-cream"
              >
                <Video className="h-4 w-4" /> How it works
              </Link>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
              {[
                { n: "150+", l: "Active vets" },
                { n: "12+", l: "Specialisations" },
                { n: "11+", l: "Languages" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl font-bold text-ink">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-ink-soft">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Live consultation card */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-6 -top-6 h-32 w-32 animate-blob bg-lime/60 blur-2xl" />
              <div className="absolute -bottom-8 -right-4 h-40 w-40 animate-blob bg-lime/40 blur-2xl" style={{ animationDelay: "3s" }} />

              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-card">
                <img src={heroVet} alt="Veterinarian on a video call" width={1024} height={1024} className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />

                {/* LIVE chip */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cream">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" /> Live
                </div>

                {/* PiP */}
                <div className="absolute right-4 top-4 h-24 w-20 overflow-hidden rounded-2xl border-2 border-cream/80 shadow-card">
                  <img src={heroPip} alt="Pet on call" loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
                  <div className="absolute bottom-1 left-1 rounded-md bg-ink/80 px-1.5 py-0.5 text-[10px] font-semibold text-cream">You</div>
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-ink/80 px-4 py-3 text-cream backdrop-blur">
                  <div>
                    <div className="text-sm font-bold">Dr. Sarah Mitchell</div>
                    <div className="text-xs text-cream/70">Veterinary Medicine</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream"><MessageCircle className="h-4 w-4" /></button>
                    <button className="grid h-9 w-9 animate-pulse-ring place-items-center rounded-full bg-lime text-ink"><Phone className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>

              {/* HD Video chip */}
              <div className="absolute -left-4 top-24 hidden items-center gap-2 rounded-2xl border-2 border-ink bg-card px-4 py-3 shadow-card sm:flex">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-lime"><Video className="h-4 w-4 text-ink" /></div>
                <div>
                  <div className="text-xs font-bold">HD Video</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Crystal clear</div>
                </div>
              </div>

              {/* Secure chip */}
              <div className="absolute -right-4 bottom-24 hidden items-center gap-2 rounded-2xl border-2 border-ink bg-card px-4 py-3 shadow-card sm:flex">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-lime"><Lock className="h-4 w-4 text-ink" /></div>
                <div>
                  <div className="text-xs font-bold">End-to-end secure</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Private by design</div>
                </div>
              </div>

              {/* Verified */}
              <div className="absolute -right-2 top-2 hidden items-center gap-1.5 rounded-full bg-lime px-3 py-1.5 text-xs font-bold text-ink shadow-card sm:flex">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Vet
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-ink bg-ink py-4 text-cream">
          <div className="mask-fade-x overflow-hidden">
            <div className="flex animate-marquee gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-widest">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  {[
                    "🐾 24/7 Telemedicine",
                    "🩺 Verified Veterinarians",
                    "🌍 11 Languages",
                    "💬 Real-time Video Chat",
                    "🤖 AI Pet Care",
                    "🐕 Premium Marketplace",
                    "❤️ Adoption Matchmaking",
                    "🌾 Farm & Poultry Support",
                  ].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <Section>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <Eyebrow>Popular specialisations</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold md:text-5xl">
              The right specialist, <span className="text-lime-deep">in your language.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From general practice to cardiology, pick a branch and meet board-certified vets ready in minutes.
            </p>
          </div>
          <Link to="/specializations" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all">
            View all specialisations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZATIONS.slice(0, 8).map((s) => (
            <Link
              key={s.slug}
              to="/specializations"
              className="group rounded-3xl border-2 border-ink bg-card p-6 shadow-card transition hover:-translate-y-1 hover:bg-lime"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lime text-ink transition group-hover:bg-ink group-hover:text-lime">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.short}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.name}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* SECOND OPINION + MEMBERSHIP duo */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-card p-10 shadow-card">
            <Eyebrow>Second Opinion</Eyebrow>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">A second pair of expert eyes, from $9.90.</h3>
            <p className="mt-3 text-muted-foreground">
              Submit your medical reports through our secure portal. A panel of specialists will review your case and you choose which vet to consult with.
            </p>
            <ol className="mt-6 space-y-3 text-sm">
              {["Online registration", "Submit reports securely", "Pick from expert responses", "Video consultation"].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime font-bold text-ink">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link to="/second-opinion" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
              Make a request <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-lime p-10 text-ink shadow-card">
            <Eyebrow>Membership</Eyebrow>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">Join now & get your first consultation FREE.</h3>
            <p className="mt-3 text-ink-soft">
              Yearly membership, just <b className="text-2xl font-display">$29</b>. One free consult, 10% off all visits, 24/7 priority access.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["1 free consultation included", "10% discount on future visits", "24/7 priority access", "Cancel anytime, 30-day refund"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-lime">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link to="/membership" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
              Get membership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* MEET THE VETS */}
      <Section>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <Eyebrow>Verified veterinarians</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">Meet a few of our 150+ vets.</h2>
          </div>
          <Link to="/doctors" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all">
            Browse all vets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.slice(0, 4).map((d) => (
            <Link key={d.id} to="/doctors" className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                  <ShieldCheck className="h-3 w-3" /> Verified
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-ink/80 px-2 py-1 text-xs text-cream backdrop-blur">{d.flag}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-lime-deep">
                  <Star className="h-3.5 w-3.5 fill-current" /> {d.rating} <span className="text-muted-foreground">({d.reviews})</span>
                </div>
                <h3 className="mt-1 text-base font-bold leading-snug">{d.name}</h3>
                <p className="text-xs text-muted-foreground">{d.specialty}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
                  <span className="font-semibold">${d.price}/visit</span>
                  <span className="text-muted-foreground">{d.next}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS, phone steps */}
      <Section className="bg-ink text-cream">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">Three steps. Healthier pet.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/70">From "I'm worried" to "all good" in less than 10 minutes.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Choose a vet", d: "Search by language, price, specialisation or availability." },
            { n: "02", t: "Register or log in", d: "Free and easy sign up. No credit card required." },
            { n: "03", t: "Chat or call a verified vet", d: "Talk live, get a digital prescription, follow up anytime." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur">
              <div className="font-display text-6xl font-bold text-lime">{s.n}</div>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-cream/70">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/doctors" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-lime-deep">
            Start consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ADVANTAGES, for patients / vets / hotels */}
      <AdvantagesSection />

      {/* CLUBS */}
      <Section>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <Eyebrow>Find your tribe</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
              Five clubs. One community of <span className="text-lime-deep">pet lovers.</span>
            </h2>
          </div>
          <Link to="/clubs" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all">
            Explore all clubs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((c, i) => (
            <Link
              key={c.name}
              to={c.to}
              className={`group relative overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1 ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}>
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <div className="text-xs font-semibold uppercase tracking-widest text-lime">{c.count}</div>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{c.name}</h3>
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>Everything for every pet</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A complete platform.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From the first vet visit to lifetime care, community, shopping, health, and AI in one place.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-ink">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* MOBILE APP */}
      <Section>
        <div className="grid gap-12 overflow-hidden rounded-[2rem] border-2 border-ink bg-gradient-cream p-10 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <Eyebrow>Mobile app</Eyebrow>
            <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">
              Your pet's vet, in your <span className="bg-lime px-2">pocket.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Accessible, reliable, and personalized veterinary care in the palm of your hand. Book, chat, and consult on the go.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Push-notification reminders for vaccines", "1-tap video calls with your saved vets", "Offline access to medical records", "Multilingual interface (11 languages)"].map((f) => (
                <li key={f} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-ink">✓</span>{f}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-cream hover:bg-ink-soft">
                <Apple className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest text-cream/60">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-cream hover:bg-ink-soft">
                <Smartphone className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest text-cream/60">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <img src={appPhone} alt="The Pets Club mobile app" loading="lazy" width={768} height={1024} className="relative max-h-[520px] w-auto animate-float" />
          </div>
        </div>
      </Section>

      {/* TELEMEDICINE BANNER */}
      <Section>
        <div className="overflow-hidden rounded-[2rem] bg-ink text-cream">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <Eyebrow>Telemedicine</Eyebrow>
              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Talk to a vet in <span className="text-lime">3 minutes.</span>
              </h2>
              <p className="mt-4 max-w-md text-cream/70">
                HD video, multilingual specialists, end-to-end secure. First consultation free with annual membership.
              </p>
              <ul className="mt-6 space-y-3">
                {["150+ verified veterinarians", "11 languages supported", "24/7 availability", "Digital prescriptions"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-ink">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link to="/telemedicine" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink hover:bg-lime-deep">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[320px]">
              <img src={vetImg} alt="Vet with puppy" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ADOPTION + SHOP duo */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <Link to="/adoption" className="group relative overflow-hidden rounded-[2rem] border-2 border-ink shadow-card">
            <img src={adoptionImg} alt="Adoption" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
            <div className="absolute bottom-0 p-8 text-cream">
              <Heart className="h-7 w-7 text-lime" />
              <h3 className="mt-3 text-3xl font-bold">Adopt, don't shop</h3>
              <p className="mt-1 max-w-md text-cream/80">Meet pets matched to your home, lifestyle and love.</p>
            </div>
          </Link>
          <Link to="/marketplace" className="group relative overflow-hidden rounded-[2rem] border-2 border-ink shadow-card">
            <img src={shopImg} alt="Marketplace" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
            <div className="absolute bottom-0 p-8 text-cream">
              <ShoppingBag className="h-7 w-7 text-lime" />
              <h3 className="mt-3 text-3xl font-bold">Sale & Purchase</h3>
              <p className="mt-1 max-w-md text-cream/80">Premium food, accessories, and care from trusted brands.</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="text-center">
          <Eyebrow>Loved by pet parents</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tails that wag for us.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { name: "Aisha M.", pet: "Bengal cat parent", quote: "Booked a vet at midnight when Luna fell sick. Saved her life. Truly 24/7." },
            { name: "Daniel R.", pet: "Dairy farmer", quote: "The farm registration & poultry tracking has streamlined my entire operation." },
            { name: "Priya K.", pet: "Golden Retriever", quote: "AI matchmaking helped me adopt Buddy. Best decision I ever made." },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 text-lime-deep">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.pet}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EVENTS */}
      <Section className="bg-lime">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-1">
            <Eyebrow>Upcoming</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold text-ink md:text-5xl">Events for the whole pack.</h2>
            <Link to="/events" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream hover:bg-ink-soft">
              See all events <CalendarDays className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {[
              { date: "May 12", title: "City Dog Show 2026", place: "Central Park" },
              { date: "Jun 03", title: "Cat Behaviour Webinar", place: "Online" },
              { date: "Jun 20", title: "Adoption Drive", place: "The Pets Club HQ" },
              { date: "Jul 09", title: "Farm Vet Workshop", place: "Greenfield" },
            ].map((e) => (
              <div key={e.title} className="rounded-2xl border-2 border-ink bg-cream p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-ink-soft">{e.date}</div>
                <div className="mt-2 text-lg font-bold text-ink">{e.title}</div>
                <div className="text-sm text-ink-soft">{e.place}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-[2.5rem] border-2 border-ink bg-ink p-10 text-center text-cream lg:p-16">
          <PawPrint className="mx-auto h-10 w-10 text-lime" />
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold md:text-6xl">
            Your pet's whole world. <span className="text-lime">In one club.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Free to join. Members get free first vet consult, exclusive offers, and AI-powered care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/registration/pet" className="rounded-full bg-lime px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-lime-deep">
              Register Your Pet, Free
            </Link>
            <Link to="/contact" className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10">
              Talk to us
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

const advantageContent = {
  patients: {
    title: "Care from the comfort of your home.",
    items: [
      "Direct contact with a vet of your choice",
      "Appointments at will, no waiting room",
      "24/7 doctor availability",
      "Vet conversation in your language",
      "Online prescriptions delivered to your pharmacy",
      "Medical records visible only to your vet",
    ],
  },
  vets: {
    title: "Earn more. Help more pets.",
    items: [
      "Set your own hours and rates",
      "Reach global patients in your language",
      "Built-in EHR, video & payments",
      "Average earnings: $80–$180/hour",
      "Dedicated partnerships team",
      "No platform fees for the first 90 days",
    ],
  },
  partners: {
    title: "B2B for hotels, airlines & corporates.",
    items: [
      "On-call vet support for guests with pets",
      "Travel-ready medical clearance",
      "Branded white-label app option",
      "Volume pricing for staff & customers",
      "Multilingual concierge access",
      "Dedicated account manager",
    ],
  },
} as const;

function AdvantagesSection() {
  const [tab, setTab] = useState<keyof typeof advantageContent>("patients");
  const tabs: { key: keyof typeof advantageContent; label: string }[] = [
    { key: "patients", label: "For Pet Parents" },
    { key: "vets", label: "For Vets" },
    { key: "partners", label: "For Hotels, Airlines & Partners" },
  ];
  const c = advantageContent[tab];
  return (
    <Section className="bg-surface">
      <div className="text-center">
        <Eyebrow>The advantages of online consultations</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold md:text-5xl">
          Better care for everyone, pets, vets and partners.
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              tab === t.key ? "bg-ink text-cream" : "border-2 border-ink bg-card text-ink hover:bg-lime/30"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <h3 className="text-balance text-3xl font-bold md:text-4xl">{c.title}</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/registration/pet" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream hover:bg-ink-soft">
              Register as a Pet Parent
            </Link>
            <Link to="/vet-application" className="rounded-full border-2 border-ink bg-card px-5 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-cream">
              Register as a Vet
            </Link>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.items.map((it) => (
            <li key={it} className="flex items-start gap-3 rounded-2xl border-2 border-ink bg-card p-4">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">
                <Globe2 className="h-3 w-3" />
              </span>
              <span className="text-sm">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
