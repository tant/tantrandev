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
  title: "Tan Tran | Executive Leader, Technology Partner, Strategic Investor",
  description:
    "Professional personal profile website of Tan Tran – Executive Leader, Technology Partner, Strategic Investor. Connect for senior job opportunities, freelance tech projects, strategic partnerships, and investment. Built with Next.js 15, Tailwind CSS 4, Vercel, Brevo, Google Analytics.",
  keywords:
    "Tan Tran, Executive Leader, Technology Partner, Strategic Investor, Personal Brand, Career, Leadership, Business, Investment, Freelance, Collaboration, Professional Profile, Ask Me, Reach Me, Blog, Social Proof, Opportunities, Digital Headquarters, Senior Recruiter, Potential Client, Partner, Investor, Contact, Q&A, Success Metrics, Personal Website, Professional Network, Strategic Value, Business Growth, Trusted Partner, Angel Investor, Global Expansion, P&L Ownership, Tech Expertise, High-Stakes Industry",
  authors: [{ name: "Tan Tran", url: "https://tantran.dev" }],
  creator: "Tan Tran",
  openGraph: {
    title: "Tan Tran | Executive Leader, Technology Partner, Strategic Investor",
    description:
      "Professional personal profile website of Tan Tran – Executive Leader, Technology Partner, Strategic Investor. Connect for senior job opportunities, freelance tech projects, strategic partnerships, and investment.",
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
    title: "Tan Tran | Executive Leader, Technology Partner, Strategic Investor",
    description:
      "Professional personal profile website of Tan Tran – Executive Leader, Technology Partner, Strategic Investor.",
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
  category: "Personal Profile, Technology, Leadership, Investment",
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
