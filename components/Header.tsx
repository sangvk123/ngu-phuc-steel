"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV, COMPANY } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Locale = "vi" | "en" | "ja";

interface HeaderProps {
  locale: Locale;
}

const LABELS: Record<string, Record<string, string>> = {
  home:     { vi: "Trang chủ",       en: "Home",          ja: "ホーム" },
  about:    { vi: "Giới thiệu",      en: "About",         ja: "会社概要" },
  products: { vi: "Sản phẩm",        en: "Products",      ja: "製品" },
  services: { vi: "Dịch vụ",         en: "Services",      ja: "サービス" },
  projects: { vi: "Dự án",           en: "Projects",      ja: "プロジェクト" },
  contact:  { vi: "Liên hệ",         en: "Contact",       ja: "お問い合わせ" },
  quote:    { vi: "Yêu cầu báo giá", en: "Request Quote", ja: "見積もり依頼" },
};

const LANGS = [
  { code: "vi", flag: "🇻🇳", label: "Tiếng Việt" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
] as const;

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const t = (key: string) => LABELS[key]?.[locale] ?? key;

  const localePath = (href: string) => {
    if (locale === "en") return `/en${href === "/" ? "" : href}`;
    if (locale === "ja") return `/ja${href === "/" ? "" : href}`;
    return href;
  };

  const switchLocalePath = (targetLocale: string) => {
    let base = pathname;
    if (base.startsWith("/en")) base = base.slice(3) || "/";
    if (base.startsWith("/ja")) base = base.slice(3) || "/";
    if (targetLocale === "vi") return base || "/";
    return `/${targetLocale}${base === "/" ? "" : base}`;
  };

  const currentLang = LANGS.find((l) => l.code === locale) ?? LANGS[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navChildLabel = (child: { labelVi: string; labelEn: string }) =>
    locale === "vi" ? child.labelVi : child.labelEn;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#060d1a] text-slate-300 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
              {COMPANY.phone}
            </a>
            <span className="text-slate-700 hidden sm:block">·</span>
            <a href={`tel:${COMPANY.phoneMobile}`} className="hidden sm:block hover:text-white transition-colors">
              {COMPANY.phoneMobile}
            </a>
            <span className="text-slate-700 hidden md:block">·</span>
            <span className="hidden md:block text-slate-500">
              {locale === "vi" ? COMPANY.hours : locale === "ja" ? "月〜土 07:30–17:30" : COMPANY.hoursEn}
            </span>
          </div>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 font-medium text-slate-300 hover:text-white transition-colors border border-slate-600 hover:border-slate-400 px-2.5 py-0.5 rounded text-xs"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.code.toUpperCase()}</span>
              <svg className="w-2.5 h-2.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-slate-200 rounded shadow-lg z-50 min-w-36 overflow-hidden">
                {LANGS.map((l) => (
                  <Link
                    key={l.code}
                    href={switchLocalePath(l.code)}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 text-xs transition-colors ${
                      l.code === locale
                        ? "bg-slate-50 font-semibold text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-sm">{l.flag}</span>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={localePath("/")} className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo/logo-ngu-phuc-round.png"
              alt={locale === "vi" ? "Thép Ngũ Phúc" : locale === "ja" ? "グーフックスチール" : "Ngu Phuc Steel"}
              width={40}
              height={52}
              className="object-contain h-11 w-auto"
              priority
            />
            <div>
              <div className="font-bold text-slate-900 text-sm leading-tight tracking-tight">
                {locale === "vi" ? "THÉP NGŨ PHÚC" : locale === "ja" ? "グーフック スチール" : "NGU PHUC STEEL"}
              </div>
              <div className="text-slate-400 text-xs">
                {locale === "vi" ? "Cung cấp & Gia công thép" : locale === "ja" ? "鉄鋼供給・加工" : "Steel Supply & Processing"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={localePath(item.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded flex items-center gap-1"
                >
                  {t(item.key)}
                  {"children" in item && item.children && (
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {"children" in item && item.children && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 shadow-lg rounded-b z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localePath(child.href)}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors border-b border-slate-100 last:border-0"
                      >
                        {navChildLabel(child)}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="bg-[#1a56a0] hover:bg-[#154a8a] text-white text-sm font-medium rounded">
              <Link href={localePath("/lien-he")}>{t("quote")}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            {NAV.map((item) => (
              <div key={item.key}>
                <Link
                  href={localePath(item.href)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
                {"children" in item && item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localePath(child.href)}
                        className="block px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded"
                        onClick={() => setMobileOpen(false)}
                      >
                        {navChildLabel(child)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Separator className="my-2" />
            <Button asChild className="w-full bg-[#1a56a0] hover:bg-[#154a8a] text-white text-sm rounded">
              <Link href={localePath("/lien-he")} onClick={() => setMobileOpen(false)}>
                {t("quote")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
