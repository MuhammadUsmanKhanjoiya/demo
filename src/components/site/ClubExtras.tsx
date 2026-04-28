import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { Calendar, MapPin, Users, Trophy, MessageSquareHeart, ArrowRight, Search } from "lucide-react";

export type Member = { name: string; handle: string; pet: string; posts: number; avatar?: string };
export type Meetup = { city: string; date: string; title: string; spots: number };
export type Topic = { title: string; replies: number; lastBy: string };

export function ClubStats({ items }: { items: { n: string; l: string }[] }) {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((s) => (
          <div key={s.l} className="rounded-3xl border-2 border-ink bg-card p-8 text-center shadow-card">
            <div className="font-display text-5xl font-bold text-lime-deep">{s.n}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function BreedPicker({ title, breeds, registerTo = "/registration/pet" }: { title: string; breeds: string[]; registerTo?: string }) {
  const [q, setQ] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const filtered = breeds.filter((b) => b.toLowerCase().includes(q.toLowerCase()));
  return (
    <Section className="bg-surface">
      <div className="text-center">
        <Eyebrow>Breed library</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Search, pick your breed and we'll tailor your feed, products and tips.</p>
      </div>
      <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2.5 shadow-card">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search breeds…"
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No breeds match, try another keyword.</p>}
        {filtered.map((b) => {
          const active = picked === b;
          return (
            <button
              key={b}
              type="button"
              onClick={() => setPicked(b)}
              className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition ${
                active ? "border-ink bg-ink text-cream" : "border-ink bg-card text-ink hover:bg-lime"
              }`}
            >
              {b}
            </button>
          );
        })}
      </div>
      {picked && (
        <div className="mx-auto mt-8 flex max-w-xl items-center justify-between gap-4 rounded-3xl bg-lime p-5 shadow-card">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-soft">Selected</div>
            <div className="font-display text-2xl font-bold">{picked}</div>
          </div>
          <Link to={registerTo} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream hover:bg-ink-soft">
            Continue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  );
}

export function MeetupList({ items }: { items: Meetup[] }) {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Upcoming meetups</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold">Real-world fun.</h2>
        </div>
        <Link to="/events" className="text-sm font-semibold text-ink underline underline-offset-4">Browse all events →</Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((m) => (
          <div key={m.title} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card transition hover:-translate-y-1">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-lime-deep">
              <Calendar className="h-4 w-4" /> {m.date}
            </div>
            <h3 className="mt-3 text-xl font-bold">{m.title}</h3>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {m.city}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-lime/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">{m.spots} spots</span>
              <Link to="/events" className="text-sm font-semibold text-ink underline underline-offset-4">RSVP</Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function TopMembers({ members }: { members: Member[] }) {
  return (
    <Section className="bg-surface">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Top members</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold">This month's most loved.</h2>
        </div>
        <Trophy className="h-7 w-7 text-lime-deep" />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => (
          <div key={m.handle} className="rounded-3xl border-2 border-ink bg-card p-5 shadow-card">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-lime font-bold text-ink">{m.name[0]}</div>
              <div>
                <div className="font-bold">{m.name}</div>
                <div className="text-xs text-muted-foreground">@{m.handle}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="rounded-full bg-surface px-2.5 py-1 font-semibold">🐾 {m.pet}</span>
              <span className="font-bold text-lime-deep">#{i + 1}</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageSquareHeart className="h-3.5 w-3.5" /> {m.posts} helpful posts
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ForumTopics({ topics }: { topics: Topic[] }) {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Trending discussions</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold">Join the conversation.</h2>
        </div>
        <Link to="/contact" className="text-sm font-semibold text-ink underline underline-offset-4">Open the forum →</Link>
      </div>
      <div className="mt-8 divide-y divide-border rounded-3xl border-2 border-ink bg-card shadow-card">
        {topics.map((t) => (
          <div key={t.title} className="flex items-center justify-between gap-4 p-5 transition hover:bg-surface">
            <div>
              <div className="font-semibold">{t.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">Last reply by @{t.lastBy}</div>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-lime-deep">
              <Users className="h-4 w-4" /> {t.replies}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
