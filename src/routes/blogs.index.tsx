import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section } from "@/components/site/Section";
import { ArrowRight, Search } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs, The Pets Club" },
      { name: "description", content: "Pet care guides, expert advice, and stories from our community." },
    ],
  }),
  component: BlogsIndex,
});

function BlogsIndex() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const posts = useMemo(
    () =>
      BLOG_POSTS.filter((p) => {
        if (cat !== "All" && p.category !== cat) return false;
        if (q && !`${p.title} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      }),
    [cat, q]
  );

  return (
    <PageLayout>
      <PageHero eyebrow="Blogs" title="Stories that wag tails." subtitle="Expert advice, guides, and stories from across our community." />
      <Section>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-ink text-cream" : "bg-muted hover:bg-lime/30"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex w-full items-center gap-2 rounded-full border-2 border-ink bg-card px-4 lg:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full bg-transparent py-2.5 text-sm outline-none"
            />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-border p-12 text-center text-muted-foreground">
            No articles match your filters.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} to="/blogs/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-lime px-3 py-1 font-bold uppercase tracking-widest text-ink">{p.category}</span>
                    <span className="text-muted-foreground">{p.date}</span>
                    <span className="text-muted-foreground">· {p.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </PageLayout>
  );
}
