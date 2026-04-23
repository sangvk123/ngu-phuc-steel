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

const BASE_URL = "https://www.nguphucsteel.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Thép Ngũ Phúc – Nhà cung cấp thép hàng đầu miền Bắc | Hai Phong Vietnam",
    template: "%s | Thép Ngũ Phúc",
  },
  description:
    "Ngu Phuc Steel — 30 năm cung cấp & gia công thép tại Hải Phòng. ISO 9001:2015. Thép tấm SS400, SAPH440, SPFH590, thép cuộn CR, GI, PPGI. Đối tác Nippon Steel, POSCO, JFE, Hyundai Steel.",
  keywords: [
    // Brand
    "ngu phuc steel", "thép ngũ phúc", "nguphucsteel", "Ngu Phuc Steel Coil Center",
    // Location
    "steel supplier hai phong", "nhà cung cấp thép hải phòng", "thép hải phòng",
    "steel supplier northern vietnam", "thép miền bắc việt nam",
    // Services
    "coil slitting vietnam", "cut to length steel vietnam", "xả băng thép", "cắt tấm thép",
    "steel processing vietnam", "gia công thép việt nam",
    // Steel plates
    "thép tấm SS400", "thép tấm A36", "steel plate SS400 vietnam", "thep tam hai phong",
    "thép tấm cán nóng", "hot rolled steel plate vietnam",
    // Automotive steel – grades from Facebook
    "SAPH440 vietnam", "thép SAPH440", "SPFH590 vietnam", "thép SPFH590",
    "CR240LA vietnam", "CR300LA vietnam", "CR330LA vietnam", "CR420LA vietnam",
    "DC01 steel vietnam", "DC02 DC03 steel coil",
    "HC180YD HC220YD HC260YD", "DX51D DX52D DX53D",
    "thép cuộn ô tô", "automotive steel coil vietnam", "thep cuon xe hoi",
    // High-tensile
    "Q460C Q550C vietnam", "S700MC S550MC steel", "LG600 LG700 LG800 steel",
    "high tensile steel vietnam", "thép cường độ cao",
    // Coated
    "thép mạ kẽm", "galvanized steel coil vietnam", "GI steel coil",
    "PPGI vietnam", "thép mạ màu", "color coated steel vietnam",
    // General B2B
    "steel coil supplier vietnam", "nhà nhập khẩu thép", "steel importer vietnam",
    "Nippon Steel vietnam", "POSCO vietnam", "JFE Steel vietnam",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
    languages: {
      vi: BASE_URL,
      en: `${BASE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: "Thép Ngũ Phúc",
    title: "Thép Ngũ Phúc – Steel Supply & Processing, Hai Phong Vietnam",
    description: "30 năm cung cấp thép. ISO 9001:2015 by BSI. SAPH440, SS400, CR/GI coils. Partners: Nippon Steel, POSCO, JFE, Hyundai Steel.",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thép Ngũ Phúc – Steel Supplier Vietnam",
    description: "30 năm cung cấp thép tại Hải Phòng. SAPH440, SS400, CR/GI coils. ISO 9001:2015.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Công ty Cổ phần Thép Ngũ Phúc",
  alternateName: ["Ngu Phuc Steel", "Ngu Phuc Steel Coil Center", "Thép Ngũ Phúc"],
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-ngu-phuc.png`,
  foundingDate: "1994",
  description: "Nhà cung cấp và gia công thép hàng đầu miền Bắc Việt Nam. Chuyên thép tấm, thép cuộn, gia công cắt tấm và xả băng.",
  telephone: "+84-225-268-3939",
  email: "pkd@nguphuc.com.vn",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "7/3B Lê Hồng Phong",
      addressLocality: "Ngô Quyền, Hải Phòng",
      addressCountry: "VN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Lô B-23, KCN An Dương, Hồng Phong",
      addressLocality: "An Dương, Hải Phòng",
      addressCountry: "VN",
    },
  ],
  sameAs: ["https://www.facebook.com/thepnguphuc/"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "ISO 9001:2015",
    recognizedBy: { "@type": "Organization", name: "BSI Group" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Thép Ngũ Phúc",
  image: `${BASE_URL}/images/logo/logo-ngu-phuc.png`,
  url: BASE_URL,
  telephone: "+84-225-268-3939",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7/3B Lê Hồng Phong",
    addressLocality: "Ngô Quyền",
    addressRegion: "Hải Phòng",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.8565,
    longitude: 106.7220,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:30",
    closes: "17:30",
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

  if (!routing.locales.includes(locale as "vi" | "en" | "ja")) {
    notFound();
  }

  const messages = await getMessages();
  const typedLocale = locale as "vi" | "en" | "ja";

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
