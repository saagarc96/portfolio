import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Work-Smarter OS | Saagar Chandiramani",
  description: "Built an AI-powered operating system that processes 40+ calls/month and generates actionable intelligence.",
};

const BLUR_FADE_DELAY = 0.04;

export default function WorkSmarterOSPage() {
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
            <span className="text-sm text-muted-foreground font-mono">2024 - Present</span>
            <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
              60+ calls processed
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work-Smarter OS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Built an AI-powered operating system that processes 40+ calls/month and generates actionable intelligence.
          </p>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Problem</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li>High volume of customer and internal calls with insights scattered across notes</li>
              <li>Manual todo tracking made it easy to drop balls on follow-ups</li>
              <li>CEO needed visibility into operations without micromanaging</li>
              <li>No systematic way to extract product feedback or track relationship dynamics</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Solution</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Built a personal operating system using Claude Code that automates call processing, extracts intelligence, and maintains a living operational dashboard.
            </p>
            <ul>
              <li><strong>Call ingestion pipeline:</strong> 15-20 seconds per call to extract todos, generate summaries, and update dashboards</li>
              <li><strong>Specialized agents:</strong> Todo-extractor, quick-summary, product-intelligence, relationship-analyzer</li>
              <li><strong>Weekly batch analysis:</strong> Strategic patterns, feature request aggregation, relationship tracking</li>
              <li><strong>COCKPIT.md:</strong> Living operational dashboard with priorities, active threads, and session logs</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Impact</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">60+</p>
              <p className="text-sm text-muted-foreground">Transcripts processed</p>
              <p className="text-xs text-muted-foreground mt-1">With structured intelligence</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">15-20s</p>
              <p className="text-sm text-muted-foreground">Per-call processing</p>
              <p className="text-xs text-muted-foreground mt-1">Todos + summary + dashboard</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">Auto</p>
              <p className="text-sm text-muted-foreground">Feature aggregation</p>
              <p className="text-xs text-muted-foreground mt-1">With priority signals</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Context restoration</p>
              <p className="text-xs text-muted-foreground mt-1">Across sessions</p>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Systems Built</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li><strong>/ingest-transcript:</strong> Fast per-call processing with todo extraction and summary generation</li>
              <li><strong>/weekly-call-review:</strong> Batch analysis with 4 parallel agents for strategic insights</li>
              <li><strong>HubSpot → Sheets automation:</strong> Replaced Zapier with direct API integration</li>
              <li><strong>GitHub Actions:</strong> Daily briefings and automated workflows</li>
              <li><strong>Managing-up workflow:</strong> Reduces sync meetings while maintaining CEO visibility</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {["Claude Code", "GitHub Actions", "Markdown", "HubSpot API", "Google Sheets API", "Fireflies"].map((tech) => (
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
