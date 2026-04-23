import Link from "next/link";
import Image from "next/image";
import { STATS, SERVICES, PRODUCTS, PROJECTS, PARTNERS, COMPANY, IMAGES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/VideoSection";

interface PageProps {
  params: Promise<{ locale: "vi" | "en" | "ja" }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === "en";
  const isJa = locale === "ja";
  const localePath = (href: string) => {
    if (locale === "en") return `/en${href === "/" ? "" : href}`;
    if (locale === "ja") return `/ja${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image — fade in from LEFT */}
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded overflow-hidden hero-fade-left order-2 lg:order-1">
              <Image
                src={IMAGES.services.slitting}
                alt={isJa ? "グーフック鉄鋼 工場" : isEn ? "Ngu Phuc Steel Factory" : "Nhà máy Thép Ngũ Phúc"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs text-slate-400 uppercase tracking-widest font-medium">
                {isJa ? "ハイフォン工場 — 2022年設置" : isEn ? "Factory 2 — An Duong, Hai Phong" : "Nhà máy 2 — An Dương, Hải Phòng"}
              </div>
            </div>

            {/* Text — fade in with slight delay */}
            <div className="hero-fade-left-delay order-1 lg:order-2">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-6 font-medium">
                ISO 9001:2015 · BSI Certified 2024 · Hai Phong, Vietnam
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 tracking-tight">
                {isJa ? (
                  <>北ベトナム最大級<br /><span className="text-slate-300">鉄鋼サプライヤー</span></>
                ) : isEn ? (
                  <>Vietnam&apos;s Premier<br /><span className="text-slate-300">Steel Processor</span></>
                ) : (
                  <>Nhà cung cấp thép<br /><span className="text-slate-300">hàng đầu miền Bắc</span></>
                )}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {isJa
                  ? "創業30年以上の実績を誇る高品質鉄鋼の供給・加工会社。FDI製造業、造船、自動車、建設業に対応。ISO 9001:2015認証取得。"
                  : isEn
                  ? "30 years of experience supplying and processing high-quality steel for FDI manufacturers, shipbuilding, automotive, and construction sectors across Vietnam."
                  : "30 năm kinh nghiệm cung cấp và gia công thép chất lượng cao cho các doanh nghiệp FDI, đóng tàu, công nghiệp ô tô và xây dựng tại Việt Nam."}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 h-11 rounded text-sm">
                  <Link href={localePath("/lien-he")}>
                    {isJa ? "見積もり依頼" : isEn ? "Request a Quote" : "Yêu cầu báo giá"}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-6 h-11 rounded text-sm">
                  <Link href={localePath("/dich-vu")}>
                    {isJa ? "サービス詳細" : isEn ? "View Capabilities" : "Xem năng lực"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
              {STATS.map((s) => (
                <div key={s.value} className="py-8 px-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 leading-snug">
                    {isJa ? s.labelJa : isEn ? s.labelEn : s.labelVi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE CAPABILITIES ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
              {isEn ? "Services" : "Dịch vụ"}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {isEn ? "Core Capabilities" : "Năng lực cốt lõi"}
            </h2>
            <Separator className="mt-4 w-12 bg-slate-900 h-0.5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-8 hover:bg-slate-50 transition-colors">
                <div className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                  {s.id === "supply" ? "01" : s.id === "cut-to-length" ? "02" : "03"}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-3 leading-snug">
                  {isEn ? s.nameEn : s.nameVi}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {isEn ? s.descEn : s.descVi}
                </p>
                <Link
                  href={localePath(`/dich-vu#${s.id}`)}
                  className="text-xs font-semibold text-slate-900 uppercase tracking-wider hover:text-slate-600 transition-colors"
                >
                  {isEn ? "Learn more" : "Tìm hiểu thêm"} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                {isEn ? "Products" : "Sản phẩm"}
              </p>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {isEn ? "Steel Products" : "Danh mục thép"}
              </h2>
              <Separator className="mt-4 w-12 bg-slate-900 h-0.5" />
            </div>
            <Link
              href={localePath("/san-pham")}
              className="text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors hidden sm:block"
            >
              {isEn ? "All products" : "Tất cả sản phẩm"} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={localePath(`/san-pham#${p.id}`)}
                className="group bg-white border border-slate-200 rounded overflow-hidden hover:border-slate-400 hover:shadow-sm transition-all"
              >
                {IMAGES.products[p.id] && (
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <Image
                      src={IMAGES.products[p.id]}
                      alt={isEn ? p.nameEn : p.nameVi}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {isEn ? p.nameEn : p.nameVi}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {isEn ? p.descEn : p.descVi}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.specs.slice(0, 2).map((spec) => (
                      <span key={spec.value} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {isEn ? (spec.valueEn ?? spec.value) : spec.value}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
              {isEn ? "Projects" : "Dự án"}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {isEn ? "Featured Projects" : "Dự án tiêu biểu"}
            </h2>
            <Separator className="mt-4 w-12 bg-slate-900 h-0.5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((proj) => (
              <div
                key={proj.client}
                className="border border-slate-200 rounded p-7 hover:border-slate-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    {isEn ? proj.category.en : proj.category.vi}
                  </span>
                  <span className="text-xs text-slate-400">{proj.partner}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{proj.client}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {isEn ? proj.descEn : proj.descVi}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded text-sm">
              <Link href={localePath("/du-an")}>
                {isEn ? "All projects" : "Xem tất cả dự án"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-medium mb-8">
            {isEn ? "Strategic Partners" : "Đối tác chiến lược"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {PARTNERS.map((p) => (
              IMAGES.partners[p.name] ? (
                <Image
                  key={p.name}
                  src={IMAGES.partners[p.name]}
                  alt={p.name}
                  width={120}
                  height={60}
                  className="object-contain partner-logo"
                />
              ) : (
                <span key={p.name} className="text-sm font-semibold text-slate-400">
                  {p.name}
                </span>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────────── */}
      <VideoSection locale={locale} />

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            {isEn ? "Ready to discuss your requirements?" : "Cần tư vấn hoặc báo giá?"}
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {isEn
              ? "Our technical team is available Monday – Saturday, 07:30 – 17:30. Submit a request or call us directly."
              : "Đội ngũ kỹ thuật sẵn sàng hỗ trợ Thứ 2 – Thứ 7, 07:30 – 17:30. Gửi yêu cầu hoặc liên hệ trực tiếp."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 h-11 rounded text-sm">
              <Link href={localePath("/lien-he")}>
                {isEn ? "Send a Request" : "Gửi yêu cầu"}
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 h-11 rounded text-sm">
              <a href={`tel:${COMPANY.phone}`}>
                {isEn ? "Call Sales Team" : `Gọi ${COMPANY.phone}`}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
