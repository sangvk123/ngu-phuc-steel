import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, GRADE_PRODUCTS, COMPANY, IMAGES } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const BASE = "https://www.nguphucsteel.com.vn";

  return {
    title: isEn
      ? "Steel Products – SS400, SAPH440, SPFH590, CR/GI Coils | Ngu Phuc Steel"
      : "Sản phẩm thép – SS400, SAPH440, SPFH590, Thép cuộn CR/GI | Thép Ngũ Phúc",
    description: isEn
      ? "Steel plates (SS400, A36, A515), coated coils (GI, PPGI), automotive steel (SAPH440, SPFH590, CR240LA–CR440LA, DC01–DC06), high-tensile (S700MC, Q460C). Direct import from Nippon Steel, POSCO, JFE."
      : "Thép tấm SS400, A36 | Thép cuộn mạ GI, PPGI | Thép ô tô SAPH440, SPFH590, CR240LA–CR440LA, DC01–DC06, HC180YD–HC450XD | Thép cường độ cao S700MC, Q460C. Nhập khẩu trực tiếp từ Nippon Steel, POSCO, JFE.",
    keywords: isEn
      ? [
          "SS400 steel vietnam", "SAPH440 steel supplier vietnam", "SPFH590 steel coil vietnam",
          "CR240LA CR300LA CR330LA CR420LA CR440LA", "DC01 DC02 DC03 DC04 DC05 DC06 steel coil",
          "HC180YD HC220YD HC260YD HC340XD HC450XD", "DX51D DX52D DX53D DX54D DX56D DX57D",
          "automotive steel coil vietnam", "high tensile steel S700MC Q460C Q550C",
          "galvanized steel coil GI vietnam", "PPGI color coated steel vietnam",
          "steel plate supplier hai phong", "Nippon Steel POSCO JFE distributor vietnam",
        ]
      : [
          "thép tấm SS400 hải phòng", "thép SAPH440 nhà cung cấp", "thép SPFH590 việt nam",
          "thép cuộn CR240LA CR300LA CR330LA", "thép DC01 DC02 DC03 cuộn",
          "thép HC180YD HC220YD mạ kẽm", "thép DX51D DX52D galvanized",
          "thép cuộn ô tô việt nam", "thép cường độ cao S700MC Q460C",
          "thép mạ kẽm GI hải phòng", "tôn mạ màu PPGI",
          "thép tấm cán nóng hải phòng", "nhập khẩu Nippon Steel POSCO JFE",
        ],
    alternates: {
      canonical: isEn ? `${BASE}/en/san-pham` : `${BASE}/san-pham`,
      languages: { vi: `${BASE}/san-pham`, en: `${BASE}/en/san-pham` },
    },
    openGraph: {
      title: isEn
        ? "Steel Products | Ngu Phuc Steel Vietnam"
        : "Sản phẩm thép | Thép Ngũ Phúc Hải Phòng",
      description: isEn
        ? "SS400, SAPH440, CR/GI coils, SPFH590, high-tensile steel. Direct import, ISO 9001:2015."
        : "SS400, SAPH440, thép cuộn CR/GI, SPFH590, thép cường độ cao. Nhập khẩu trực tiếp, ISO 9001:2015.",
      url: isEn ? `${BASE}/en/san-pham` : `${BASE}/san-pham`,
    },
  };
}

