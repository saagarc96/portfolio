import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "gemini-music-classifier | Saagar Chandiramani",
  description: "Built a full-stack AI classification system in 10 days that reduced manual curation time by 40x.",
};

const BLUR_FADE_DELAY = 0.04;

export default function GeminiMusicClassifierPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 pb-16">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground font-mono">2024</span>
            <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
              40x faster
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            gemini-music-classifier
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Built a full-stack AI classification system in 10 days that reduced manual curation time by 40x.
          </p>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Problem</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li>Curators spent 3-4 hours manually classifying 200 songs</li>
              <li>Subjective criteria across 189 subgenres made consistency difficult</li>
              <li>Classification bottleneck was limiting client onboarding scale</li>
              <li>No standardized process for handling edge cases or new genres</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Solution</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Built a multi-model AI pipeline with a React curator interface that automates the heavy lifting while preserving human judgment for edge cases.
            </p>
            <ul>
              <li><strong>Multi-model AI pipeline:</strong> Gemini Flash for classification, Parallel AI for audio analysis, Spotify API for metadata enrichment</li>
              <li><strong>React curator interface:</strong> Kanban workflow for review, batch operations, and quality control</li>
              <li><strong>Production-ready:</strong> Auth, rate limiting, connection pooling, duplicate detection</li>
              <li><strong>17KB classification prompt:</strong> Comprehensive edge case handling across 189 subgenres</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Impact</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">40x</p>
              <p className="text-sm text-muted-foreground">Faster classification</p>
              <p className="text-xs text-muted-foreground mt-1">5-10 min vs 3-4 hours for 200 songs</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">+4-8%</p>
              <p className="text-sm text-muted-foreground">Accuracy improvement</p>
              <p className="text-xs text-muted-foreground mt-1">After Gemini 3 Flash migration</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">50%</p>
              <p className="text-sm text-muted-foreground">Cost reduction</p>
              <p className="text-xs text-muted-foreground mt-1">Via batch API optimization</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">10 days</p>
              <p className="text-sm text-muted-foreground">End-to-end build</p>
              <p className="text-xs text-muted-foreground mt-1">From concept to production</p>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Technical Details</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li><strong>Scale:</strong> 20+ API endpoints, 75+ React components, ~50K LOC</li>
              <li><strong>Database:</strong> Prisma ORM + PostgreSQL with 13 strategic indexes</li>
              <li><strong>Infrastructure:</strong> Serverless on Vercel with connection pooling</li>
              <li><strong>AI:</strong> Custom prompts with confidence scoring and fallback logic</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API", "TailwindCSS", "Vercel"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-card border border-border rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </BlurFade>
    </main>
  );
}
