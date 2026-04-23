import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, PARTNERS, STATS, IMAGES } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Giới thiệu / About" };

interface PageProps { params: Promise<{ locale: "vi" | "en" }> }

export default async function AboutPage({ params }: PageProps) {
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
            <span className="text-slate-300">{isEn ? "About" : "Giới thiệu"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Company" : "Công ty"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {isEn ? "About Ngu Phuc Steel" : "Về Thép Ngũ Phúc"}
          </h1>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
                {isEn ? "Our Story" : "Lịch sử hình thành"}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                {isEn ? "30 Years of Steel Excellence" : "30 năm uy tín trong ngành thép"}
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  {isEn
                    ? "Ngu Phuc Steel Joint Stock Company, based in Hai Phong, has been operating for over 30 years in steel supply, processing, and distribution. We are a leading supplier of steel plates, coils, and structural steel in Northern Vietnam."
                    : "Công ty Cổ phần Thép Ngũ Phúc, đặt tại Hải Phòng, đã có hơn 30 năm hoạt động trong lĩnh vực cung cấp, gia công và phân phối thép. Chúng tôi là nhà cung cấp thép tấm, thép cuộn và thép hình hàng đầu tại miền Bắc Việt Nam."}
                </p>
                <p>
                  {isEn
                    ? "With state-of-the-art equipment — including Vietnam's largest steel coil slitting line — and a team of experienced engineers and technicians, we serve FDI manufacturers, shipyards, automotive plants, and construction companies to international standards."
                    : "Với hệ thống máy móc hiện đại — bao gồm dây chuyền xả băng khổ lớn nhất Việt Nam — và đội ngũ kỹ sư, kỹ thuật viên lành nghề, chúng tôi phục vụ các khách hàng FDI, doanh nghiệp đóng tàu, công nghiệp ô tô và xây dựng với tiêu chuẩn quốc tế."}
                </p>
                <p>
                  {isEn
                    ? "In 2024, Ngu Phuc Steel was certified to ISO 9001:2015 by BSI Group (British Standards Institution), affirming our quality management system meets global standards."
                    : "Năm 2024, Ngũ Phúc Steel được BSI Group (British Standards Institution) cấp chứng nhận ISO 9001:2015, khẳng định hệ thống quản lý chất lượng đạt tiêu chuẩn toàn cầu."}
                </p>
              </div>
            </div>

            <div className="bg-slate-950 rounded text-white p-8">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-6">
                {isEn ? "Company Information" : "Thông tin công ty"}
              </p>
              <dl className="space-y-5">
                {[
                  {
                    label: isEn ? "Legal Name" : "Tên đầy đủ",
                    value: isEn ? COMPANY.legalNameEn : COMPANY.legalName,
                  },
                  { label: isEn ? "Tax ID" : "Mã số thuế", value: COMPANY.taxId },
                  {
                    label: isEn ? "Head Office" : "Trụ sở chính",
                    value: COMPANY.addresses[0].address,
                  },
                  { label: isEn ? "Main Phone" : "Điện thoại", value: COMPANY.phone },
                  {
                    label: isEn ? "Business Hours" : "Giờ làm việc",
                    value: isEn ? COMPANY.hoursEn : COMPANY.hours,
                  },
                  {
                    label: isEn ? "Certification" : "Chứng nhận",
                    value: "ISO 9001:2015 — BSI Group (2024)",
                  },
                ].map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs text-slate-500 mb-1">{row.label}</dt>
                    <dd className="text-slate-200 text-sm font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <Separator className="bg-slate-100 mb-20" />

          {/* Stats */}
          <div className="mb-20">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-8">
              {isEn ? "Key Figures" : "Số liệu chính"}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
              {STATS.map((s) => (
                <div key={s.value} className="bg-white py-10 px-8 text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{s.value}</div>
                  <div className="text-xs text-slate-500 leading-snug">
                    {isEn ? s.labelEn : s.labelVi}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-slate-100 mb-20" />

          {/* Factories */}
          <div className="mb-20">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
              {isEn ? "Facilities" : "Cơ sở sản xuất"}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
              {isEn ? "3 Locations in Hai Phong" : "3 cơ sở tại Hải Phòng"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {COMPANY.addresses.map((a, i) => (
                <div key={a.label} className="border border-slate-200 rounded p-6">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {isEn ? a.labelEn : a.label}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{a.address}</p>
                  <a href={`tel:${a.phone}`} className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
                    {a.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-slate-100 mb-20" />

          {/* Partners */}
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
              {isEn ? "Partners" : "Đối tác"}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
              {isEn ? "Strategic Partners" : "Đối tác chiến lược"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {PARTNERS.map((p) => (
                <div key={p.name} className="border border-slate-200 rounded p-4 flex flex-col items-center gap-2">
                  {IMAGES.partners[p.name] && (
                    <Image
                      src={IMAGES.partners[p.name]}
                      alt={p.name}
                      width={100}
                      height={50}
                      className="object-contain h-10 w-auto partner-logo"
                    />
                  )}
                  <div className="font-semibold text-slate-800 text-xs text-center">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.country}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            {isEn ? "Want to work with us?" : "Muốn hợp tác với chúng tôi?"}
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            {isEn
              ? "Contact our sales team for pricing, technical specifications, and partnership inquiries."
              : "Liên hệ đội ngũ kinh doanh để được tư vấn, báo giá và thảo luận về hợp tác."}
          </p>
          <Button asChild className="bg-slate-900 hover:bg-slate-700 text-white rounded px-6 h-11 text-sm">
            <Link href={localePath("/lien-he")}>
              {isEn ? "Contact Us" : "Liên hệ ngay"}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
