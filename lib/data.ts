export const VIDEOS = [
  {
    id: "xzu3z9kjIqA",
    titleVi: "Máy cắt cuộn Inox 304 tại nhà máy Ngũ Phúc — Hải Phòng",
    titleEn: "Inox 304 Coil Slitting Machine at Ngu Phuc Factory — Hai Phong",
    descVi: "Dây chuyền cắt cuộn Inox 304 hiện đại tại nhà máy Ngũ Phúc, Hải Phòng.",
    descEn: "Modern Inox 304 coil slitting line at Ngu Phuc's Hai Phong factory.",
  },
  {
    id: "WN7EUp1jWj0",
    titleVi: "Phóng sự công nghiệp phụ trợ — Thép Ngũ Phúc",
    titleEn: "Supporting Industry Documentary — Ngu Phuc Steel",
    descVi: "Phóng sự công nghiệp phụ trợ về Công ty Cổ phần Thép Ngũ Phúc.",
    descEn: "Documentary on Ngu Phuc Steel's role in Vietnam's supporting industries.",
  },
];

export const IMAGES = {
  logo: "/images/logo/logo-ngu-phuc.png",
  slides: [
    "/images/slides/slide-1.jpg",
    "/images/slides/slide-2.jpg",
    "/images/slides/slide-3.jpg",
    "/images/slides/slide-4.jpg",
    "/images/slides/slide-5.jpg",
  ],
  products: {
    "thep-cuon-ma": "/images/products/thep-cuon-ma.jpg",
    "thep-cay": "/images/products/thep-cay.jpg",
    "thep-tam": "/images/products/thep-tam.jpg",
    "thep-hinh": "/images/products/thep-hinh.jpg",
    "thep-tam-kien": "/images/products/thep-tam-kien.jpg",
    "thep-ma-mau": "/images/products/thep-ma-mau.jpg",
  } as Record<string, string>,
  services: {
    supply: "/images/services/nha-may.jpg",
    "cut-to-length": "/images/services/cat-tam.jpg",
    slitting: "/images/services/xa-bang.jpg",
  } as Record<string, string>,
  partners: {
    "Nippon Steel": "/images/partners/nippon.jpg",
    "Hyundai Steel": "/images/partners/hyundai.jpg",
    "Hoa Sen Group": "/images/partners/hoasen.jpg",
    "Rizhao Steel": "/images/partners/rizhao.jpg",
    "Kobelco Steel": "/images/partners/kobelco.jpg",
    "JFE Steel": "/images/partners/jfe.jpg",
    "Bao Steel": "/images/partners/baosteel.jpg",
    "POSCO": "/images/partners/posco.jpg",
    "CSC Steel": "/images/partners/csc.jpg",
    "Hòa Phát": "/images/partners/hoaphat.jpg",
  } as Record<string, string>,
};

export const COMPANY = {
  name: "Thép Ngũ Phúc",
  nameEn: "Ngu Phuc Steel",
  legalName: "Công ty Cổ phần Thép Ngũ Phúc",
  legalNameEn: "Ngu Phuc Steel Joint Stock Company",
  taxId: "0201844229",
  phone: "0225.268.3939",
  phoneAlt: "0225.353.8831",
  phoneMobile: "0912.940.921",
  email: "pkd@nguphuc.com.vn",
  emailAlt: "nee@nguphuc.com.vn",
  hours: "07:30 – 17:30, Thứ 2 – Thứ 7",
  hoursEn: "07:30 – 17:30, Monday – Saturday",
  facebook: "https://www.facebook.com/thepnguphuc/",
  addresses: [
    {
      label: "Trụ sở chính",
      labelEn: "Head Office",
      address: "7/3B Lê Hồng Phong, Ngô Quyền, Hải Phòng",
      phone: "0225.3761.768",
    },
    {
      label: "Nhà máy 1",
      labelEn: "Factory 1",
      address: "348 Hà Nội, Hồng Bàng, Hải Phòng",
      phone: "0225.353.8831",
    },
    {
      label: "Nhà máy 2",
      labelEn: "Factory 2",
      address: "Lô B-23, KCN An Dương, Hồng Phong, An Dương, Hải Phòng",
      phone: "0225.268.3939",
    },
  ],
};

