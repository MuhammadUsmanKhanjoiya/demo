export type PetEvent = {
  slug: string;
  date: string;
  title: string;
  place: string;
  desc: string;
  long: string;
  spotsLeft: number;
};

export const EVENTS: PetEvent[] = [
  { slug: "city-dog-show-2026", date: "May 12, 2026", title: "City Dog Show 2026", place: "Central Park, NY", desc: "Largest community dog show with categories for every breed.", long: "Join 5,000 dogs and their humans for a full day of competitions, demos, and adoption booths. Free entry for spectators, $25 per dog to compete.", spotsLeft: 142 },
  { slug: "cat-behaviour-webinar", date: "Jun 03, 2026", title: "Cat Behaviour Webinar", place: "Online · Free", desc: "Live session with Dr. Emma Brooks on understanding feline body language.", long: "A 60-minute live webinar followed by 30 minutes of Q&A. Recording sent to all registrants.", spotsLeft: 487 },
  { slug: "adoption-drive", date: "Jun 20, 2026", title: "Adoption Drive", place: "The Pets Club HQ", desc: "Meet 30+ pets ready for forever homes. Snacks & meet-greets.", long: "Every adoption fee is waived. Bring photo ID and proof of address. Pre-approved adopters get priority.", spotsLeft: 89 },
  { slug: "farm-vet-workshop", date: "Jul 09, 2026", title: "Farm Vet Workshop", place: "Greenfield, PA", desc: "Hands-on workshop for cattle and dairy farmers.", long: "8-hour workshop covering routine herd health, lameness, and mastitis prevention. Includes lunch.", spotsLeft: 34 },
  { slug: "birds-and-falconry-day", date: "Jul 22, 2026", title: "Birds & Falconry Day", place: "Riverside Estate", desc: "Demos, talks, and hands-on falconry experience.", long: "Live demos every hour. Bring sun protection. Children welcome with adult.", spotsLeft: 67 },
  { slug: "poultry-hackathon", date: "Aug 14, 2026", title: "Poultry Hackathon", place: "Online", desc: "Innovate flock-management tools with experts.", long: "48-hour virtual hackathon with $5,000 prize pool for the best digital tool for backyard poultry keepers.", spotsLeft: 122 },
];
