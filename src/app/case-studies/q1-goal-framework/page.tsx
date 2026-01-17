import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Q1 2026 Goal Framework | Saagar Chandiramani",
  description: "Applied Molly Graham's goal-setting framework to align a distributed team around 3 measurable goals.",
};

const BLUR_FADE_DELAY = 0.04;

export default function Q1GoalFrameworkPage() {
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
            <span className="text-sm text-muted-foreground font-mono">2026</span>
            <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
              3 measurable goals
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Q1 2026 Goal Framework
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Applied Molly Graham&apos;s goal-setting framework to align a distributed team around 3 measurable goals.
          </p>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Problem</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li>Ambitious targets ($400k pipeline) without clear ownership or accountability</li>
              <li>Multiple priorities competing for attention across a distributed team</li>
              <li>No checkpoint accountability—goals set at quarter start, reviewed at quarter end</li>
              <li>Team members unclear on what to prioritize when everything feels urgent</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Solution</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Applied Molly Graham&apos;s goal-setting framework (from her work at Facebook, Quip, and Chan Zuckerberg Initiative) to create clear, achievable goals with explicit ownership.
            </p>
            <ul>
              <li><strong>Simplified targets:</strong> Reduced from $400k to $200k pipeline target based on realistic assessment</li>
              <li><strong>3 parallel goals:</strong> Each with explicit owner and monthly checkpoints</li>
              <li><strong>&quot;Not doing&quot; list:</strong> Explicitly scoped out distractions to maintain focus</li>
              <li><strong>Weekly pipeline review:</strong> Built accountability into the operating rhythm</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">The Three Goals</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Goal 1</p>
              <p className="font-semibold">Pipeline</p>
              <p className="text-sm text-muted-foreground">$200k new pipeline</p>
              <p className="text-xs text-muted-foreground mt-2">Owner: Vikas (CEO)</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Goal 2</p>
              <p className="font-semibold">Migration</p>
              <p className="text-sm text-muted-foreground">Complete platform migration</p>
              <p className="text-xs text-muted-foreground mt-2">Owner: Michaela (CS Lead)</p>
            </div>
            <div className="p-4 rounded-lg border bg-card space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Goal 3</p>
              <p className="font-semibold">Outbound</p>
              <p className="text-sm text-muted-foreground">Build outbound engine</p>
              <p className="text-xs text-muted-foreground mt-2">Owner: Saagar (Ops)</p>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Impact</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li><strong>Team alignment:</strong> Everyone knows what matters (and what doesn&apos;t)</li>
              <li><strong>Clear ownership:</strong> No ambiguity about who&apos;s responsible for what</li>
              <li><strong>Checkpoint accountability:</strong> Monthly reviews built into the rhythm</li>
              <li><strong>Focus protection:</strong> &quot;Not doing&quot; list prevents scope creep</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Framework Principles</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul>
              <li><strong>Fewer goals:</strong> 3 goals maximum—if everything is a priority, nothing is</li>
              <li><strong>Reality-based:</strong> Set achievable targets, not aspirational fantasies</li>
              <li><strong>Explicit ownership:</strong> One person responsible for each goal</li>
              <li><strong>Built-in checkpoints:</strong> Monthly reviews, not just quarterly retros</li>
              <li><strong>Scope protection:</strong> &quot;Not doing&quot; list is as important as &quot;doing&quot; list</li>
            </ul>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Skills Applied</h2>
          <div className="flex flex-wrap gap-2">
            {["Strategic Planning", "OKRs", "Team Alignment", "Change Management", "Stakeholder Communication"].map((tech) => (
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
