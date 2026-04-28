import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { Section, Eyebrow } from "@/components/site/Section";
import { ClubStats, MeetupList, ForumTopics } from "@/components/site/ClubExtras";
import img from "@/assets/club-poultry.jpg";

export const Route = createFileRoute("/clubs/poultry")({
  head: () => ({
    meta: [
      { title: "Poultry Club, The Pets Club" },
      { name: "description", content: "Chickens, ducks, geese & happy hens. Tools and community for poultry keepers." },
      { property: "og:title", content: "Poultry Club, The Pets Club" },
      { property: "og:description", content: "Flock tools, biosecurity alerts and a hatchery network." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Poultry Club · 1,830 farms"
      title="Happy hens. Healthier flocks."
      subtitle="From backyard coops to commercial operations, manage, learn, and connect."
      heroImage={img}
      features={[
        { title: "Flock Tracker", desc: "Egg counts, vaccination schedules, and weight tracking." },
        { title: "Coop Designs", desc: "Vetted plans and DIY guides from expert keepers." },
        { title: "Disease Prevention", desc: "Real-time outbreak alerts & biosecurity guides." },
        { title: "Marketplace", desc: "Chicks, layers, feed and equipment from trusted sellers." },
        { title: "Hatchery Network", desc: "Order day-old chicks from certified hatcheries." },
        { title: "Expert Webinars", desc: "Monthly sessions with poultry science specialists." },
      ]}
      faqs={[
        { q: "Backyard or commercial only?", a: "Both, keepers from 5 birds to 500,000 are welcome." },
        { q: "How current are outbreak alerts?", a: "Alerts are pulled hourly from regional veterinary boards and confirmed cases on-platform." },
        { q: "Can I sell my eggs?", a: "Verified producers can list eggs and meat in the buyer network." },
      ]}
      ctaTitle="Build a healthier flock today."
    >
      <ClubStats items={[
        { n: "1,830", l: "Registered farms" },
        { n: "32", l: "Hatchery partners" },
        { n: "Real-time", l: "Outbreak alerts" },
      ]} />

      <Section>
        <div className="rounded-[2rem] bg-lime p-10 text-ink lg:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Commercial farm?</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">Register and unlock the full poultry suite.</h3>
              <p className="mt-3 text-ink-soft">Outbreak alerts, certified hatcheries, bulk feed pricing and a buyer network, all in one place.</p>
            </div>
            <Link to="/registration/poultry" className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream hover:bg-ink-soft lg:justify-self-end">
              Register your poultry farm
            </Link>
          </div>
        </div>
      </Section>

      <MeetupList items={[
        { city: "Bali, ID", date: "May 3", title: "Backyard Coop Build", spots: 22 },
        { city: "Lagos, NG", date: "May 9", title: "Layer Farm Tour", spots: 40 },
        { city: "Texas, US", date: "May 18", title: "Biosecurity Workshop", spots: 55 },
      ]} />

      <ForumTopics topics={[
        { title: "Mareks vaccination, best practices", replies: 39, lastBy: "poultry_doc" },
        { title: "Feed conversion ratios this season", replies: 28, lastBy: "lagos_layer" },
        { title: "Best ventilation for tropical climates", replies: 24, lastBy: "bali_coop" },
        { title: "Day-old chicks: which hatchery?", replies: 47, lastBy: "ranch_tx" },
      ]} />
    </ContentPage>
  ),
});
