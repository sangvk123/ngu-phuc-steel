import { MetadataRoute } from "next";
import { GRADE_PRODUCTS } from "@/lib/data";

const BASE_URL = "https://www.nguphucsteel.com.vn";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

interface RouteEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
}

const staticRoutes: RouteEntry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/gioi-thieu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/san-pham", priority: 0.9, changeFrequency: "weekly" },
  { path: "/dich-vu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/du-an", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tin-tuc", priority: 0.7, changeFrequency: "weekly" },
  { path: "/lien-he", priority: 0.6, changeFrequency: "yearly" },
];

const gradeRoutes: RouteEntry[] = GRADE_PRODUCTS.map((p) => ({
  path: `/san-pham/${p.id}`,
  priority: 0.85,
  changeFrequency: "monthly",
}));

const routes: RouteEntry[] = [...staticRoutes, ...gradeRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${BASE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          vi: `${BASE_URL}${route.path}`,
          en: `${BASE_URL}/en${route.path}`,
        },
      },
    });
    entries.push({
      url: `${BASE_URL}/en${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority * 0.9,
      alternates: {
        languages: {
          vi: `${BASE_URL}${route.path}`,
          en: `${BASE_URL}/en${route.path}`,
        },
      },
    });
  }

  return entries;
}
