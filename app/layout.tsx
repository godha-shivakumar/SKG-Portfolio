import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: global CSS import declaration not found in current TS config
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

// Global font configuration:
// Loads Inter through Next.js font optimization
// with automatic performance benefits and reduced layout shift.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO metadata configuration:
// Defines default page title and description
// used across the application.
export const metadata: Metadata = {
  title: "Shiva Kumar Godha | Portfolio",
  description: "Frontend Developer Portfolio",
};

// Root application layout:
// Provides the shared structure for all pages,
// including global styles and navigation.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#FAFAFA]`}>
        {/* Client-side navigation:
            Handles responsive desktop/mobile navigation behavior.
        */}
        <ResponsiveNav />

        {/* Page content:
            Dynamic route content is rendered here.
        */}
        {children}
      </body>
    </html>
  );
}
