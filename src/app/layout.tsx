import type { Metadata } from "next";
import {DM_Sans, DM_Serif_Display, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    weight: ["400", "500", "700"]
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    variable: "--font-dm-serif",
    weight: "400",
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Timeo's Portfolio",
  description: "My NextJS Portfolio, modern and simple",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
                <Header />
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
