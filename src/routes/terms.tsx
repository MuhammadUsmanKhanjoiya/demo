import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service, The Pets Club" },
      { name: "description", content: "Terms governing use of The Pets Club platform." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: April 2026" />
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl text-ink-soft [&>h2]:mt-10 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-ink [&>p]:mt-3">
          <p>By accessing The Pets Club, you agree to these terms.</p>
          <h2>1. Use of platform</h2>
          <p>Use the service in compliance with local laws. Don't abuse, scrape, or misrepresent your identity.</p>
          <h2>2. Veterinary services</h2>
          <p>Telemedicine consultations supplement, but do not replace, in-person care for emergencies. In life-threatening situations, contact your local emergency vet immediately.</p>
          <h2>3. Marketplace</h2>
          <p>Sellers warrant their products. We facilitate transactions and offer a 30-day returns guarantee.</p>
          <h2>4. Memberships</h2>
          <p>Premium and Farm plans renew annually. Cancel anytime from Settings, refunds within 30 days.</p>
          <h2>5. Liability</h2>
          <p>The Pets Club is provided "as is". Maximum liability is the amount you've paid in the prior 12 months.</p>
          <h2>6. Changes</h2>
          <p>We may update these terms. Material changes are notified at least 30 days in advance.</p>
        </article>
      </Section>
    </PageLayout>
  ),
});
