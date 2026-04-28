import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { BreedPicker, ClubStats, MeetupList, TopMembers, ForumTopics } from "@/components/site/ClubExtras";
import img from "@/assets/club-cat.jpg";

export const Route = createFileRoute("/clubs/cats")({
  head: () => ({
    meta: [
      { title: "Cat Club, The Pets Club" },
      { name: "description", content: "Join 12,000+ cat lovers. Share kitten care, breed talk, and feline health tips." },
      { property: "og:title", content: "Cat Club, The Pets Club" },
      { property: "og:description", content: "Whisker wisdom, breed library, and a community of 12k+ feline parents." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Cat Club · 12,400 members"
      title="Whisker wisdom for every kitty parent."
      subtitle="From Bengal to British Shorthair, share, learn, and connect with thousands of cat lovers worldwide."
      heroImage={img}
      features={[
        { title: "Breed Library", desc: "Profiles, care guides & temperament for 60+ cat breeds." },
        { title: "Kitten Care 101", desc: "Weekly milestones, feeding charts and vaccination plans." },
        { title: "Behaviour Forum", desc: "Ask certified feline behaviourists about anything." },
        { title: "Indoor Enrichment", desc: "DIY ideas, toy reviews & vet-approved treats." },
        { title: "Local Meetups", desc: "Cat cafés, adoption days, and community gatherings." },
        { title: "Health Tracker", desc: "Vaccinations, weight, vet visits, all in one place." },
      ]}
      faqs={[
        { q: "Is the Cat Club free to join?", a: "Yes, basic membership is free. Premium adds vet consults and exclusive content." },
        { q: "Can I post photos of my cat?", a: "Absolutely, every member gets a personalized cat profile with a photo gallery." },
        { q: "Do you cover all breeds?", a: "We cover 60+ breeds and welcome mixed-breed cats too." },
        { q: "Are vet consults available?", a: "Yes, book a feline vet via the Booking page or upgrade to Premium for unlimited chats." },
      ]}
      ctaTitle="Join the Cat Club today."
    >
      <ClubStats items={[
        { n: "60+", l: "Breeds covered" },
        { n: "12,400", l: "Active members" },
        { n: "300+", l: "Weekly posts" },
      ]} />

      <BreedPicker
        title="Explore by breed."
        breeds={["Persian", "Bengal", "British Shorthair", "Maine Coon", "Ragdoll", "Sphynx", "Siamese", "Scottish Fold", "Russian Blue", "Abyssinian", "Norwegian Forest", "Birman", "Burmese", "Mixed"]}
      />

      <MeetupList items={[
        { city: "Tokyo, JP", date: "May 2", title: "Cat Café Mixer", spots: 14 },
        { city: "Paris, FR", date: "May 7", title: "Adoption Sunday", spots: 28 },
        { city: "San Francisco, US", date: "May 11", title: "Senior Cat Care Workshop", spots: 19 },
      ]} />

      <TopMembers members={[
        { name: "Yuki M.", handle: "yukimochi", pet: "Ragdoll", posts: 134 },
        { name: "Elena V.", handle: "elenav", pet: "Bengal", posts: 102 },
        { name: "Tom B.", handle: "tomb", pet: "Maine Coon", posts: 88 },
        { name: "Priya S.", handle: "priyas", pet: "Persian", posts: 71 },
      ]} />

      <ForumTopics topics={[
        { title: "Litter box habits suddenly changed", replies: 38, lastBy: "vet_amelia" },
        { title: "Best wet food brands in 2026?", replies: 51, lastBy: "elenav" },
        { title: "Indoor enrichment for solo cats", replies: 27, lastBy: "yukimochi" },
        { title: "Introducing a kitten to a senior cat", replies: 44, lastBy: "tomb" },
      ]} />
    </ContentPage>
  ),
});