export const NAV = [
  { key: "home", href: "/" },
  { key: "about", href: "/gioi-thieu" },
  {
    key: "products", href: "/san-pham",
    children: [
      { labelVi: "Thép cuộn mạ", labelEn: "Coated Steel Coils", href: "/san-pham#thep-cuon-ma" },
      { labelVi: "Thép cây", labelEn: "Steel Bars", href: "/san-pham#thep-cay" },
      { labelVi: "Thép tấm", labelEn: "Steel Plates", href: "/san-pham#thep-tam" },
      { labelVi: "Thép hình", labelEn: "Structural Steel", href: "/san-pham#thep-hinh" },
      { labelVi: "Thép tấm kiện", labelEn: "Packaged Sheets", href: "/san-pham#thep-tam-kien" },
      { labelVi: "Thép mạ màu", labelEn: "Color Coated Steel", href: "/san-pham#thep-ma-mau" },
    ],
  },
  {
    key: "services", href: "/dich-vu",
    children: [
      { labelVi: "Cung cấp thép tấm & cuộn", labelEn: "Steel Supply", href: "/dich-vu#supply" },
      { labelVi: "Dây chuyền cắt tấm", labelEn: "Cut-to-Length", href: "/dich-vu#cut-to-length" },
      { labelVi: "Dây chuyền xả băng", labelEn: "Coil Slitting", href: "/dich-vu#slitting" },
    ],
  },
  { key: "projects", href: "/du-an" },
  { key: "contact", href: "/lien-he" },
];

export const STATS = [
  { value: "30+", labelVi: "Năm hoạt động", labelEn: "Years of Operation" },
  { value: "10", labelVi: "Đối tác quốc tế", labelEn: "International Partners" },
  { value: "#1", labelVi: "Dây chuyền xả băng lớn nhất VN", labelEn: "Largest Slitting Line in VN" },
  { value: "ISO", labelVi: "9001:2015 Certified", labelEn: "9001:2015 Certified" },
];

