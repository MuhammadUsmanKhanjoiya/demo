import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { Section, Eyebrow } from "@/components/site/Section";
import { Sparkles, ArrowRight } from "lucide-react";
import img from "@/assets/shop.jpg";

export const Route = createFileRoute("/ml/recommendations")({
  head: () => ({
    meta: [
      { title: "Smart Recommendations, The Pets Club" },
      { name: "description", content: "AI-powered personalized food, accessories and vet recommendations for your pet." },
      { property: "og:title", content: "AI Recommendations, The Pets Club" },
      { property: "og:description", content: "Personalized food, gear and vet picks for every pet." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="AI Recommendation Engine"
      title="Personalized care, powered by AI."
      subtitle="Our recommendation engine learns your pet's breed, age, lifestyle and health to suggest the perfect food, toys, and care."
      heroImage={img}
      features={[
        { title: "Food Matchmaker", desc: "The right diet by breed, life stage, allergies and goals." },
        { title: "Accessory Picks", desc: "Toys, beds, and gear matched to behaviour patterns." },
        { title: "Vet Suggestions", desc: "Specialist matching by symptom and location." },
        { title: "Care Calendar", desc: "Never miss vaccines, vet visits or grooming." },
        { title: "Spend Tracker", desc: "Smart insights into your pet care budget." },
        { title: "Adaptive Learning", desc: "Improves with every purchase and visit." },
      ]}
      ctaTitle="Let AI plan your pet's care."
    >
      <Section>
        <div className="rounded-[2rem] border-2 border-ink bg-card p-10 shadow-card lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow><Sparkles className="h-3 w-3" /> Sample recommendation</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">For Buddy, 2y, Golden Retriever</h3>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">1</span><div><b>High-protein adult kibble (5kg)</b>, Buddy's activity level needs ~28% protein. <span className="text-muted-foreground">Match: 96%</span></div></li>
                <li className="flex items-start gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">2</span><div><b>Joint supplement (90 ct)</b>, Goldens benefit from early hip support. <span className="text-muted-foreground">Match: 92%</span></div></li>
                <li className="flex items-start gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">3</span><div><b>Tug rope + ball duo</b>, High-energy retriever play pattern. <span className="text-muted-foreground">Match: 89%</span></div></li>
                <li className="flex items-start gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">4</span><div><b>Annual checkup with Dr. Patel</b>, 2.1km from you, speaks English & Hindi. <span className="text-muted-foreground">Match: 98%</span></div></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-ink p-8 text-cream">
              <div className="text-xs uppercase tracking-widest text-lime">Estimated annual savings</div>
              <div className="mt-2 font-display text-6xl font-bold">$284</div>
              <div className="mt-2 text-sm text-cream/70">vs. self-selected products of similar quality.</div>
              <Link to="/registration/pet" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink hover:bg-lime-deep">
                Get my recommendations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </ContentPage>
  ),
});
