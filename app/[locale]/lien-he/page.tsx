"use client";
import Link from "next/link";
import { useState, use } from "react";
import { COMPANY } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface PageProps { params: Promise<{ locale: "vi" | "en" | "ja" }> }

export default function ContactPage({ params }: PageProps) {
  const { locale } = use(params);
  const isEn = locale === "en";
  const localePath = (href: string) => (isEn ? `/en${href === "/" ? "" : href}` : href);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "", product: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Formspree endpoint — replace FORM_ID with your actual Formspree form ID
      // Sign up free at formspree.io → New Form → copy the form ID
      const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          product: formData.product,
          message: formData.message,
          _subject: `[Ngũ Phúc Steel] Yêu cầu báo giá từ ${formData.company || formData.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <Link href={localePath("/")} className="hover:text-slate-300 transition-colors">
              {isEn ? "Home" : "Trang chủ"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{isEn ? "Contact" : "Liên hệ"}</span>
          </nav>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Get in Touch" : "Liên hệ"}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
            {isEn ? "Contact Us" : "Liên hệ"}
          </h1>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {isEn
              ? "Submit a quote request or contact our sales team. We respond within 24 business hours."
              : "Gửi yêu cầu báo giá hoặc liên hệ trực tiếp với đội ngũ kinh doanh. Phản hồi trong 24 giờ làm việc."}
          </p>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
                {isEn ? "Direct Contact" : "Liên hệ trực tiếp"}
              </p>
              <ul className="space-y-4">
                {[
                  { label: isEn ? "Sales" : "Kinh doanh", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                  { label: isEn ? "Factory" : "Nhà máy", value: COMPANY.phoneAlt, href: `tel:${COMPANY.phoneAlt}` },
                  { label: "Hotline", value: COMPANY.phoneMobile, href: `tel:${COMPANY.phoneMobile}` },
                  { label: "Email", value: COMPANY.email, href: `/lien-he` },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">{c.label}</div>
                      <a href={c.href} className="text-slate-800 text-sm font-medium hover:text-slate-600 transition-colors">
                        {c.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
                {isEn ? "Business Hours" : "Giờ làm việc"}
              </p>
              <p className="text-slate-700 text-sm">
                {isEn ? COMPANY.hoursEn : COMPANY.hours}
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-4">
                {isEn ? "Locations" : "Địa chỉ"}
              </p>
              <div className="space-y-5">
                {COMPANY.addresses.map((a) => (
                  <div key={a.label}>
                    <div className="text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                      {isEn ? a.labelEn : a.label}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{a.address}</p>
                    <a href={`tel:${a.phone}`} className="text-slate-400 text-xs hover:text-slate-700 transition-colors">
                      {a.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-6">
              {isEn ? "Quote Request Form" : "Biểu mẫu yêu cầu báo giá"}
            </p>

            {status === "success" ? (
              <div className="border border-slate-200 rounded p-8 text-center">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isEn ? "Request Received" : "Đã nhận yêu cầu"}
                </h3>
                <p className="text-slate-500 text-sm">
                  {isEn
                    ? "Your request has been received. We will respond within 24 business hours."
                    : "Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc."}
                </p>
              </div>
            ) : status === "error" ? (
              <div className="border border-red-200 bg-red-50 rounded p-8 text-center">
                <h3 className="font-semibold text-red-800 mb-2">
                  {isEn ? "Submission Failed" : "Gửi không thành công"}
                </h3>
                <p className="text-red-600 text-sm mb-4">
                  {isEn
                    ? "Please try again or contact us directly by phone."
                    : "Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold text-red-700 underline"
                >
                  {isEn ? "Try again" : "Thử lại"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5">
                      {isEn ? "Full Name" : "Họ và tên"} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-sm h-10"
                      placeholder={isEn ? "Your full name" : "Nguyễn Văn A"}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-slate-500 mb-1.5">
                      {isEn ? "Company" : "Công ty"} *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-sm h-10"
                      placeholder={isEn ? "Company name" : "Tên công ty"}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs text-slate-500 mb-1.5">
                      {isEn ? "Phone Number" : "Số điện thoại"} *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-sm h-10"
                      placeholder="0901 234 567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded border-slate-300 text-sm h-10"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="block text-xs text-slate-500 mb-1.5">
                    {isEn ? "Product / Service" : "Sản phẩm / Dịch vụ quan tâm"}
                  </label>
                  <Input
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-sm h-10"
                    placeholder={isEn ? "e.g. Steel plates SS400, 10mm" : "VD: Thép tấm SS400, dày 10mm"}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5">
                    {isEn ? "Detailed Requirements" : "Yêu cầu chi tiết"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-sm resize-none"
                    placeholder={
                      isEn
                        ? "Please describe your requirements: quantity, dimensions, standard, delivery location..."
                        : "Mô tả yêu cầu: số lượng, kích thước, tiêu chuẩn, địa điểm giao hàng..."
                    }
                  />
                </div>
                <p className="text-xs text-slate-400">
                  {isEn
                    ? "* Required fields. Your information is used solely to respond to your inquiry."
                    : "* Trường bắt buộc. Thông tin của bạn chỉ được dùng để phản hồi yêu cầu."}
                </p>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-slate-900 hover:bg-slate-700 text-white rounded px-8 h-11 text-sm font-medium w-full sm:w-auto"
                >
                  {status === "submitting"
                    ? (isEn ? "Sending..." : "Đang gửi...")
                    : (isEn ? "Send Request" : "Gửi yêu cầu")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