export const PRODUCTS = [
  {
    id: "thep-cuon-ma",
    nameVi: "Thép Cuộn Mạ",
    nameEn: "Coated Steel Coils",
    descVi: "Nhập khẩu trực tiếp từ Nhật Bản, Hàn Quốc, Đài Loan. Cung cấp dạng cuộn nguyên hoặc cắt theo yêu cầu, đạt tiêu chuẩn JIS G3302 và ASTM A653.",
    descEn: "Directly imported from Japan, South Korea, and Taiwan. Supplied as full coils or cut-to-size, meeting JIS G3302 and ASTM A653 standards.",
    specs: [
      { labelVi: "Độ dày", labelEn: "Thickness", value: "0.3 – 3.0 mm" },
      { labelVi: "Chiều rộng", labelEn: "Width", value: "600 – 1,500 mm" },
      { labelVi: "Tiêu chuẩn", labelEn: "Standard", value: "JIS G3302 / ASTM A653" },
    ],
  },
  {
    id: "thep-cay",
    nameVi: "Thép Cây",
    nameEn: "Steel Bars & Rebar",
    descVi: "Thép cây xây dựng và công nghiệp đa dạng quy cách. Đáp ứng tiêu chuẩn TCVN 1651 và ASTM A615 với giá cả cạnh tranh.",
    descEn: "Construction and industrial steel bars in various sizes. Meets TCVN 1651 and ASTM A615 standards at competitive pricing.",
    specs: [
      { labelVi: "Đường kính", labelEn: "Diameter", value: "Φ6 – Φ50 mm" },
      { labelVi: "Chiều dài", labelEn: "Length", value: "6 m / 9 m / 11.7 m" },
      { labelVi: "Tiêu chuẩn", labelEn: "Standard", value: "TCVN 1651 / ASTM A615" },
    ],
  },
  {
    id: "thep-tam",
    nameVi: "Thép Tấm",
    nameEn: "Steel Plates",
    descVi: "Thép tấm cán nóng và cán nguội đạt tiêu chuẩn SS400, A515, A36, C45. Ứng dụng trong cơ khí nặng, đóng tàu và kết cấu thép.",
    descEn: "Hot-rolled and cold-rolled steel plates to SS400, A515, A36, C45 standards. Applications in heavy machinery, shipbuilding, and structural steel.",
    specs: [
      { labelVi: "Độ dày", labelEn: "Thickness", value: "1.5 – 100 mm" },
      { labelVi: "Kích thước", labelEn: "Size", value: "1,000×2,000 – 3,000×12,000 mm" },
      { labelVi: "Tiêu chuẩn", labelEn: "Standard", value: "SS400 / A515 / A36 / C45" },
    ],
  },
  {
    id: "thep-hinh",
    nameVi: "Thép Hình",
    nameEn: "Structural Steel",
    descVi: "Thép hình I, H, U, V, L phục vụ kết cấu nhà công nghiệp, cầu đường và cảng biển. Đạt chuẩn JIS A5526 và ASTM A36.",
    descEn: "I, H, U, V, L structural sections for industrial buildings, bridges, and port structures. Compliant with JIS A5526 and ASTM A36.",
    specs: [
      { labelVi: "Loại thép hình", labelEn: "Section Types", value: "I / H / U / V / L" },
      { labelVi: "Chiều dài", labelEn: "Length", value: "6 – 12 m" },
      { labelVi: "Tiêu chuẩn", labelEn: "Standard", value: "JIS A5526 / ASTM A36" },
    ],
  },
  {
    id: "thep-tam-kien",
    nameVi: "Thép Tấm Kiện",
    nameEn: "Packaged Steel Sheets",
    descVi: "Thép tấm trơn, tấm gân, cán nguội, cán nóng và thép mạ kẽm nhúng nóng (GI). Cung cấp gia công theo yêu cầu.",
    descEn: "Plain sheets, ribbed sheets, cold-rolled, hot-rolled, and hot-dip galvanized (GI) steel. Custom processing available.",
    specs: [
      { labelVi: "Chủng loại", labelEn: "Types", value: "Tấm trơn / Tấm gân / GI" },
      { labelVi: "Xử lý bề mặt", labelEn: "Surface", value: "Cán nguội / Cán nóng / Mạ kẽm" },
      { labelVi: "Gia công", labelEn: "Processing", value: "Cắt theo yêu cầu" },
    ],
  },
  {
    id: "thep-ma-mau",
    nameVi: "Thép Mạ Màu",
    nameEn: "Color Coated Steel",
    descVi: "Tôn mạ màu bền đẹp, đa dạng màu sắc theo tiêu chuẩn RAL. Chống ăn mòn cấp độ cao, phù hợp cho mái và tường nhà xưởng.",
    descEn: "Durable color-coated steel in a wide range of RAL colors. High corrosion resistance, suitable for industrial roofing and cladding.",
    specs: [
      { labelVi: "Độ dày", labelEn: "Thickness", value: "0.3 – 0.8 mm" },
      { labelVi: "Màu sắc", labelEn: "Colors", value: "Theo tiêu chuẩn RAL" },
      { labelVi: "Chống ăn mòn", labelEn: "Corrosion", value: "Cấp độ cao / High Grade" },
    ],
  },
];

