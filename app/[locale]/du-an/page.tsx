import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, IMAGES } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Dự án / Projects" };

interface PageProps { params: Promise<{ locale: "vi" | "en" }> }

export default async function ProjectsPage({ params }: PageProps) {
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
            <span className="text-slate-300">{isEn ? "Projects" : "Dự án"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Case Studies" : "Dự án tiêu biểu"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            {isEn ? "Projects & Clients" : "Dự án & Khách hàng"}
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {isEn
              ? "Featured projects where Ngu Phuc Steel has been a trusted materials partner."
              : "Những dự án tiêu biểu mà Thép Ngũ Phúc đã đồng hành với tư cách nhà cung cấp vật liệu tin cậy."}
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {PROJECTS.map((proj, i) => (
            <div key={proj.client} id={proj.client.toLowerCase().replace(/\s+/g, "-")}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-3">
                    {isEn ? proj.category.en : proj.category.vi}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">{proj.client}</h2>
                  <p className="text-xs text-slate-400 mb-5">{proj.partner}</p>
                  <Separator className="bg-slate-200 mb-5 w-12" />
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isEn ? proj.descEn : proj.descVi}
                  </p>
                </div>
                <div className={`relative aspect-video rounded overflow-hidden border border-slate-200 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={IMAGES.projects[proj.client] ?? IMAGES.slides[i % IMAGES.slides.length]}
                    alt={proj.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {i < PROJECTS.length - 1 && <Separator className="mt-16 bg-slate-100" />}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            {isEn ? "Become a partner" : "Trở thành đối tác"}
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            {isEn
              ? "We work with FDI manufacturers, shipyards, construction firms, and industrial parks across Vietnam."
              : "Chúng tôi hợp tác với doanh nghiệp FDI, nhà máy đóng tàu, xây dựng và khu công nghiệp trên toàn Việt Nam."}
          </p>
          <Button asChild className="bg-slate-900 hover:bg-slate-700 text-white rounded px-6 h-11 text-sm">
            <Link href={localePath("/lien-he")}>
              {isEn ? "Contact Us" : "Liên hệ hợp tác"}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
