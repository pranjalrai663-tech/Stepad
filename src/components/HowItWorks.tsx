import { Upload, Wand2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Drop your assignment",
    description:
      "Paste a prompt, upload a PDF, or type it in. Stepad understands what you need to do.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "AI builds your pipeline",
    description:
      "Get a step-by-step breakdown with deadlines, priorities, and resources — automatically.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Focus and ship",
    description:
      "Use Pomodoro, binaural beats, and your dashboard to stay on track and finish on time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />

      <div className="section-container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to clarity
          </h2>
          <p className="mt-4 text-foreground-secondary">
            From chaos to a clear plan in under 60 seconds.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-border-light to-transparent md:block" />

          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface/60 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent-purple/30 hover:shadow-glow">
                <item.icon size={24} className="text-accent-purple" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-accent-purple">
                STEP {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <div className="mx-auto mt-8 h-8 w-px bg-border-light md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
