import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import catImg from "@/assets/club-cat.jpg";
import dogImg from "@/assets/club-dog.jpg";
import birdsImg from "@/assets/club-birds-horse.jpg";
import farmImg from "@/assets/club-farm.jpg";
import poultryImg from "@/assets/club-poultry.jpg";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Pet Clubs, The Pets Club" },
      { name: "description", content: "Join clubs for cats, dogs, birds, horses, farm animals and poultry. Connect with thousands of pet lovers." },
    ],
  }),
  component: ClubsRoute,
});

const clubs = [
  { name: "Cat Club", to: "/clubs/cats", img: catImg, blurb: "Whisker wisdom, kitten care & fluffy friends.", count: "12,400" },
  { name: "Dog Club", to: "/clubs/dogs", img: dogImg, blurb: "Training, walks, breeds & wagging tails.", count: "28,100" },
  { name: "Birds & Horse Club", to: "/clubs/birds-horse", img: birdsImg, blurb: "Avian aficionados meet equestrian elegance.", count: "5,420" },
  { name: "Farm Animals Club", to: "/clubs/farm", img: farmImg, blurb: "Cattle, goats & sheep, for hobbyists & pros.", count: "3,150" },
  { name: "Poultry Club", to: "/clubs/poultry", img: poultryImg, blurb: "Chickens, ducks, geese & happy hens.", count: "1,830" },
];

function ClubsRoute() {
  const { pathname } = useLocation();
  return pathname === "/clubs" ? <ClubsHub /> : <Outlet />;
}

function ClubsHub() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Clubs"
        title="Find your tribe of pet lovers."
        subtitle="Five communities. Endless friendships. Pick the club that suits your pet, and your passion."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((c) => (
            <Link key={c.name} to={c.to} className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-lime-deep">{c.count} members</div>
                <h3 className="mt-2 text-2xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Visit club <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
