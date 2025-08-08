import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reid Lentz - Chief Product & Technology Officer",
  description: "Driving Innovation in Logistics & Technology. Chief Product & Technology Officer with expertise in AI, cloud architecture, and SaaS platforms.",
  keywords: ["Reid Lentz", "Chief Product Officer", "Technology Officer", "Logistics", "AI", "Machine Learning", "Cloud Architecture"],
  authors: [{ name: "Reid Lentz" }],
  openGraph: {
    title: "Reid Lentz - Chief Product & Technology Officer",
    description: "Driving Innovation in Logistics & Technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
