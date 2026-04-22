export const COMPANY = {
  name: "Thép Ngũ Phúc",
  nameEn: "Ngu Phuc Steel",
  tagline: "Dây chuyền xả băng khổ lớn nhất Việt Nam",
  taxId: "0201844229",
  email: "pkd@nguphuc.com.vn",
  emailAlt: "nee@nguphuc.com.vn",
  phone: "0225.268.3939",
  phoneAlt: "0225.353.8831",
  phoneMobile: "0912.940.921",
  phoneCEO: "090.42.777.99",
  hours: "7h30 – 17h30 | Thứ 2 – Thứ 7",
  facebook: "https://www.facebook.com/thepnguphuc/",
  addresses: [
    {
      label: "Trụ sở chính",
      address: "7/3B Lê Hồng Phong, Ngô Quyền, Hải Phòng",
    },
    {
      label: "Nhà máy 1",
      address: "348 Hà Nội, Hồng Bàng, Hải Phòng",
    },
    {
      label: "Nhà máy 2",
      address: "Lô B-23, KCN An Dương, Hồng Phong, An Dương, Hải Phòng",
    },
  ],
};

export const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      { label: "Thép cuộn mạ", href: "/san-pham#thep-cuon-ma" },
      { label: "Thép cây", href: "/san-pham#thep-cay" },
      { label: "Thép tấm", href: "/san-pham#thep-tam" },
      { label: "Thép hình", href: "/san-pham#thep-hinh" },
      { label: "Thép tấm kiện", href: "/san-pham#thep-tam-kien" },
      { label: "Thép mạ màu", href: "/san-pham#thep-ma-mau" },
    ],
  },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    children: [
      { label: "Cung cấp thép tấm & cuộn", href: "/dich-vu#cung-cap" },
      { label: "Dây chuyền cắt tấm", href: "/dich-vu#cat-tam" },
      { label: "Dây chuyền xả băng 2022", href: "/dich-vu#xa-bang" },
    ],
  },
  { label: "Dự án", href: "/du-an" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const PRODUCTS = [
  {
    id: "thep-cuon-ma",
    name: "Thép Cuộn Mạ",
    nameEn: "Coated Steel Coils",
    desc: "Nhập khẩu trực tiếp từ Nhật Bản, Đài Loan, Trung Quốc. Cung cấp dạng cuộn nguyên hoặc cắt theo yêu cầu.",
    specs: ["Độ dày: 0.3mm – 3.0mm", "Chiều rộng: 600 – 1,500mm", "Tiêu chuẩn: JIS G3302, ASTM A653"],
    icon: "🔩",
  },
  {
    id: "thep-cay",
    name: "Thép Cây",
    nameEn: "Steel Bars",
    desc: "Đa dạng quy cách, giá cả cạnh tranh thị trường. Phù hợp cho xây dựng và công nghiệp.",
    specs: ["Đường kính: Φ6 – Φ50mm", "Chiều dài: 6m, 9m, 11.7m", "Tiêu chuẩn: TCVN 1651, ASTM A615"],
    icon: "⚙️",
  },
  {
    id: "thep-tam",
    name: "Thép Tấm",
    nameEn: "Steel Plates",
    desc: "Thép tấm cán nóng, cán nguội đạt các tiêu chuẩn quốc tế. Ứng dụng rộng rãi trong công nghiệp nặng.",
    specs: ["Độ dày: 1.5mm – 100mm", "Kích thước: 1,000×2,000 – 3,000×12,000mm", "Tiêu chuẩn: SS400, A515, A36, C45"],
    icon: "🏗️",
  },
  {
    id: "thep-hinh",
    name: "Thép Hình",
    nameEn: "Structural Steel",
    desc: "Thép hình I, H, U, V, L phục vụ kết cấu thép nhà công nghiệp, cầu, cảng.",
    specs: ["Loại: I, H, U, V, L beam", "Chiều dài tiêu chuẩn: 6m – 12m", "Tiêu chuẩn: JIS A5526, ASTM A36"],
    icon: "🔧",
  },
  {
    id: "thep-tam-kien",
    name: "Thép Tấm Kiện",
    nameEn: "Packaged Steel Sheets",
    desc: "Thép tấm trơn, tấm gân, cán nguội, cán nóng, mạ kẽm nhúng nóng và dịch vụ gia công.",
    specs: ["Thép tấm trơn & gân", "Mạ kẽm nhúng nóng (GI)", "Cán nguội & cán nóng"],
    icon: "📦",
  },
  {
    id: "thep-ma-mau",
    name: "Thép Mạ Màu",
    nameEn: "Color Coated Steel",
    desc: "Tôn mạ màu đa dạng màu sắc, chất lượng cao, bền đẹp theo thời gian.",
    specs: ["Độ dày: 0.3mm – 0.8mm", "Màu sắc: RAL tiêu chuẩn", "Chống ăn mòn cấp độ cao"],
    icon: "🎨",
  },
];

export const SERVICES = [
  {
    id: "cung-cap",
    name: "Cung cấp Thép Tấm & Cuộn",
    desc: "Là một trong những đơn vị hàng đầu trong xuất nhập khẩu thép tấm, thép cuộn tại miền Bắc Việt Nam. Đối tác chiến lược của Nippon Steel, Daito, Sakai.",
    details: [
      "Nhập khẩu trực tiếp từ Nhật Bản, Hàn Quốc, Đài Loan, Trung Quốc",
      "Kiểm soát chất lượng nghiêm ngặt theo ISO 9001:2015",
      "Giao hàng toàn quốc, đúng tiến độ",
      "Tư vấn chọn vật liệu phù hợp yêu cầu kỹ thuật",
    ],
  },
  {
    id: "cat-tam",
    name: "Dây Chuyền Cắt Tấm",
    desc: "Hệ thống dây chuyền cắt tấm hiện đại, xử lý được mọi độ dày từ 0.3mm đến 14mm, đáp ứng mọi yêu cầu kỹ thuật khắt khe nhất.",
    details: [
      "Cắt thẳng, cắt xéo theo bản vẽ",
      "Độ dày: 0.3mm – 14mm",
      "Độ rộng tối đa: 2,000mm",
      "Quy trình kiểm soát chất lượng tự động",
    ],
  },
  {
    id: "xa-bang",
    name: "Dây Chuyền Xả Băng 2022",
    desc: "Dây chuyền xả băng khổ lớn nhất Việt Nam, công nghệ 2022 – năng lực xử lý vượt trội, phục vụ các dự án quy mô lớn.",
    details: [
      "Khổ rộng lớn nhất Việt Nam",
      "Công nghệ 2022 – tiên tiến nhất hiện nay",
      "Xả băng chính xác, không biến dạng",
      "Năng lực xử lý: hàng nghìn tấn/tháng",
    ],
  },
];

export const PARTNERS = [
  "Nippon Steel", "Hyundai Steel", "Hoa Sen Steel",
  "Rizhao Steel", "Kobelco Steel", "JFE Steel",
  "Bao Steel", "POSCO", "CSC Steel", "Hòa Phát",
];

export const PROJECTS = [
  {
    name: "Damen Shipbuilding",
    desc: "Cung cấp thép tấm, thép hình cho tổ hợp đóng tàu Damen tại Hải Phòng.",
    category: "Đóng tàu",
  },
  {
    name: "VinGroup",
    desc: "Cung cấp vật liệu thép cho các dự án xây dựng của tập đoàn VinGroup.",
    category: "Xây dựng",
  },
  {
    name: "VinFast",
    desc: "Cung cấp thép công nghiệp cho nhà máy sản xuất ô tô VinFast.",
    category: "Công nghiệp ô tô",
  },
  {
    name: "Nhà máy Tân Phong An",
    desc: "Thiết kế, chế tạo và lắp dựng kết cấu thép nhà xưởng Tân Phong An.",
    category: "Kết cấu thép",
  },
];
