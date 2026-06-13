import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stepad — AI-Powered Student Productivity",
  description:
    "Clear the clutter. Take your first step. Stepad uses AI to break down assignments, keep you focused, and help you ship on time.",
  keywords: [
    "student productivity",
    "AI assignment breakdown",
    "pomodoro timer",
    "study app",
    "task management",
  ],
  openGraph: {
    title: "Stepad — AI-Powered Student Productivity",
    description:
      "Clear the clutter. Take your first step. AI-powered productivity for students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
