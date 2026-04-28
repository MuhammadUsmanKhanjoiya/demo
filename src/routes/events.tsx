import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { EVENTS } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, The Pets Club" },
      { name: "description", content: "Dog shows, adoption drives, vet workshops and meetups near you." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Events" title="See you at the next one." subtitle="Dog shows, adoption drives, vet workshops and community meetups." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {EVENTS.map((e) => (
            <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="group block rounded-3xl border-2 border-ink bg-card p-7 shadow-card transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-lime-deep">
                <CalendarDays className="h-4 w-4" /> {e.date}
              </div>
              <h3 className="mt-3 text-2xl font-bold">{e.title}</h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {e.place}
              </div>
              <p className="mt-3 text-muted-foreground">{e.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream group-hover:bg-ink-soft">
                Register <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  ),
});
