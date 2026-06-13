import {
  LayoutDashboard,
  Brain,
  Vault,
  Timer,
  Headphones,
  MessageSquare,
  Flame,
  Layers,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Zero Friction Dashboard",
    description:
      "Everything you need on one screen. No clutter, no confusion — just your next step.",
  },
  {
    icon: Brain,
    title: "AI Assignment Breakdown",
    description:
      "Drop any assignment and AI splits it into actionable tasks with smart deadlines.",
  },
  {
    icon: Vault,
    title: "Smart Vault",
    description:
      "Store notes, files, and resources in one organized vault — searchable and tagged.",
  },
  {
    icon: Timer,
    title: "Pomodoro Timer",
    description:
      "Built-in focus sessions with break reminders. Stay in flow without switching apps.",
  },
  {
    icon: Headphones,
    title: "Binaural Beats",
    description:
      "Science-backed audio to boost concentration. Pick your vibe and lock in.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Ask questions, get explanations, and brainstorm ideas with your built-in AI tutor.",
  },
  {
    icon: Flame,
    title: "Streak System",
    description:
      "Build momentum with daily streaks. Small wins compound into big results.",
  },
  {
    icon: Layers,
    title: "Multi Space",
    description:
      "Separate workspaces for classes, projects, and personal goals. Stay organized.",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description:
      "Make it yours with dark, light, and custom color themes that match your style.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for how students actually work
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Every tool you need to go from overwhelmed to on-track — without
            juggling five different apps.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group feature-card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple/10 transition-colors group-hover:bg-accent-purple/20">
                <feature.icon
                  size={20}
                  className="text-accent-purple transition-colors group-hover:text-accent-blue"
                />
              </div>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
