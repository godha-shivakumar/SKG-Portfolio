import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: global CSS import declaration not found in current TS config
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shiva Kumar Godha | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#FAFAFA]`}>
        {/* Client Component */}
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
