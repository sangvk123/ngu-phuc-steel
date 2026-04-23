import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GRADE_PRODUCTS, COMPANY } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ locale: "vi" | "en"; slug: string }>;
}

export function generateStaticParams() {
  const slugs = GRADE_PRODUCTS.map((p) => p.id);
  const locales = ["vi", "en"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const isEn = locale === "en";
  const product = GRADE_PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};

  const BASE = "https://www.nguphucsteel.com.vn";
  const canonicalPath = `/san-pham/${slug}`;

  const gradeList = product.keyGrades.join(", ");
  const titleVi = `${product.nameVi} – ${product.keyGrades.slice(0, 4).join(", ")} | Thép Ngũ Phúc`;
  const titleEn = `${product.nameEn} – ${product.keyGrades.slice(0, 4).join(", ")} | Ngu Phuc Steel`;

  const descVi = `${product.descVi} Các mác: ${gradeList}.`;
  const descEn = `${product.descEn} Grades: ${gradeList}.`;

  return {
    title: isEn ? titleEn : titleVi,
    description: isEn ? descEn : descVi,
    keywords: isEn
      ? [
          ...product.keyGrades.map((g) => `${g} steel vietnam`),
          ...product.keyGrades.map((g) => `${g} supplier hai phong`),
          `${product.nameEn.toLowerCase()} vietnam`,
          "steel coil supplier vietnam",
          "Nippon Steel POSCO JFE distributor vietnam",
        ]
      : [
          ...product.keyGrades.map((g) => `thép ${g}`),
          ...product.keyGrades.map((g) => `${g} hải phòng`),
          `${product.nameVi.toLowerCase()} hải phòng`,
          "nhà cung cấp thép hải phòng",
          "nhập khẩu Nippon Steel POSCO JFE",
        ],
    alternates: {
      canonical: isEn ? `${BASE}/en${canonicalPath}` : `${BASE}${canonicalPath}`,
      languages: {
        vi: `${BASE}${canonicalPath}`,
        en: `${BASE}/en${canonicalPath}`,
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleVi,
      description: isEn ? descEn : descVi,
      url: isEn ? `${BASE}/en${canonicalPath}` : `${BASE}${canonicalPath}`,
      images: product.image ? [{ url: `${BASE}${product.image}` }] : [],
    },
  };
}

export default async function GradeProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const isEn = locale === "en";
  const isJa = locale === "ja";
  const product = GRADE_PRODUCTS.find((p) => p.id === slug);

  if (!product) notFound();

  const localePath = (href: string) => {
    if (isEn) return `/en${href === "/" ? "" : href}`;
    if (isJa) return `/ja${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <>
      {/* ─── HEADER ─── */}
      <div className="bg-[#060d1a] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2 flex-wrap">
            <Link href={localePath("/")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Home" : "Trang chủ"}
            </Link>
            <span>/</span>
            <Link href={localePath("/san-pham")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Products" : "Sản phẩm"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isEn ? product.nameEn : product.nameVi}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Steel Grades" : "Mác thép"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            {isEn ? product.nameEn : product.nameVi}
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm leading-relaxed mb-6">
            {isEn ? product.descEn : product.descVi}
          </p>
          {/* Grade badges */}
          <div className="flex flex-wrap gap-2">
            {product.keyGrades.map((g) => (
              <span
                key={g}
                className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded font-mono"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PRODUCT IMAGE + DESCRIPTION ─── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {product.image && (
              <div className="relative aspect-video rounded overflow-hidden border border-slate-200">
                <Image
                  src={product.image}
                  alt={isEn ? product.nameEn : product.nameVi}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                {isEn ? "Overview" : "Tổng quan"}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                {isEn
                  ? `Why choose Ngu Phuc for ${product.nameEn}?`
                  : `Tại sao chọn Ngũ Phúc cho ${product.nameVi}?`}
              </h2>
              <Separator className="bg-slate-200 mb-5 w-12" />
              <ul className="space-y-3 text-sm text-slate-600">
                {(isEn
                  ? [
                      "Direct import from Nippon Steel, POSCO, JFE — no middlemen",
                      "ISO 9001:2015 certified quality management (BSI audited)",
                      "Vietnam's largest coil slitting line — custom slit widths available",
                      "Experienced technical team for grade selection & consultation",
                      "Nationwide delivery from Hai Phong hub; same-day dispatch available",
                    ]
                  : [
                      "Nhập khẩu trực tiếp từ Nippon Steel, POSCO, JFE — không qua trung gian",
                      "Quản lý chất lượng ISO 9001:2015 (BSI kiểm định)",
                      "Dây chuyền xả băng khổ lớn nhất Việt Nam — cắt theo khổ yêu cầu",
                      "Đội ngũ kỹ thuật giàu kinh nghiệm tư vấn chọn mác phù hợp",
                      "Giao hàng toàn quốc từ hub Hải Phòng, có thể xuất trong ngày",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-[#1a56a0] hover:bg-[#154a8a] text-white rounded text-sm px-5 h-10">
                  <Link href={localePath("/lien-he")}>
                    {isEn ? "Request a Quote →" : "Yêu cầu báo giá →"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRADE SPECS TABLE ─── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-2">
              {isEn ? "Technical Specifications" : "Thông số kỹ thuật"}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {isEn ? "Grade Comparison Table" : "Bảng so sánh mác thép"}
            </h2>
            <Separator className="mt-4 w-12 bg-[#1a56a0] h-0.5" />
          </div>

          <div className="overflow-x-auto rounded border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#060d1a] text-white">
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Grade" : "Mác thép"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Standard" : "Tiêu chuẩn"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Yield (MPa)" : "Giới hạn chảy (MPa)"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Tensile (MPa)" : "Độ bền kéo (MPa)"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Elongation" : "Độ giãn dài"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    {isEn ? "Thickness" : "Độ dày"}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                    {isEn ? "Application" : "Ứng dụng"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.grades.map((g, i) => (
                  <tr
                    key={g.grade}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900 whitespace-nowrap">
                      {g.grade}
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                      {g.standard}
                    </td>
                    <td className="px-4 py-3 text-slate-700 text-xs whitespace-nowrap">
                      {g.yieldMPa}
                    </td>
                    <td className="px-4 py-3 text-slate-700 text-xs whitespace-nowrap">
                      {g.tensileMPa}
                    </td>
                    <td className="px-4 py-3 text-slate-700 text-xs whitespace-nowrap">
                      {g.elongation}
                    </td>
                    <td className="px-4 py-3 text-slate-700 text-xs whitespace-nowrap">
                      {g.thickness}
                    </td>
                    <td className="px-4 py-3 text-slate-600 text-xs">
                      {isEn ? g.applicationEn : g.applicationVi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            {isEn
              ? "Values are typical/minimum per standard. Actual mill certificates provided upon delivery."
              : "Giá trị điển hình/tối thiểu theo tiêu chuẩn. Chứng chỉ nhà máy (mill test report) kèm theo khi giao hàng."}
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-14 px-4 sm:px-6 bg-[#060d1a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {isEn
              ? `Need ${product.nameEn}? Request a quote today.`
              : `Cần ${product.nameVi}? Liên hệ báo giá ngay.`}
          </h2>
          <p className="text-slate-400 mb-6 text-sm">
            {isEn
              ? "Our sales team responds within 4 business hours. Mill certificates and technical datasheets available on request."
              : "Đội ngũ kinh doanh phản hồi trong vòng 4 giờ làm việc. Cung cấp mill test report và datasheet kỹ thuật theo yêu cầu."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded text-sm px-6 h-11">
              <Link href={localePath("/lien-he")}>
                {isEn ? "Request a Quote" : "Gửi yêu cầu báo giá"}
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
