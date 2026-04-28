import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy, The Pets Club" },
      { name: "description", content: "How The Pets Club collects, uses, and protects your data." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: April 2026" />
      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl text-ink-soft [&>h2]:mt-10 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-ink [&>p]:mt-3 [&>ul]:mt-3 [&>ul]:list-disc [&>ul]:pl-6">
          <p>The Pets Club ("we", "our", "us") respects your privacy. This policy explains what information we collect and how we use it.</p>
          <h2>1. Information we collect</h2>
          <p>Account info, pet profiles, vet visit logs, marketplace orders, and basic device telemetry.</p>
          <h2>2. How we use it</h2>
          <ul>
            <li>To provide veterinary services and product fulfillment</li>
            <li>To personalize AI recommendations</li>
            <li>To improve our platform and prevent fraud</li>
            <li>For legally-required reporting (e.g., livestock disease alerts)</li>
          </ul>
          <h2>3. Sharing</h2>
          <p>We never sell personal data. We share with vets you book and shipping carriers for orders.</p>
          <h2>4. Your rights</h2>
          <p>You may access, correct or delete your data at any time from Settings or by emailing privacy@thepetsclub.com.</p>
          <h2>5. Security</h2>
          <p>End-to-end encryption for telemedicine, encrypted-at-rest databases, and SOC 2-aligned controls.</p>
          <h2>6. Contact</h2>
          <p>Questions? Email privacy@thepetsclub.com.</p>
        </article>
      </Section>
    </PageLayout>
  ),
});
