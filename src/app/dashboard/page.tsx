import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Logo from "@/components/Logo";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;
  const userEmail = user.email;
  const userName = user.user_metadata?.full_name || userEmail?.split("@")[0] || "Student";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="/dashboard">
            <Logo />
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-foreground-secondary sm:block">
              {userEmail}
            </span>
            <form action="/logout" method="POST">
              <button
                type="submit"
                className="btn-secondary text-sm"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back, <span className="gradient-text">{userName}</span>
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Your productivity dashboard is ready. Start crushing your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="feature-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple/10">
              <svg
                className="h-5 w-5 text-accent-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Today&apos;s Tasks</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              0 tasks remaining. Add your first assignment to get started.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple/10">
              <svg
                className="h-5 w-5 text-accent-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">AI Breakdown</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Drop an assignment and let AI build your task pipeline.
            </p>
          </div>

          <div className="feature-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple/10">
              <svg
                className="h-5 w-5 text-accent-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Focus Timer</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Start a Pomodoro session to boost your productivity.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-semibold">Quick Start</h2>
          <p className="mt-2 text-foreground-secondary">
            Ready to be productive? Here&apos;s how to get started with Stepad.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-background/40 p-4">
              <span className="text-2xl font-bold text-accent-purple">1</span>
              <p className="mt-2 text-sm text-foreground-secondary">
                Add your first assignment or task
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background/40 p-4">
              <span className="text-2xl font-bold text-accent-purple">2</span>
              <p className="mt-2 text-sm text-foreground-secondary">
                Let AI break it into actionable steps
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background/40 p-4">
              <span className="text-2xl font-bold text-accent-purple">3</span>
              <p className="mt-2 text-sm text-foreground-secondary">
                Focus and ship on time
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
