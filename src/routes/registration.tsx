import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { PawPrint, Tractor, Egg, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration, The Pets Club" },
      { name: "description", content: "Register your pet, dairy farm, or poultry farm to unlock care, community, and tools." },
    ],
  }),
  component: () => (
    <PageLayout>
      <PageHero
        eyebrow="Registration"
        title="One profile. Every benefit."
        subtitle="Whether you have a single pup or a thousand head of cattle, register to unlock care, marketplace and AI tools."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: PawPrint, title: "Pet Registration", to: "/registration/pet", desc: "For cats, dogs, birds, horses and small pets." },
            { icon: Tractor, title: "Dairy Farm", to: "/registration/dairy", desc: "Cattle, buffalo and goat dairy operations." },
            { icon: Egg, title: "Poultry Farm", to: "/registration/poultry", desc: "Layer, broiler and breeder farms." },
          ].map((c) => (
            <Link key={c.title} to={c.to} className="group rounded-3xl border-2 border-ink bg-card p-8 shadow-card transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime text-ink">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Register now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  ),
});
