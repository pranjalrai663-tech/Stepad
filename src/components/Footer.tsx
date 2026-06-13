import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-secondary">
              AI-powered productivity for students. Clear the clutter, take
              your first step.
            </p>
            <a href="#" className="btn-primary mt-6 inline-flex text-sm">
              Start for free
              <ArrowRight size={16} />
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-secondary transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Stepad. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground-secondary"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground-secondary"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
