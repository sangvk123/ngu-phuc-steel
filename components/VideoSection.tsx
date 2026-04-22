"use client";
import { useState } from "react";
import { VIDEOS } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

interface VideoSectionProps {
  locale: "vi" | "en";
}

export default function VideoSection({ locale }: VideoSectionProps) {
  const isEn = locale === "en";
  const [activeIdx, setActiveIdx] = useState(0);
  const active = VIDEOS[activeIdx];

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">
            {isEn ? "Video" : "Video nhà máy"}
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {isEn ? "Factory & Operations" : "Nhà máy & Vận hành"}
          </h2>
          <Separator className="mt-4 w-12 bg-slate-700 h-0.5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main video */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-slate-900 rounded overflow-hidden">
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.id}?rel=0&modestbranding=1`}
                title={isEn ? active.titleEn : active.titleVi}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-white text-sm">
                {isEn ? active.titleEn : active.titleVi}
              </h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                {isEn ? active.descEn : active.descVi}
              </p>
            </div>
          </div>

          {/* Video list */}
          <div className="space-y-3">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left p-4 rounded border transition-colors ${
                  i === activeIdx
                    ? "border-slate-400 bg-slate-800"
                    : "border-slate-800 hover:border-slate-600 hover:bg-slate-900"
                }`}
              >
                <div className="flex gap-3 items-start">
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 w-20 h-12 bg-slate-700 rounded overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                      alt={isEn ? v.titleEn : v.titleVi}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-200 leading-snug">
                      {isEn ? v.titleEn : v.titleVi}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