export const SERVICES = [
  {
    id: "supply",
    nameVi: "Cung cấp Thép Tấm & Cuộn",
    nameEn: "Steel Plate & Coil Supply",
    descVi: "Một trong những đơn vị hàng đầu nhập khẩu và phân phối thép tấm, thép cuộn tại miền Bắc Việt Nam. Đối tác chiến lược của Nippon Steel, Daito và Sakai.",
    descEn: "One of Northern Vietnam's leading importers and distributors of steel plates and coils. Strategic partner of Nippon Steel, Daito, and Sakai.",
    detailsVi: [
      "Nhập khẩu trực tiếp từ Nhật Bản, Hàn Quốc, Đài Loan và Trung Quốc",
      "Kiểm soát chất lượng theo tiêu chuẩn ISO 9001:2015",
      "Giao hàng toàn quốc, đúng tiến độ cam kết",
      "Tư vấn lựa chọn vật liệu theo yêu cầu kỹ thuật",
    ],
    detailsEn: [
      "Direct import from Japan, South Korea, Taiwan, and China",
      "Quality control per ISO 9001:2015",
      "Nationwide delivery, on-schedule commitment",
      "Material selection consulting based on technical requirements",
    ],
  },
  {
    id: "cut-to-length",
    nameVi: "Dây Chuyền Cắt Tấm",
    nameEn: "Cut-to-Length Processing",
    descVi: "Hệ thống dây chuyền cắt tấm hiện đại với độ chính xác cao, xử lý mọi độ dày từ 0.3mm đến 14mm theo bản vẽ kỹ thuật.",
    descEn: "High-precision cut-to-length processing line handling all thicknesses from 0.3mm to 14mm to technical drawings.",
    detailsVi: [
      "Cắt thẳng và cắt xéo theo bản vẽ kỹ thuật",
      "Phạm vi độ dày: 0.3 mm – 14 mm",
      "Chiều rộng tối đa: 2,000 mm",
      "Kiểm soát chất lượng tự động",
    ],
    detailsEn: [
      "Straight and diagonal cuts to technical drawings",
      "Thickness range: 0.3 mm – 14 mm",
      "Maximum width: 2,000 mm",
      "Automated quality control",
    ],
  },
  {
    id: "slitting",
    nameVi: "Dây Chuyền Xả Băng (2022)",
    nameEn: "Coil Slitting Line (2022)",
    descVi: "Dây chuyền xả băng khổ lớn nhất Việt Nam — công nghệ 2022. Năng lực vượt trội phục vụ các dự án công nghiệp quy mô lớn với độ chính xác và hiệu suất cao nhất.",
    descEn: "Vietnam's largest-capacity coil slitting line — 2022 technology. Superior capability serving large-scale industrial projects with maximum precision and throughput.",
    detailsVi: [
      "Khổ rộng lớn nhất Việt Nam — dẫn đầu thị trường",
      "Công nghệ 2022, độ chính xác cao",
      "Xả băng không biến dạng, bề mặt sạch",
      "Năng lực xử lý hàng nghìn tấn mỗi tháng",
    ],
    detailsEn: [
      "Vietnam's widest slitting capacity — market-leading",
      "2022 technology, high precision",
      "Non-deforming slitting, clean surface finish",
      "Processing capacity of thousands of tonnes per month",
    ],
  },
];

export const PROJECTS = [
  {
    client: "Damen Shipbuilding",
    category: { vi: "Đóng tàu", en: "Shipbuilding" },
    descVi: "Cung cấp thép tấm SS400 và thép hình cho tổ hợp đóng tàu Damen tại Hải Phòng — một trong những nhà máy đóng tàu lớn nhất Đông Nam Á.",
    descEn: "Supply of SS400 steel plates and structural steel for Damen's Hai Phong shipyard — one of Southeast Asia's largest shipbuilding facilities.",
    partner: "Damen Group (Netherlands)",
  },
  {
    client: "VinFast",
    category: { vi: "Công nghiệp ô tô", en: "Automotive" },
    descVi: "Cung cấp thép cuộn và thép tấm công nghiệp cho nhà máy sản xuất ô tô VinFast tại Hải Phòng.",
    descEn: "Supply of steel coils and industrial plates for VinFast's automotive manufacturing plant in Hai Phong.",
    partner: "VinFast (Vietnam)",
  },
  {
    client: "VinGroup",
    category: { vi: "Bất động sản & Xây dựng", en: "Real Estate & Construction" },
    descVi: "Cung cấp vật liệu thép cho các dự án xây dựng thương mại và khu đô thị của tập đoàn VinGroup trên toàn quốc.",
    descEn: "Supply of steel materials for VinGroup's commercial and urban development projects nationwide.",
    partner: "VinGroup (Vietnam)",
  },
  {
    client: "VSIP",
    category: { vi: "Khu công nghiệp", en: "Industrial Park" },
    descVi: "Đối tác cung cấp thép xây dựng và thép kết cấu cho các nhà máy trong Khu công nghiệp Việt Nam – Singapore (VSIP).",
    descEn: "Supplier of construction and structural steel for factories within the Vietnam – Singapore Industrial Park (VSIP).",
    partner: "Vietnam – Singapore Industrial Park",
  },
];

export const PARTNERS = [
  { name: "Nippon Steel", country: "Japan" },
  { name: "Hyundai Steel", country: "South Korea" },
  { name: "POSCO", country: "South Korea" },
  { name: "JFE Steel", country: "Japan" },
  { name: "Kobelco Steel", country: "Japan" },
  { name: "Bao Steel", country: "China" },
  { name: "Rizhao Steel", country: "China" },
  { name: "CSC Steel", country: "Taiwan" },
  { name: "Hoa Sen Group", country: "Vietnam" },
  { name: "Hòa Phát", country: "Vietnam" },
];
