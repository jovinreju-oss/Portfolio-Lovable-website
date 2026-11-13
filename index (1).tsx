import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Quote, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { images, process, services, site, skills, stats, testimonials, work } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jovin Reju — Computer Science Educator" },
      {
        name: "description",
        content: "Learn to code with confidence. Tutoring, DSA bootcamps and school coding workshops by CS educator Jovin Reju.",
      },
      { property: "og:title", content: "Jovin Reju — Computer Science Educator" },
      {
        property: "og:description",
        content: "Learn to code with confidence. Tutoring, DSA bootcamps and school coding workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-paper absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="container-site relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex animate-rise items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              <span className="h-2 w-2 rounded-full bg-sage-deep" /> Taking new students for 2027
            </p>
            <h1 className="mt-6 animate-rise text-5xl font-extrabold leading-[0.98] [animation-delay:80ms] sm:text-6xl lg:text-7xl xl:text-8xl">
              I make code <span className="text-primary">click.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg text-muted-foreground [animation-delay:160ms] md:text-xl">
              Hi, I'm {site.name.split(" ")[0]} — a {site.role.toLowerCase()} helping students, schools and
              career-switchers turn confusing concepts into things they can actually build.
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book a free call <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="pill" size="xl">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden className="absolute -inset-4 rotate-3 rounded-4xl bg-gradient-warm opacity-90" />
            <img
              src={images.portrait}
              alt="Jovin Reju standing in front of a chalkboard with a binary search diagram"
              width={896}
              height={1152}
              className="relative aspect-[4/5] w-full rounded-4xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-4 animate-float rounded-2xl border border-border bg-card px-5 py-4 shadow-soft sm:-left-8">
              <p className="font-display text-3xl font-bold text-primary">O(log n)</p>
              <p className="text-sm text-muted-foreground">my favourite kind of progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee of skills */}
      <section aria-label="Subjects I teach" className="overflow-hidden border-y border-border bg-sage-deep py-4 text-sage-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-xl font-semibold">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <Sparkles className="h-4 w-4 text-peach" />
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-site grid grid-cols-2 gap-6 py-16 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-primary pl-5">
            <p className="font-display text-4xl font-bold md:text-5xl">{s.value}</p>
            <p className="mt-1 text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Selected work grid */}
      <section className="container-site py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Things I've built to teach</h2>
          </div>
          <Link to="/about" className="group inline-flex items-center gap-1 font-semibold text-primary">
            More about my approach <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {work.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-sage-deep">{w.kind}</p>
                <h3 className="mt-2 text-2xl font-bold">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="container-site py-16">
        <div className="rounded-4xl bg-primary-soft p-6 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">How I can help</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">Learning, shaped around you</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                From a single tricky topic to a full school curriculum — pick what you need.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <Link to="/services">
                  All services <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((s, i) => (
                <div key={s.title} className="rounded-2xl bg-card p-6 transition-transform hover:-translate-y-1">
                  <p className="font-display text-sm font-bold text-primary">0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-site py-16">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Three simple steps</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="rounded-3xl border border-border p-7">
              <p className="font-display text-5xl font-extrabold text-sage">{p.step}</p>
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-site py-16">
        <p className="eyebrow">Kind words</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">From students & schools</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl bg-secondary p-7">
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
