import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Locky Barber | Estilo Premium",
  description:
    "Expertos en cortes, coloración y cuidado capilar. Una experiencia sensorial diseñada para quienes no aceptan menos que la perfección.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${poppins.variable} h-full antialiased bg-[#0F0F0F]`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
