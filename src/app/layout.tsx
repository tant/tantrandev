import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tan Tran | Technology Leader & Engineering Manager",
  description:
    "The personal website of Tan Tran, a technology leader and engineering manager in Ho Chi Minh City. I specialize in building high-performance teams and scaling software solutions. Connect with me for leadership roles and technology consulting opportunities.",
  keywords:
    "Tan Tran, technology leader, engineering manager, software development, team leadership, technical leadership, Ho Chi Minh City",
  authors: [{ name: "Tan Tran", url: "https://tantran.dev" }],
  creator: "Tan Tran",
  openGraph: {
    title: "Tan Tran | Technology Leader & Engineering Manager",
    description:
      "The personal website of Tan Tran, a technology leader and engineering manager in Ho Chi Minh City. I specialize in building high-performance teams and scaling software solutions.",
    url: "https://tantran.dev",
    siteName: "Tan Tran Dev",
    images: [
      {
        url: "https://tantran.dev/logo.png",
        width: 512,
        height: 512,
        alt: "Tan Tran Dev Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Tran | Technology Leader & Engineering Manager",
    description:
      "The personal website of Tan Tran, a technology leader and engineering manager in Ho Chi Minh City.",
    images: ["https://tantran.dev/logo.png"],
    creator: "@tantran_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology, Leadership, Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
