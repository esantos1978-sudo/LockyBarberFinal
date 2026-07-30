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
  title: "Locky Barber | Peluquería de Caballeros Premium en Madrid",
  description:
    "Excelencia en cortes de caballero, degradados y perfilado de barba desde 2016. Tu peluquería de confianza en Calle Alejandro Sánchez, 16, Madrid. Reserva tu cita online.",
  keywords: [
    "peluquería caballeros madrid",
    "barbería usera",
    "corte degradado madrid",
    "arreglo de barba",
    "locky barber",
  ],
  authors: [{ name: "Locky Barber" }],
  creator: "Locky Barber",
  publisher: "Locky Barber",
  metadataBase: new URL("https://lockybarber.vercel.app"),
  openGraph: {
    title: "Locky Barber | Peluquería de Caballeros Premium en Madrid",
    description:
      "Excelencia en cortes de caballero, degradados y perfilado de barba desde 2016. Reserva tu cita online.",
    url: "https://lockybarber.vercel.app",
    siteName: "Locky Barber",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Locky Barber Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locky Barber | Peluquería de Caballeros Premium en Madrid",
    description:
      "Excelencia en cortes de caballero, degradados y perfilado de barba desde 2016.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
