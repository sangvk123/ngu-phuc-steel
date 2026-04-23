import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, IMAGES } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Dịch vụ / Services" };

interface PageProps { params: Promise<{ locale: "vi" | "en" | "ja" }> }

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === "en";
  const isJa = locale === "ja";
  const localePath = (href: string) => {
    if (isEn) return `/en${href === "/" ? "" : href}`;
    if (isJa) return `/ja${href === "/" ? "" : href}`;
    return href;
  };

  return (
    <>
      <div className="bg-[#060d1a] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href={localePath("/")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Home" : "Trang chủ"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isEn ? "Services" : "Dịch vụ"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Processing & Supply" : "Gia công & Cung cấp"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            {isEn ? "Services" : "Dịch vụ"}
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {isEn
              ? "Rigorous processing procedures and quality control to ISO 9001:2015 — serving FDI manufacturers, shipbuilders, and construction companies."
              : "Quy trình gia công nghiêm ngặt và kiểm soát chất lượng theo ISO 9001:2015 — phục vụ doanh nghiệp FDI, đóng tàu và xây dựng."}
          </p>
        </div>
      </div>

      {/* Hero feature: Slitting Line */}
      <section className="py-20 px-4 sm:px-6 bg-[#060d1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
                {isEn ? "Flagship Capability" : "Năng lực nổi bật"}
              </p>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                {isEn ? "Vietnam's Largest Coil Slitting Line" : "Dây chuyền xả băng lớn nhất Việt Nam"}
              </h2>
              <Separator className="bg-slate-700 mb-6 w-12" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {isEn
                  ? "Installed in 2022, our state-of-the-art coil slitting line offers the widest processing capacity in Vietnam. Capable of delivering precise, clean-cut coils for demanding industrial applications."
                  : "Được lắp đặt vào năm 2022, dây chuyền xả băng hiện đại của chúng tôi có khổ rộng lớn nhất Việt Nam. Cung cấp cuộn thép cắt chính xác, bề mặt sạch cho các ứng dụng công nghiệp khắt khe."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: isEn ? "Technology" : "Công nghệ", value: "2022" },
                  { label: isEn ? "Capacity" : "Năng lực", value: isEn ? "Largest in VN" : "Lớn nhất VN" },
                  { label: isEn ? "Surface" : "Bề mặt", value: isEn ? "Clean finish" : "Bề mặt sạch" },
                  { label: isEn ? "Output" : "Sản lượng", value: isEn ? "1000s t/month" : "Nghìn tấn/tháng" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-slate-700 rounded p-4">
                    <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                    <div className="font-semibold text-slate-200 text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded overflow-hidden border border-slate-700">
              <Image
                src={IMAGES.services.slitting}
                alt={isEn ? "Slitting Line — Factory 2, An Duong" : "Dây chuyền xả băng — Nhà máy 2, An Dương"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {SERVICES.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "" : ""}`}>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                    {isEn ? s.nameEn : s.nameVi}
                  </h2>
                  <Separator className="bg-slate-200 mb-5 w-12" />
                  <p className="text-slate-600 text-sm leading-relaxed mb-7">
                    {isEn ? s.descEn : s.descVi}
                  </p>
                  <ul className="space-y-3">
                    {(isEn ? s.detailsEn : s.detailsVi).map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-0.5 w-4 h-4 border border-slate-300 rounded-sm flex items-center justify-center flex-shrink-0">
                          <span className="w-1.5 h-1.5 bg-slate-700 rounded-sm block" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-video rounded overflow-hidden border border-slate-200">
                  {IMAGES.services[s.id] ? (
                    <Image
                      src={IMAGES.services[s.id]}
                      alt={isEn ? s.nameEn : s.nameVi}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{isEn ? s.nameEn : s.nameVi}</span>
                    </div>
                  )}
                </div>
              </div>
              {i < SERVICES.length - 1 && <Separator className="mt-20 bg-slate-100" />}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
              {isEn ? "Workflow" : "Quy trình"}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {isEn ? "How We Work" : "Quy trình làm việc"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "01", vi: "Tiếp nhận yêu cầu", en: "Requirement Intake", subVi: "Nhận thông số kỹ thuật", subEn: "Receive technical specs" },
              { n: "02", vi: "Tư vấn & Báo giá", en: "Consultation & Quote", subVi: "Đề xuất vật liệu, báo giá", subEn: "Material selection & pricing" },
              { n: "03", vi: "Gia công & Kiểm tra", en: "Processing & QC", subVi: "Theo tiêu chuẩn ISO", subEn: "To ISO 9001:2015 standard" },
              { n: "04", vi: "Giao hàng", en: "Delivery", subVi: "Toàn quốc, đúng tiến độ", subEn: "Nationwide, on-schedule" },
            ].map((step) => (
              <div key={step.n} className="bg-white border border-slate-200 rounded p-5">
                <div className="text-2xl font-bold text-slate-200 mb-3">{step.n}</div>
                <div className="font-semibold text-slate-800 text-sm mb-1.5">
                  {isEn ? step.en : step.vi}
                </div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  {isEn ? step.subEn : step.subVi}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-[#1a56a0] hover:bg-[#154a8a] text-white rounded px-6 h-11 text-sm">
              <Link href={localePath("/lien-he")}>
                {isEn ? "Request a Service" : "Yêu cầu dịch vụ"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
