import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { BreedPicker, ClubStats, MeetupList, TopMembers, ForumTopics } from "@/components/site/ClubExtras";
import img from "@/assets/club-dog.jpg";

export const Route = createFileRoute("/clubs/dogs")({
  head: () => ({
    meta: [
      { title: "Dog Club, The Pets Club" },
      { name: "description", content: "28,000+ dog parents. Training, walks, breed guides, vet help and play dates." },
      { property: "og:title", content: "Dog Club, The Pets Club" },
      { property: "og:description", content: "Training, breed atlas and walk buddies, for the world's biggest pack." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Dog Club · 28,100 members"
      title="A pack for every paw."
      subtitle="Training tips, breed guides, dog parks near you, and a community that gets it."
      heroImage={img}
      features={[
        { title: "Training Library", desc: "Step-by-step videos from certified dog trainers." },
        { title: "Breed Atlas", desc: "200+ breeds with care, exercise, and health profiles." },
        { title: "Walk Buddies", desc: "Find walking partners and dog-friendly trails near you." },
        { title: "Dog Show Calendar", desc: "Upcoming shows, agility events and competitions." },
        { title: "Nutrition Guide", desc: "Personalized food plans by age, breed and activity." },
        { title: "Vet Hotline", desc: "Quick access to telemedicine for any concern, day or night." },
      ]}
      faqs={[
        { q: "Are puppies welcome?", a: "Of course, we have a dedicated puppy onboarding program with weekly milestones." },
        { q: "Can I list my dog for breeding?", a: "Verified breeders can join our breeder marketplace after a credentials check." },
        { q: "Do you organize meetups?", a: "Yes, weekly meetups in 40+ cities worldwide. Browse the events calendar to RSVP." },
        { q: "Is the Dog Club free?", a: "Basic membership is free forever. Premium adds vet consults and exclusive content." },
      ]}
      ctaTitle="Bring your best friend along."
    >
      <ClubStats items={[
        { n: "200+", l: "Breeds covered" },
        { n: "28,100", l: "Pack members" },
        { n: "40+", l: "Meetup cities" },
      ]} />

      <BreedPicker
        title="Find your breed family."
        breeds={["Golden Retriever", "Labrador", "German Shepherd", "Bulldog", "Poodle", "Husky", "Beagle", "Border Collie", "Dachshund", "Shih Tzu", "Rottweiler", "Boxer", "Pomeranian", "Mixed / Rescue"]}
      />

      <MeetupList items={[
        { city: "London, UK", date: "May 4", title: "Hyde Park Sunday Run", spots: 23 },
        { city: "Brooklyn, NY", date: "May 9", title: "Puppy Social Hour", spots: 12 },
        { city: "Berlin, DE", date: "May 12", title: "Tiergarten Trail Walk", spots: 18 },
      ]} />

      <TopMembers members={[
        { name: "Sarah K.", handle: "sarah_k", pet: "Labrador", posts: 142 },
        { name: "Marcus T.", handle: "mtrainer", pet: "Border Collie", posts: 118 },
        { name: "Aisha N.", handle: "aishanoor", pet: "Husky", posts: 96 },
        { name: "Diego R.", handle: "diegorr", pet: "Beagle", posts: 84 },
      ]} />

      <ForumTopics topics={[
        { title: "Best food for senior labradors?", replies: 47, lastBy: "vet_emma" },
        { title: "Reactive dog at the park, tips?", replies: 32, lastBy: "marcus_t" },
        { title: "Crate training a 10-week puppy", replies: 56, lastBy: "sarah_k" },
        { title: "Recommend a sturdy harness for huskies", replies: 21, lastBy: "aishanoor" },
      ]} />
    </ContentPage>
  ),
});
