import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { MapPin, Briefcase, ArrowRight, Heart, Globe2, Coffee, GraduationCap } from "lucide-react";

const jobs = [
  { title: "Senior Veterinarian, Telemedicine", team: "Veterinary", loc: "Remote · Global", type: "Full-time" },
  { title: "ML Engineer, Recommendations", team: "Engineering", loc: "Remote · EU/US", type: "Full-time" },
  { title: "Community Manager, Cat Club", team: "Community", loc: "Remote", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", loc: "Lisbon / Remote", type: "Full-time" },
  { title: "Farm Operations Lead", team: "Farm", loc: "Pennsylvania, US", type: "Full-time" },
  { title: "Customer Care Specialist (Spanish)", team: "Care", loc: "Remote · LatAm", type: "Full-time" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers, The Pets Club" },
      { name: "description", content: "Join a remote-first team helping millions of pets live better lives. Open roles in veterinary, engineering, design and operations." },
      { property: "og:title", content: "Careers, The Pets Club" },
      { property: "og:description", content: "Help us build the future of pet care." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Help us care for millions of pets."
        subtitle="Remote-first. Animal-obsessed. Hiring across veterinary, engineering, design and ops."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe2, t: "Remote-first", d: "Work from anywhere. We hire across 25+ countries." },
            { icon: Heart, t: "Pet-friendly... obviously", d: "Pet-care stipend & paid pawternity leave." },
            { icon: GraduationCap, t: "Learn always", d: "$1,500/yr learning budget + conference travel." },
            { icon: Coffee, t: "Real time off", d: "30 days PTO + week-long company shutdowns." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border-2 border-ink bg-card p-6 shadow-card">
              <b.icon className="h-6 w-6 text-lime-deep" />
              <h3 className="mt-3 text-lg font-bold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="text-center">
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">{jobs.length} positions open.</h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-3xl border-2 border-ink bg-card">
          {jobs.map((j) => (
            <div key={j.title} className="grid items-center gap-4 px-6 py-5 transition hover:bg-lime/10 sm:grid-cols-[1fr_auto] sm:px-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-lime px-2.5 py-0.5 font-bold uppercase tracking-widest text-ink">{j.team}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="h-3 w-3" />{j.loc}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><Briefcase className="h-3 w-3" />{j.type}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">{j.title}</h3>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream hover:bg-ink-soft">
                Apply <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink p-10 text-cream lg:p-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Don't see your role?</Eyebrow>
              <h2 className="mt-4 text-4xl font-bold">We're always meeting great humans.</h2>
              <p className="mt-3 text-cream/70">Send us a note. If you can make pet lives better, we want to talk.</p>
            </div>
            <div className="lg:text-right">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink hover:bg-lime-deep">
                Send open application <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
