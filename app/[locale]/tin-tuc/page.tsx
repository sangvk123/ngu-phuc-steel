import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = { title: "Tin tức / News" };

interface PageProps { params: Promise<{ locale: "vi" | "en" | "ja" }> }

const NEWS = [
  {
    slug: "day-chuyen-xa-bang-lon-nhat-viet-nam",
    titleVi: "Ngũ Phúc Steel đưa vào hoạt động dây chuyền xả băng khổ lớn nhất Việt Nam",
    titleEn: "Ngu Phuc Steel Commissions Vietnam's Largest Coil Slitting Line",
    date: "2022-06-15",
    categoryVi: "Tin công ty",
    categoryEn: "Company News",
    excerptVi: "Công ty CP Thép Ngũ Phúc chính thức khánh thành dây chuyền xả băng thế hệ mới 2022 — dây chuyền có khổ rộng lớn nhất Việt Nam hiện nay, nâng cao đáng kể năng lực phục vụ các khách hàng công nghiệp quy mô lớn.",
    excerptEn: "Ngu Phuc Steel formally commissioned its new-generation 2022 coil slitting line — the widest-capacity slitting line in Vietnam — significantly expanding its ability to serve large-scale industrial clients.",
  },
  {
    slug: "chung-nhan-iso-9001-2015",
    titleVi: "Thép Ngũ Phúc được cấp chứng nhận ISO 9001:2015 bởi BSI Group",
    titleEn: "Ngu Phuc Steel Achieves ISO 9001:2015 Certification from BSI Group",
    date: "2024-03-10",
    categoryVi: "Tin công ty",
    categoryEn: "Company News",
    excerptVi: "BSI Group (British Standards Institution) đã chính thức cấp chứng nhận ISO 9001:2015 cho Công ty CP Thép Ngũ Phúc vào năm 2024 sau quá trình đánh giá nghiêm ngặt về hệ thống quản lý chất lượng.",
    excerptEn: "BSI Group (British Standards Institution) officially awarded ISO 9001:2015 certification to Ngu Phuc Steel in 2024 following a rigorous audit of the company's quality management system.",
  },
  {
    slug: "hop-tac-nippon-steel",
    titleVi: "Ký kết hợp tác chiến lược với Nippon Steel — Tập đoàn thép số 1 Nhật Bản",
    titleEn: "Strategic Partnership Signed with Nippon Steel — Japan's Leading Steel Group",
    date: "2021-05-20",
    categoryVi: "Tin công ty",
    categoryEn: "Company News",
    excerptVi: "Ngũ Phúc Steel và Nippon Steel ký kết biên bản ghi nhớ hợp tác chiến lược, mở ra cơ hội tiếp cận nguồn thép chất lượng cao chuẩn Nhật Bản cho thị trường Việt Nam.",
    excerptEn: "Ngu Phuc Steel and Nippon Steel signed a strategic memorandum of understanding, opening direct access to Japanese-grade premium steel for the Vietnamese market.",
  },
  {
    slug: "vinfast-partnership",
    titleVi: "Ngũ Phúc Steel trở thành nhà cung cấp thép chiến lược cho VinFast",
    titleEn: "Ngu Phuc Steel Named Strategic Steel Supplier for VinFast",
    date: "2020-09-01",
    categoryVi: "Dự án",
    categoryEn: "Projects",
    excerptVi: "Ngũ Phúc Steel được chọn làm nhà cung cấp thép cuộn và thép tấm công nghiệp cho nhà máy sản xuất ô tô VinFast tại Hải Phòng — một trong những nhà máy ô tô hiện đại nhất Đông Nam Á.",
    excerptEn: "Ngu Phuc Steel was selected as the industrial coil and plate steel supplier for VinFast's Hai Phong automotive plant — one of Southeast Asia's most modern vehicle manufacturing facilities.",
  },
  {
    slug: "thi-truong-thep-2025",
    titleVi: "Thị trường thép 2025: Xu hướng và triển vọng cho ngành thép Việt Nam",
    titleEn: "Steel Market 2025: Trends and Outlook for Vietnam's Steel Industry",
    date: "2025-01-05",
    categoryVi: "Tin chuyên ngành",
    categoryEn: "Industry News",
    excerptVi: "Phân tích toàn diện thị trường thép năm 2025: biến động giá nguyên liệu từ Nhật Bản, Hàn Quốc; nhu cầu từ các ngành đóng tàu, ô tô và xây dựng hạ tầng tại Việt Nam.",
    excerptEn: "A comprehensive analysis of the 2025 steel market: raw material price movements from Japan and South Korea; demand trends from Vietnam's shipbuilding, automotive, and infrastructure construction sectors.",
  },
  {
    slug: "damen-shipbuilding-supply",
    titleVi: "Ngũ Phúc Steel cung cấp thép cho tổ hợp đóng tàu Damen tại Hải Phòng",
    titleEn: "Ngu Phuc Steel Supplies Steel for Damen's Hai Phong Shipyard",
    date: "2019-08-14",
    categoryVi: "Dự án",
    categoryEn: "Projects",
    excerptVi: "Ngũ Phúc Steel được chọn cung cấp thép tấm SS400 và thép hình cho tổ hợp đóng tàu Damen tại Hải Phòng — một trong những nhà máy đóng tàu lớn nhất Đông Nam Á.",
    excerptEn: "Ngu Phuc Steel was selected to supply SS400 steel plates and structural steel sections for Damen's Hai Phong shipyard — one of Southeast Asia's largest shipbuilding facilities.",
  },
];

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === "en";
  const localePath = (href: string) => (isEn ? `/en${href === "/" ? "" : href}` : href);

  const categories = [
    { vi: "Tất cả", en: "All" },
    { vi: "Tin công ty", en: "Company News" },
    { vi: "Dự án", en: "Projects" },
    { vi: "Tin chuyên ngành", en: "Industry News" },
  ];

  return (
    <>
      <div className="bg-[#060d1a] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href={localePath("/")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Home" : "Trang chủ"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isEn ? "News" : "Tin tức"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Company & Industry" : "Công ty & Ngành thép"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {isEn ? "News & Updates" : "Tin tức & Cập nhật"}
          </h1>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Category filter — visual only for now */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat.vi}
                className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
                  i === 0
                    ? "bg-[#1a56a0] text-white border-[#1a56a0]"
                    : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-800"
                }`}
              >
                {isEn ? cat.en : cat.vi}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map((article) => (
              <article
                key={article.slug}
                className="border border-slate-200 rounded hover:border-slate-400 hover:shadow-sm transition-all flex flex-col"
              >
                {/* Color band by category */}
                <div
                  className={`h-1 rounded-t ${
                    (isEn ? article.categoryEn : article.categoryVi).includes(isEn ? "Company" : "công ty")
                      ? "bg-[#1a56a0]"
                      : (isEn ? article.categoryEn : article.categoryVi).includes(isEn ? "Project" : "Dự án")
                      ? "bg-blue-700"
                      : "bg-slate-500"
                  }`}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {isEn ? article.categoryEn : article.categoryVi}
                    </span>
                    <span className="text-slate-200">·</span>
                    <time className="text-xs text-slate-400">
                      {new Date(article.date).toLocaleDateString(isEn ? "en-GB" : "vi-VN", {
                        day: "2-digit", month: "long", year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="font-semibold text-slate-900 text-sm leading-snug mb-3 flex-1">
                    {isEn ? article.titleEn : article.titleVi}
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {isEn ? article.excerptEn : article.excerptVi}
                  </p>
                  <Separator className="bg-slate-100 mb-4" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    {isEn ? "Read more →" : "Xem thêm →"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
