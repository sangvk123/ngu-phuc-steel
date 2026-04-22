import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Thép Ngũ Phúc – Steel Supply & Processing, Hai Phong Vietnam",
    template: "%s | Thép Ngũ Phúc",
  },
  description:
    "Ngu Phuc Steel — 30 years of steel supply and processing in Northern Vietnam. ISO 9001:2015 certified. Coil slitting, cut-to-length, steel plates & coils.",
  keywords: [
    "ngu phuc steel", "thép ngũ phúc", "steel supplier vietnam", "steel hai phong",
    "thep tam", "thep cuon", "coil slitting vietnam", "steel processing vietnam",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Thép Ngũ Phúc",
    title: "Thép Ngũ Phúc – Steel Supply & Processing, Hai Phong",
    description: "30 years of trusted steel supply and processing. ISO 9001:2015 by BSI. Partners: Nippon Steel, POSCO, JFE, Hyundai Steel.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "vi" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const typedLocale = locale as "vi" | "en";

  return (
    <html lang={locale} className={cn("h-full", geist.variable)}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header locale={typedLocale} />
          <main className="flex-1">{children}</main>
          <Footer locale={typedLocale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
