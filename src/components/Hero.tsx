import { ArrowRight, CreditCard, Sparkles, Shield } from "lucide-react";

const badges = [
  { icon: CreditCard, label: "No credit card" },
  { icon: Sparkles, label: "50 free credits" },
  { icon: Shield, label: "Cancel anytime" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/60 px-4 py-1.5 text-sm text-foreground-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purple opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-purple" />
            </span>
            AI-powered productivity for students
          </div>

          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Clear the clutter.
            <br />
            <span className="gradient-text">Take your first step.</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
            Drop any assignment and let AI build your pipeline. Stay focused
            with Pomodoro, binaural beats, and a dashboard that actually makes
            sense.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/login" className="btn-primary px-8 py-3 text-base">
              Start for free
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary px-8 py-3 text-base">
              See how it works
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-3">
            {badges.map((badge) => (
              <span key={badge.label} className="badge">
                <badge.icon size={14} className="text-accent-purple" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-500 relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-[0.07] blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-glow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="mx-auto flex h-6 w-48 items-center justify-center rounded-md bg-background/60 text-xs text-muted">
                app.stepad.io
              </div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              <div className="space-y-3 rounded-xl border border-border/50 bg-background/40 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">Today</span>
                  <span className="rounded-full bg-accent-purple/10 px-2 py-0.5 text-xs font-medium text-accent-purple">
                    3 tasks
                  </span>
                </div>
                {["Research outline", "Draft intro", "Cite sources"].map(
                  (task, i) => (
                    <div
                      key={task}
                      className="flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2"
                    >
                      <div
                        className={`h-3.5 w-3.5 rounded border ${
                          i === 0
                            ? "border-accent-purple bg-accent-purple/20"
                            : "border-border-light"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          i === 0 ? "text-foreground" : "text-foreground-secondary"
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="space-y-3 rounded-xl border border-border/50 bg-background/40 p-4 md:col-span-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent-purple" />
                  <span className="text-xs font-medium text-muted">
                    AI Pipeline — History Essay
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {["Research", "Outline", "Draft", "Review", "Submit"].map(
                    (step, i) => (
                      <div key={step} className="flex flex-1 flex-col items-center gap-1.5">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                            i <= 2
                              ? "bg-gradient-brand text-white"
                              : "border border-border-light text-muted"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span className="text-[10px] text-muted">{step}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-[60%] rounded-full bg-gradient-brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
