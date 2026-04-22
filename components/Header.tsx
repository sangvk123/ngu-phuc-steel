"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, COMPANY } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      {/* Top bar */}
      <div style={{ background: "var(--primary)" }} className="py-2 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span>
            ☎ <a href={`tel:${COMPANY.phone}`} className="hover:underline">{COMPANY.phone}</a>
            &nbsp;|&nbsp;
            <a href={`tel:${COMPANY.phoneAlt}`} className="hover:underline">{COMPANY.phoneAlt}</a>
          </span>
          <span>
            ✉{" "}
            <a
              href="#lien-he"
              className="hover:underline"
              aria-label="Liên hệ qua email"
            >
              {COMPANY.email}
            </a>
            &nbsp;|&nbsp;{COMPANY.hours}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div
            style={{ background: "var(--primary)" }}
            className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-lg"
          >
            NP
          </div>
          <div>
            <div className="font-bold text-lg leading-tight" style={{ color: "var(--primary)" }}>
              THÉP NGŨ PHÚC
            </div>
            <div className="text-xs text-gray-500">Ngu Phuc Steel Co., Ltd</div>
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 rounded text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && <span className="text-xs">▾</span>}
              </Link>
              {item.children && (
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-b border-t-2 border-red-600 min-w-48 z-50">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/lien-he"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded transition-colors"
          style={{ background: "var(--accent)" }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#b91c1c")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent)")}
        >
          Đăng ký báo giá
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm font-medium text-gray-700 border-b hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-10 py-2 text-sm text-gray-500 border-b hover:bg-red-50 hover:text-red-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
