import dogImg from "@/assets/club-dog.jpg";
import catImg from "@/assets/club-cat.jpg";
import farmImg from "@/assets/club-farm.jpg";
import poultryImg from "@/assets/club-poultry.jpg";
import birdsImg from "@/assets/club-birds-horse.jpg";
import vetImg from "@/assets/vet-telemedicine.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  img: string;
  excerpt: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "10-signs-your-cat-is-happier-than-ever",
    title: "10 signs your cat is happier than ever",
    category: "Cats",
    date: "Apr 18, 2026",
    readTime: "6 min",
    author: "Dr. Amara Okafor",
    img: catImg,
    excerpt: "Subtle behaviours reveal exactly how content your feline friend really is. Here's how to read them.",
    body: [
      "Cats are notoriously hard to read, but their happiness shows up in tiny, repeatable behaviours. From slow blinks to chirpy greetings at the door, your cat is constantly telling you how they feel.",
      "1. Slow blinks. The feline equivalent of a kiss, a relaxed cat will half-close their eyes when looking at you.",
      "2. Belly exposure. A cat that lies on their back near you trusts you completely.",
      "3. Kneading. That biscuit-making motion is a leftover kittenhood comfort behaviour.",
      "4. Tail held high with a slight curl at the tip, a confident, content cat.",
      "5. Chirps and trills when greeting you. This is a vocal hello reserved for trusted humans.",
      "6. Grooming you. They consider you part of the family.",
      "7. Bringing 'gifts'. Even fake mice count.",
      "8. Sleeping in exposed spots, couch arm, kitchen counter, your laptop. They feel safe.",
      "9. Purring while being held.",
      "10. Healthy appetite, regular litter habits, glossy coat, all clinical happiness markers.",
      "If most of these are present, you're doing a wonderful job. If any have changed suddenly, book a video consult with one of our verified vets, small behavioural shifts are often the first sign of a health issue.",
    ],
  },
  {
    slug: "puppy-training-the-first-30-days",
    title: "Puppy training: the first 30 days",
    category: "Dogs",
    date: "Apr 12, 2026",
    readTime: "8 min",
    author: "Dr. Carlos Mendes",
    img: dogImg,
    excerpt: "A week-by-week roadmap to set your new puppy up for a calm, confident life.",
    body: [
      "The first month sets the tone for your puppy's entire life. Focus on socialisation, gentle structure, and bonding, not commands.",
      "Week 1: Settling in. Keep the world small. One room, one feeding spot, one set of humans.",
      "Week 2: Name & potty rhythm. Use food rewards, never punishment.",
      "Week 3: Crate, leash, gentle handling. Touch every paw daily.",
      "Week 4: Begin meeting calm, vaccinated dogs. Start short outings.",
      "Across all four weeks: 14 hours of sleep a day is normal. Overtired puppies bite. Calm, consistent humans raise calm, confident dogs.",
    ],
  },
  {
    slug: "how-ai-is-changing-veterinary-care",
    title: "How AI is changing veterinary care",
    category: "Tech",
    date: "Apr 09, 2026",
    readTime: "5 min",
    author: "The Pets Club Team",
    img: vetImg,
    excerpt: "From triage chatbots to image diagnostics, AI is becoming a vet's most reliable assistant.",
    body: [
      "AI isn't replacing vets, it's giving every vet a team of invisible specialists. Here's how the technology is showing up in real clinics today.",
      "Triage chatbots filter symptoms in seconds, making sure urgent cases get seen first.",
      "Image-based diagnostics now spot skin conditions, ear infections and dental disease from a phone photo.",
      "Predictive nutrition models recommend diets adjusted to breed, age, and activity.",
      "At The Pets Club, every AI tool is reviewed by a licensed vet before reaching pet parents, a human always signs off on the recommendation.",
    ],
  },
  {
    slug: "building-a-backyard-chicken-coop",
    title: "Building a backyard chicken coop",
    category: "Poultry",
    date: "Apr 02, 2026",
    readTime: "10 min",
    author: "Dr. Hassan Al-Farsi",
    img: poultryImg,
    excerpt: "Predator-proof, weatherproof, hen-approved. The essentials of a coop that actually lasts.",
    body: [
      "A great coop balances three things: ventilation, predator-proofing, and ease of cleaning.",
      "Plan for 4 sq ft per hen inside the coop, 10 sq ft in the run.",
      "Hardware cloth, never chicken wire, for predator-proofing.",
      "Sloped roof, deep litter, and a removable poop tray will save you hours each week.",
      "Don't forget grit, dust-bath area, and a roost bar at least 2 ft off the ground.",
    ],
  },
  {
    slug: "dairy-nutrition-the-right-balance",
    title: "Dairy nutrition: the right balance",
    category: "Farm",
    date: "Mar 28, 2026",
    readTime: "7 min",
    author: "Dr. Anika Sharma",
    img: farmImg,
    excerpt: "Higher yields and healthier herds start with what's in the trough.",
    body: [
      "Dairy nutrition is part science, part art. Get the basics right and your herd's milk yield, fertility and longevity all improve.",
      "Forage first: high-quality silage and hay are non-negotiable.",
      "Balance protein and energy to lactation stage.",
      "Mineral and vitamin supplementation matters most around calving.",
      "Talk to one of our farm-animal vets to design a feed plan tailored to your herd size and region.",
    ],
  },
  {
    slug: "caring-for-parrots-in-the-city",
    title: "Caring for parrots in the city",
    category: "Birds",
    date: "Mar 22, 2026",
    readTime: "6 min",
    author: "Dr. Léa Dubois",
    img: birdsImg,
    excerpt: "Apartment-friendly tips for keeping intelligent, vocal birds happy and healthy.",
    body: [
      "Parrots are social geniuses with the emotional needs of a toddler.",
      "Out-of-cage time is non-negotiable, at least 3 hours daily.",
      "A varied diet of pellets, vegetables, and limited fruit keeps them sharp.",
      "Foraging toys prevent destructive boredom.",
      "Annual avian-vet check-ups catch most respiratory and nutritional issues early.",
    ],
  },
];

export const BLOG_CATEGORIES = ["All", "Cats", "Dogs", "Birds", "Farm", "Poultry", "Tech"];
