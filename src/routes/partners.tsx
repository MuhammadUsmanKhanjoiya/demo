import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import img from "@/assets/vet-telemedicine.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Veterinary Partners, The Pets Club" },
      { name: "description", content: "150+ verified veterinarians across 8 specializations and 11 languages." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Veterinary Partners"
      title="A network of 150+ verified vets."
      subtitle="From general practice to surgery, dermatology to behaviour, find the right specialist, in your language."
      heroImage={img}
      features={[
        { title: "General Practice", desc: "Routine checks, vaccinations and wellness." },
        { title: "Dermatology", desc: "Skin, coat, and allergy specialists." },
        { title: "Behaviour", desc: "Certified animal behaviourists." },
        { title: "Surgery", desc: "Pre-op consults and second opinions." },
        { title: "Nutrition", desc: "Diet plans by breed, age and activity." },
        { title: "Emergency", desc: "24/7 emergency triage and guidance." },
      ]}
      faqs={[
        { q: "How are vets verified?", a: "We check licensing, board certifications and patient reviews before any vet joins." },
        { q: "Are second opinions available?", a: "Yes, submit medical records for a personalized expert review." },
        { q: "Can my regular vet join?", a: "Absolutely. We welcome applications via the 'Join as a vet' page." },
      ]}
      ctaTitle="Need a specialist? We have one."
    />
  ),
});
