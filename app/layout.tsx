import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-kalam",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick",
});

export const metadata: Metadata = {
  title: "Jay Sharma | Portfolio",
  description: "Electronics & Computer B.Tech Student at VIT Chennai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kalam.variable} ${patrickHand.variable}`}>
      <body className="bg-paper text-pencil font-body min-h-screen selection:bg-accent selection:text-white relative overflow-x-hidden">
        {/* Notebook grid background overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40" 
          style={{
            backgroundImage: "radial-gradient(#e5e0d8 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px"
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}