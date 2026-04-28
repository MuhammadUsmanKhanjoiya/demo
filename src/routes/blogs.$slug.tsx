import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title}, The Pets Club` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.img },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageLayout>
      <Section>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Post not found</h1>
          <Link to="/blogs" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream">Back to blogs</Link>
        </div>
      </Section>
    </PageLayout>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <PageLayout>
      <article>
        <header className="bg-gradient-hero pb-16 pt-14">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="-mt-8 overflow-hidden rounded-[2rem] border-4 border-ink shadow-card">
            <img src={post.img} alt={post.title} width={1024} height={576} className="aspect-video w-full object-cover" />
          </div>
        </div>

        <Section>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-ink-soft">{post.excerpt}</p>
            <div className="prose prose-lg mt-8 max-w-none space-y-5 text-foreground">
              {post.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/80">{p}</p>
              ))}
            </div>
            <div className="mt-12 rounded-3xl border-2 border-ink bg-lime/20 p-8 text-center">
              <h3 className="text-2xl font-bold">Have a question about your pet?</h3>
              <p className="mt-2 text-ink-soft">Talk to a verified vet now.</p>
              <Link to="/booking" className="mt-5 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-bold uppercase tracking-wider text-cream hover:bg-ink-soft">
                Book a consultation
              </Link>
            </div>
          </div>
        </Section>

        {related.length > 0 && (
          <Section className="bg-surface">
            <h2 className="text-3xl font-bold">More from {post.category}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blogs/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-card transition hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.img} alt={r.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">{r.category}</span>
                    <h3 className="mt-3 text-lg font-bold leading-tight">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}
      </article>
    </PageLayout>
  );
}
