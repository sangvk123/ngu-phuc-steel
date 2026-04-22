import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS, COMPANY } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Sản phẩm / Products" };

interface PageProps { params: Promise<{ locale: "vi" | "en" }> }

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === "en";
  const localePath = (href: string) => (isEn ? `/en${href === "/" ? "" : href}` : href);

  return (
    <>
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6">
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
                {/* Image placeholder */}
                <div
                  className={`aspect-video bg-slate-100 rounded flex items-center justify-center border border-slate-200 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="text-center">
                    <div className="text-slate-300 text-xs uppercase tracking-widest font-medium mb-2">
                      {isEn ? "Image placeholder" : "Ảnh minh họa"}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">
                      {isEn ? p.nameEn : p.nameVi}
                    </div>
                    <div className="text-slate-300 text-xs mt-1">
                      {isEn ? "Replace with actual product photo" : "Thay bằng ảnh sản phẩm thực tế"}
                    </div>
                  </div>
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
                          <dd className="font-medium text-slate-800 text-xs text-right">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <Button asChild className="bg-slate-900 hover:bg-slate-700 text-white rounded text-sm px-5 h-10">
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

      <section className="py-14 px-4 sm:px-6 bg-slate-950 text-white text-center">
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
