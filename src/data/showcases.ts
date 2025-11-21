import type { ShowcaseItem, Product } from "../types";

// PC Showcase Gallery Data
export const showcases: ShowcaseItem[] = [
  {
    id: "red-dragon",
    title: "The Red Dragon",
    specs: "RTX 4090 • i9-14900K • 64GB DDR5",
    description: "Custom red theme với full RGB sync",
    image: "/showcase/pc1.png",
    category: "Gaming",
  },
  {
    id: "arctic-storm",
    title: "Arctic Storm",
    specs: "RTX 4080 • i7-14700K • 32GB DDR5",
    description: "White build với custom water cooling",
    image: "/showcase/pc2.png",
    category: "Gaming",
  },
  {
    id: "shadow-reaper",
    title: "Shadow Reaper",
    specs: "RTX 4090 • AMD 7950X • 128GB DDR5",
    description: "Stealth black theme cho content creator",
    image: "/showcase/pc3.png",
    category: "Workstation",
  },
  {
    id: "gold-edition",
    title: "Gold Edition",
    specs: "RTX 4070 Ti • i7-13700K • 32GB DDR5",
    description: "Premium gold accents luxury build",
    image: "/showcase/pc4.png",
    category: "Gaming",
  },
  {
    id: "neon-genesis",
    title: "Neon Genesis",
    specs: "RTX 4080 • AMD 7900X • 64GB DDR5",
    description: "Cyberpunk inspired RGB masterpiece",
    image: "/showcase/pc5.png",
    category: "Gaming",
  },
  {
    id: "pro-workstation",
    title: "Pro Workstation",
    specs: "RTX 4090 • Threadripper • 256GB DDR5",
    description: "Enterprise level performance beast",
    image: "/showcase/pc6.png",
    category: "Workstation",
  },
];

// Default product data (used as template for all products)
export const defaultProduct: Product = {
  id: 1,
  slug: "arctic-storm",
  name: "iBUYPOWER Y60 Gaming Desktop PC",
  tagline: "Hieu Nang Cuc Manh: i9-14900F, RTX 4060 Ti & Tan Nuoc 240mm",
  price: 1799.99,
  originalPrice: 2199.99,
  discount: 18,
  currency: "USD",
  stock: "In Stock",
  category: "Gaming Desktop",
  brand: "iBUYPOWER",
  rating: 4.8,
  reviews: 127,
  description:
    "May tinh choi game iBUYPOWER Y60 (Model Y60BI9N46T04) duoc trang bi CPU Intel Core i9 the he 14 (14900F) va GPU NVIDIA GeForce RTX 4060 Ti 8GB. He thong so huu 32GB RAM DDR5 RGB toc do 5200MHz va o cung 1TB NVMe SSD. Dac biet, PC nay su dung he thong tan nhiet nuoc AIO 240mm va di kem Windows 11 Home Advanced.",
  images: [
    "/showcase/pc-1.jpg",
    "/showcase/pc-2.jpg",
    "/showcase/pc-3.jpg",
    "/showcase/pc-4.jpg",
  ],
  specs: {
    cpu: {
      name: "Intel Core i9-14900F",
      details:
        "Native 24-core processing, Tan so co ban 2.0 GHz, Tang toc len den 5.8 GHz",
    },
    gpu: {
      name: "NVIDIA GeForce RTX 4060 Ti",
      details: "8GB GDDR6X VRAM, Driven by 8GB of dedicated video memory",
    },
    ram: {
      name: "32GB DDR5 RGB RAM",
      details:
        "5200MHz, Cau hinh (2) thanh 16GB. Motherboard co the nang cap toi da 4 thanh RAM.",
    },
    storage: {
      name: "1TB NVMe SSD",
      details: "Toc do khoi dong va tai ung dung nhanh",
    },
    cooling: {
      name: "Tan Nhiet Nuoc (Liquid Cooling)",
      details: "He thong tan nhiet CPU nuoc AIO 240mm kem theo quat RGB",
    },
    psu: {
      name: "Bo Nguon (Power Supply)",
      details: "Cong suat toi da 600 watts",
    },
    case: {
      name: "iBUYPOWER Y60 Case (Black)",
      details:
        'Thiet ke kinh cuong luc Panoramic. Kich thuoc: 18" H x 11.2" W x 18.2" D.',
    },
    motherboard: {
      name: "Motherboard Model Number",
      details: "B760 D5",
    },
  },
  features: [
    "He dieu hanh: Windows 11 Home Advanced (cai dat san)",
    "Ket noi: Wi-Fi, Bluetooth, 1x Ethernet",
    "Cong xuat hinh: 3 x DisplayPort, 1 x HDMI",
    "Cong ket noi USB: Tong cong 11 cong",
    "Phu kien kem theo: Ban phim (co day, RGB) va Chuot (co day) gaming",
    "Trong luong: 38 pounds",
    "Bao hanh: 1 nam (Linh kien & Lao dong)",
    "UPC: 848604049113",
  ],
  buyLinks: [
    {
      platform: "Best Buy Product Page",
      url: "https://www.bestbuy.com/product/ibuypower-y60-gaming-desktop-pc-intel-core-i9-14900f-nvidia-geforce-rtx-4060-ti-8gb-32gb-ddr5-rgb-ram-1tb-nvme-ssd-black/J3R75JY2R6",
      icon: "🔗",
    },
  ],
  relatedProducts: null,
};
