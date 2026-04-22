import Link from "next/link";
import { COMPANY, NAV, PARTNERS } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  locale: "vi" | "en";
}

const LABELS: Record<string, Record<string, string>> = {
  home: { vi: "Trang chủ", en: "Home" },
  about: { vi: "Giới thiệu", en: "About" },
  products: { vi: "Sản phẩm", en: "Products" },
  services: { vi: "Dịch vụ", en: "Services" },
  projects: { vi: "Dự án", en: "Projects" },
  contact: { vi: "Liên hệ", en: "Contact" },
};

export default function Footer({ locale }: FooterProps) {
  const t = (key: string) => LABELS[key]?.[locale] ?? key;
  const localePath = (href: string) =>
    locale === "en" ? `/en${href === "/" ? "" : href}` : href;

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <span className="text-slate-900 font-bold text-xs tracking-tighter">NP</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">
                  {locale === "vi" ? "THÉP NGŨ PHÚC" : "NGU PHUC STEEL"}
                </div>
                <div className="text-slate-500 text-xs">
                  {locale === "vi" ? "Cổ phần Thép Ngũ Phúc" : "Steel Joint Stock Co."}
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {locale === "vi"
                ? "30 năm uy tín trong cung cấp và gia công thép chất lượng cao tại miền Bắc Việt Nam."
                : "30 years of trusted steel supply and processing in Northern Vietnam."}
            </p>
            <div className="text-xs text-slate-600">
              <div>MST: {COMPANY.taxId}</div>
              <div className="mt-1">ISO 9001:2015 – BSI Certified 2024</div>
            </div>
          </div>

          {/* Địa chỉ */}
          <div>
            <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-widest mb-4">
              {locale === "vi" ? "Địa chỉ" : "Locations"}
            </h3>
            <ul className="space-y-3">
              {COMPANY.addresses.map((a) => (
                <li key={a.label} className="text-xs leading-relaxed">
                  <div className="text-slate-300 font-medium mb-0.5">
                    {locale === "vi" ? a.label : a.labelEn}
                  </div>
                  <div className="text-slate-500">{a.address}</div>
                  <div className="text-slate-500 mt-0.5">{a.phone}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-widest mb-4">
              {locale === "vi" ? "Điều hướng" : "Navigation"}
            </h3>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localePath(item.href)}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold text-xs uppercase tracking-widest mb-4">
              {locale === "vi" ? "Liên hệ" : "Contact"}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-500">
                  {locale === "vi" ? "Kinh doanh: " : "Sales: "}
                </span>
                <a href={`tel:${COMPANY.phone}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-500">
                  {locale === "vi" ? "Nhà máy: " : "Factory: "}
                </span>
                <a href={`tel:${COMPANY.phoneAlt}`} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY.phoneAlt}
                </a>
              </li>
              <li className="pt-1">
                <Link href={localePath("/lien-he")} className="text-slate-300 hover:text-white transition-colors">
                  {COMPANY.email}
                </Link>
              </li>
              <li className="pt-1 text-slate-500">
                {locale === "vi" ? COMPANY.hours : COMPANY.hoursEn}
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <Separator className="bg-slate-800 mb-6" />
        <div className="mb-6">
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-3 text-center">
            {locale === "vi" ? "Đối tác chiến lược" : "Strategic Partners"}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {PARTNERS.map((p) => (
              <span key={p.name} className="text-xs text-slate-500 font-medium">
                {p.name}
                <span className="text-slate-700 ml-1">({p.country})</span>
              </span>
            ))}
          </div>
        </div>

        <Separator className="bg-slate-800 mb-4" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} {locale === "vi" ? COMPANY.legalName : COMPANY.legalNameEn}.{" "}
            {locale === "vi" ? "All rights reserved." : "All rights reserved."}
          </span>
          <span>
            {locale === "vi"
              ? "Xây dựng trên Next.js · Bảo mật ISO 9001:2015"
              : "Built with Next.js · ISO 9001:2015 Certified"}
          </span>
        </div>
      </div>
    </footer>
  );
}
