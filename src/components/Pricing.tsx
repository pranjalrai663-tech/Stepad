import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  credits: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    credits: "50 credits / month",
    description: "Perfect for trying Stepad out.",
    features: [
      "AI assignment breakdown",
      "Pomodoro timer",
      "Basic dashboard",
      "1 workspace",
      "Community support",
    ],
    cta: "Get started",
  },
  {
    name: "Student",
    price: "$5",
    period: "/month",
    credits: "200 credits / month",
    description: "For students who mean business.",
    features: [
      "Everything in Free",
      "Smart Vault",
      "Binaural beats",
      "AI chat (basic)",
      "3 workspaces",
      "Streak system",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$15",
    period: "/month",
    credits: "1,000 credits / month",
    description: "Power users who want it all.",
    features: [
      "Everything in Student",
      "Advanced AI chat",
      "Unlimited workspaces",
      "Custom themes",
      "Priority support",
      "Export & integrations",
    ],
    cta: "Go Pro",
  },
  {
    name: "Pro Annual",
    price: "$30",
    period: "/year",
    credits: "1,000 credits / month",
    description: "Best value — save 83%.",
    features: [
      "Everything in Pro",
      "12 months for the price of 2",
      "Early access to features",
      "Annual-only themes",
      "Priority support",
      "Team sharing (coming soon)",
    ],
    cta: "Save 83%",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-purple">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, student-friendly pricing
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Start free. Upgrade when you&apos;re ready. No surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-accent-purple">
                  {plan.credits}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground-secondary"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-purple"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 w-full text-center ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
