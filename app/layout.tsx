import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Archivo({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "M Power Motors | Independent BMW Repair & Service in Sacramento",
  description:
    "Independent BMW specialist at 7500 14th Ave #8, Sacramento CA 95820. BMW major service, engine and transmission repair, brakes, cooling, suspension and check engine diagnostics. Owner Charlie. Mon-Fri 7:30-5. Call (916) 457-8701.",
  openGraph: {
    title: "M Power Motors | BMW Specialist in Sacramento",
    description: "Dealership-quality BMW service and repair at independent-shop prices. Call (916) 457-8701.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
