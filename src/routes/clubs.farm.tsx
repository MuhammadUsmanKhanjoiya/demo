import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { Section, Eyebrow } from "@/components/site/Section";
import { ClubStats, MeetupList, ForumTopics } from "@/components/site/ClubExtras";
import { ArrowRight, Beef, Milk } from "lucide-react";
import img from "@/assets/club-farm.jpg";

export const Route = createFileRoute("/clubs/farm")({
  head: () => ({
    meta: [
      { title: "Farm Animals Club, The Pets Club" },
      { name: "description", content: "For dairy, goat, sheep and cattle keepers. Tools, vets, and community for every farmer." },
      { property: "og:title", content: "Farm Animals Club, The Pets Club" },
      { property: "og:description", content: "Modern herd management, mobile vets and bulk pricing, for hobbyists and pros." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Farm Animals Club · 3,150 farms"
      title="Where farmers, hobbyists and cattle thrive together."
      subtitle="Cattle, goats, sheep and beyond, get the tools, knowledge, and vet network to grow your farm."
      heroImage={img}
      features={[
        { title: "Herd Management", desc: "Track health, breeding cycles, and yield in one app." },
        { title: "Large-Animal Vets", desc: "Mobile vets and emergency call-outs near you." },
        { title: "Feed Marketplace", desc: "Bulk feed, supplements, and equipment at member prices." },
        { title: "Breeding Records", desc: "Genealogy tracking and breeding optimization." },
        { title: "Compliance Help", desc: "Local livestock regulations & paperwork support." },
        { title: "Farmer Forum", desc: "Real-world advice from 3,000+ active farmers." },
      ]}
      faqs={[
        { q: "Do I need to be commercial?", a: "No, hobbyist keepers and commercial farms are equally welcome." },
        { q: "How fast can a vet reach me?", a: "Median dispatch in covered regions is 2.4 hours for non-emergencies, 45 min for emergencies." },
        { q: "Can I order feed in bulk?", a: "Yes, the marketplace offers member-only pricing once your farm is registered." },
      ]}
      ctaTitle="Modernize your farm with The Pets Club."
    >
      <ClubStats items={[
        { n: "3,150", l: "Registered farms" },
        { n: "62", l: "Countries" },
        { n: "24/7", l: "Emergency vet line" },
      ]} />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { i: Milk, t: "Dairy operations", d: "Yield tracking, vaccination logs, breeding records, and a marketplace for feed at cost.", to: "/registration/dairy", cta: "Register your dairy farm" },
            { i: Beef, t: "Cattle, goat & sheep", d: "Whole-herd management, mobile vets, breeding planner and a buyer network.", to: "/registration/dairy", cta: "Register your livestock" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-ink p-10 text-cream shadow-card">
              <c.i className="h-7 w-7 text-lime" />
              <h3 className="mt-4 text-3xl font-bold">{c.t}</h3>
              <p className="mt-3 text-cream/70">{c.d}</p>
              <Link to={c.to} className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime-deep">
                {c.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <MeetupList items={[
        { city: "Wisconsin, US", date: "May 6", title: "Spring Dairy Field Day", spots: 60 },
        { city: "Pune, IN", date: "May 10", title: "Buffalo Breeding Workshop", spots: 35 },
        { city: "Auckland, NZ", date: "May 17", title: "Goat & Sheep Forum", spots: 48 },
      ]} />

      <Eyebrow>
        <span className="sr-only">Forum</span>
      </Eyebrow>

      <ForumTopics topics={[
        { title: "Mastitis prevention in summer", replies: 41, lastBy: "vet_singh" },
        { title: "Cost-effective silage strategies", replies: 33, lastBy: "farmer_mike" },
        { title: "Goat hoof trimming, best tools", replies: 26, lastBy: "claire_g" },
        { title: "AI vs natural breeding outcomes", replies: 52, lastBy: "rancher_jo" },
      ]} />
    </ContentPage>
  ),
});