interface PageProps { params: Promise<{ locale: "vi" | "en" }> }

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === "en";
  const localePath = (href: string) => (isEn ? `/en${href === "/" ? "" : href}` : href);

  return (
    <>
      <div className="bg-[#060d1a] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href={localePath("/")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Home" : "Trang chủ"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isEn ? "Products" : "Sản phẩm"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Steel Products" : "Sản phẩm thép"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            {isEn ? "Products" : "Sản phẩm"}
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {isEn
              ? "High-quality steel meeting international standards from leading manufacturers in Japan, South Korea, and Taiwan."
              : "Thép chất lượng cao đạt tiêu chuẩn quốc tế từ các nhà sản xuất hàng đầu Nhật Bản, Hàn Quốc, Đài Loan."}
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} id={p.id} className="scroll-mt-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`relative aspect-video rounded overflow-hidden border border-slate-200 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {IMAGES.products[p.id] ? (
                    <Image
                      src={IMAGES.products[p.id]}
                      alt={isEn ? p.nameEn : p.nameVi}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{isEn ? p.nameEn : p.nameVi}</span>
                    </div>
                  )}
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    {isEn ? p.nameEn : p.nameVi}
                  </h2>
                  {isEn !== (locale === "vi") && (
                    <p className="text-slate-400 text-sm mb-4">{isEn ? p.nameVi : p.nameEn}</p>
                  )}
                  <Separator className="bg-slate-200 mb-5 w-12" />
                  <p className="text-slate-600 text-sm leading-relaxed mb-7">
                    {isEn ? p.descEn : p.descVi}
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded p-5 mb-7">
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-widest mb-4">
                      {isEn ? "Technical Specifications" : "Thông số kỹ thuật"}
                    </p>
                    <dl className="space-y-2.5">
                      {p.specs.map((spec) => (
                        <div key={spec.value} className="flex items-start justify-between gap-4 text-sm">
                          <dt className="text-slate-500 text-xs">{isEn ? spec.labelEn : spec.labelVi}</dt>
                          <dd className="font-medium text-slate-800 text-xs text-right">{isEn ? (spec.valueEn ?? spec.value) : spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <Button asChild className="bg-[#1a56a0] hover:bg-[#154a8a] text-white rounded text-sm px-5 h-10">
                    <Link href={localePath("/lien-he")}>
                      {isEn ? "Request a Quote" : "Yêu cầu báo giá"} →
                    </Link>
                  </Button>
                </div>
              </div>
              {i < PRODUCTS.length - 1 && <Separator className="mt-24 bg-slate-100" />}
            </div>
          ))}
        </div>
      </section>

      {/* ─── GRADE-SPECIFIC PAGES ─── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
              {isEn ? "Grade-Specific Products" : "Sản phẩm theo mác thép"}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {isEn ? "Specialty Steel Grades" : "Mác thép chuyên dụng"}
            </h2>
            <Separator className="mt-4 w-12 bg-[#1a56a0] h-0.5" />
            <p className="mt-4 text-sm text-slate-500 max-w-xl">
              {isEn
                ? "Detailed technical specifications, grade comparison tables, and application guides for specialty steel grades."
                : "Thông số kỹ thuật chi tiết, bảng so sánh mác thép và hướng dẫn ứng dụng cho các mác thép chuyên dụng."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GRADE_PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={localePath(`/san-pham/${p.id}`)}
                className="group bg-white border border-slate-200 rounded overflow-hidden hover:border-slate-400 hover:shadow-sm transition-all"
              >
                {p.image && (
                  <div className="relative h-40 bg-slate-100 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={isEn ? p.nameEn : p.nameVi}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm leading-snug">
                    {isEn ? p.nameEn : p.nameVi}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.keyGrades.slice(0, 5).map((g) => (
                      <span key={g} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        {g}
                      </span>
                    ))}
                    {p.keyGrades.length > 5 && (
                      <span className="text-xs text-slate-400">+{p.keyGrades.length - 5}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {isEn ? "View specs →" : "Xem thông số →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-[#060d1a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {isEn ? "Need a different specification?" : "Cần quy cách khác?"}
          </h2>
          <p className="text-slate-400 mb-6 text-sm">
            {isEn
              ? "Contact our technical team for custom specifications and pricing."
              : "Liên hệ đội ngũ kỹ thuật để được tư vấn và báo giá theo yêu cầu riêng."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded text-sm px-6 h-11">
              <Link href={localePath("/lien-he")}>
                {isEn ? "Request a Quote" : "Gửi yêu cầu"}
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded text-sm px-6 h-11">
              <a href={`tel:${COMPANY.phone}`}>
                {isEn ? `Call ${COMPANY.phone}` : `Gọi ${COMPANY.phone}`}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
