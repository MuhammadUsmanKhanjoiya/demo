import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { Section, Eyebrow } from "@/components/site/Section";
import { BreedPicker, MeetupList, ForumTopics } from "@/components/site/ClubExtras";
import img from "@/assets/club-birds-horse.jpg";

export const Route = createFileRoute("/clubs/birds-horse")({
  head: () => ({
    meta: [
      { title: "Birds & Horse Club, The Pets Club" },
      { name: "description", content: "Avian aficionados meet equestrian enthusiasts. Care, training, and community." },
      { property: "og:title", content: "Birds & Horse Club, The Pets Club" },
      { property: "og:description", content: "Specialist care for parrots, raptors and equestrians worldwide." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Birds & Horse · 5,420 members"
      title="From feathered friends to galloping companions."
      subtitle="Specialist care, training, and global community for bird keepers and equestrians."
      heroImage={img}
      features={[
        { title: "Avian Vet Network", desc: "Specialist vets for parrots, finches, raptors and more." },
        { title: "Equestrian Care", desc: "Stable management, nutrition, and farrier services." },
        { title: "Training Programs", desc: "Falconry basics to dressage advanced techniques." },
        { title: "Tack & Cage Marketplace", desc: "Quality gear from trusted suppliers." },
        { title: "Global Forum", desc: "Connect with 5,000+ specialist hobbyists worldwide." },
        { title: "Show & Competition", desc: "Equestrian events and bird shows calendar." },
      ]}
      faqs={[
        { q: "Do you support exotic birds?", a: "Yes, our avian vet network covers parrots, finches, raptors, and most exotics." },
        { q: "Is there equestrian veterinary support?", a: "Mobile equine vets are available in 30+ countries via the Booking page." },
        { q: "Can I sell tack here?", a: "Verified sellers can list tack, saddles, and cages in the Marketplace." },
      ]}
      ctaTitle="Join the most niche pet club."
    >
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { t: "Birds", desc: "Parrots, finches, canaries, raptors, pigeons & exotics.", items: ["Parrot", "Macaw", "Cockatoo", "Finch", "Falcon", "Pigeon", "Canary", "Lovebird"] },
            { t: "Horses", desc: "Riding, dressage, working & companion horses.", items: ["Arabian", "Quarter Horse", "Thoroughbred", "Warmblood", "Pony", "Draft", "Andalusian", "Mustang"] },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border-2 border-ink bg-card p-8 shadow-card">
              <Eyebrow>{c.t}</Eyebrow>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span key={i} className="rounded-full bg-lime/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <BreedPicker
        title="Pick your specialty."
        breeds={["African Grey", "Macaw", "Cockatoo", "Conure", "Budgie", "Falcon", "Arabian Horse", "Quarter Horse", "Thoroughbred", "Warmblood", "Andalusian", "Mustang"]}
      />

      <MeetupList items={[
        { city: "Dublin, IE", date: "May 5", title: "Sunday Hack & Brunch", spots: 16 },
        { city: "Dubai, AE", date: "May 8", title: "Falconry Demonstration", spots: 30 },
        { city: "Lexington, US", date: "May 14", title: "Equestrian Open Day", spots: 42 },
      ]} />

      <ForumTopics topics={[
        { title: "African Grey vocabulary tips", replies: 29, lastBy: "raven_keeper" },
        { title: "Hoof care during winter", replies: 36, lastBy: "stable_emma" },
        { title: "Introducing a second parrot", replies: 21, lastBy: "feathered_jay" },
        { title: "Best saddle pads for sensitive backs", replies: 18, lastBy: "diego_r" },
      ]} />
    </ContentPage>
  ),
});
