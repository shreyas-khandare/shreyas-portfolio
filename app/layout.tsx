import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shreyas Khandare — Software Engineer",
  description:
    "Software Engineer specializing in full-stack web applications, scalable backend APIs, cloud infrastructure, and databases.",
  keywords: [
    "Shreyas Khandare",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Shreyas Khandare" }],
  openGraph: {
    title: "Shreyas Khandare — Software Engineer",
    description:
      "Software Engineer specializing in full-stack web applications, scalable backend APIs, cloud infrastructure, and databases.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0B0F14]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0B0F14] text-[#F1F5F9] min-h-screen flex flex-col selection:bg-blue-600/30 selection:text-blue-200`}
      >
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
