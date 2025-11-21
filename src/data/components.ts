// PC Components Database with pricing in VND
export interface Component {
  id: string;
  name: string;
  brand?: string;
  price: number;
  performance?: number; // 1-10 scale
  power?: number; // Watts
  image?: string;
  description?: string;
  compatible?: string[]; // Compatible component IDs
}

export interface ComponentCategory {
  id: string;
  name: string;
  nameVN: string;
  required: boolean;
  options: Component[];
}

export const componentCategories: ComponentCategory[] = [
  {
    id: 'cpu',
    name: 'Processor',
    nameVN: 'Bộ Xử Lý',
    required: true,
    options: [
      { id: 'cpu-i5-14600k', name: 'Intel Core i5-14600K', brand: 'Intel', price: 8500000, performance: 7, power: 125, description: '14 nhân, 20 luồng - Tốc độ tối đa 5.3GHz' },
      { id: 'cpu-i7-14700k', name: 'Intel Core i7-14700K', brand: 'Intel', price: 13500000, performance: 8, power: 125, description: '20 nhân, 28 luồng - Tốc độ tối đa 5.6GHz' },
      { id: 'cpu-i9-14900k', name: 'Intel Core i9-14900K', brand: 'Intel', price: 19500000, performance: 10, power: 125, description: '24 nhân, 32 luồng - Tốc độ tối đa 6.0GHz' },
      { id: 'cpu-r5-7600x', name: 'AMD Ryzen 5 7600X', brand: 'AMD', price: 7200000, performance: 7, power: 105, description: '6 nhân, 12 luồng - Tốc độ tối đa 5.3GHz' },
      { id: 'cpu-r7-7800x3d', name: 'AMD Ryzen 7 7800X3D', brand: 'AMD', price: 14800000, performance: 9, power: 120, description: '8 nhân, 16 luồng - 3D V-Cache Gaming Beast' },
      { id: 'cpu-r9-7950x', name: 'AMD Ryzen 9 7950X', brand: 'AMD', price: 21500000, performance: 10, power: 170, description: '16 nhân, 32 luồng - Tốc độ tối đa 5.7GHz' }
    ]
  },
  {
    id: 'gpu',
    name: 'Graphics Card',
    nameVN: 'Card Đồ Họa',
    required: true,
    options: [
      { id: 'gpu-4060ti', name: 'NVIDIA RTX 4060 Ti 8GB', brand: 'NVIDIA', price: 13500000, performance: 7, power: 160, description: '1080p Gaming Champion' },
      { id: 'gpu-4070', name: 'NVIDIA RTX 4070 12GB', brand: 'NVIDIA', price: 18500000, performance: 8, power: 200, description: '1440p High Performance' },
      { id: 'gpu-4070ti', name: 'NVIDIA RTX 4070 Ti 12GB', brand: 'NVIDIA', price: 26500000, performance: 9, power: 285, description: '1440p Ultra Gaming' },
      { id: 'gpu-4080', name: 'NVIDIA RTX 4080 16GB', brand: 'NVIDIA', price: 38500000, performance: 9, power: 320, description: '4K Gaming Ready' },
      { id: 'gpu-4090', name: 'NVIDIA RTX 4090 24GB', brand: 'NVIDIA', price: 59500000, performance: 10, power: 450, description: 'Ultimate 4K Gaming Beast' },
      { id: 'gpu-7900xt', name: 'AMD Radeon RX 7900 XT 20GB', brand: 'AMD', price: 29500000, performance: 9, power: 300, description: '4K Gaming Performance' },
      { id: 'gpu-7900xtx', name: 'AMD Radeon RX 7900 XTX 24GB', brand: 'AMD', price: 35500000, performance: 9, power: 355, description: '4K Gaming Flagship' }
    ]
  },
  {
    id: 'ram',
    name: 'Memory',
    nameVN: 'Bộ Nhớ RAM',
    required: true,
    options: [
      { id: 'ram-16gb', name: '16GB DDR5 RGB (2x8GB)', brand: 'Corsair', price: 3200000, performance: 6, power: 10, description: '5200MHz - Đủ cho gaming cơ bản' },
      { id: 'ram-32gb', name: '32GB DDR5 RGB (2x16GB)', brand: 'Corsair', price: 5800000, performance: 8, power: 15, description: '5600MHz - Tối ưu cho gaming và multitask' },
      { id: 'ram-64gb', name: '64GB DDR5 RGB (2x32GB)', brand: 'G.Skill', price: 11500000, performance: 9, power: 20, description: '6000MHz - Pro Creator & Heavy Multitask' },
      { id: 'ram-128gb', name: '128GB DDR5 RGB (4x32GB)', brand: 'G.Skill', price: 23500000, performance: 10, power: 40, description: '6400MHz - Extreme Workstation' }
    ]
  },
  {
    id: 'storage',
    name: 'Storage',
    nameVN: 'Ổ Cứng',
    required: true,
    options: [
      { id: 'ssd-512gb', name: '512GB NVMe SSD', brand: 'Samsung', price: 1800000, performance: 7, power: 5, description: '980 Pro - 7000MB/s Read' },
      { id: 'ssd-1tb', name: '1TB NVMe SSD', brand: 'Samsung', price: 3200000, performance: 8, power: 5, description: '990 Pro - 7450MB/s Read' },
      { id: 'ssd-2tb', name: '2TB NVMe SSD', brand: 'Samsung', price: 6200000, performance: 9, power: 7, description: '990 Pro - 7450MB/s Read' },
      { id: 'ssd-4tb', name: '4TB NVMe SSD', brand: 'Samsung', price: 12800000, performance: 9, power: 8, description: '990 Pro - 7450MB/s Read' },
      { id: 'ssd-1tb-2tb', name: '1TB + 2TB NVMe SSD Combo', brand: 'Samsung', price: 9000000, performance: 9, power: 12, description: 'OS + Storage separated' }
    ]
  },
  {
    id: 'cooling',
    name: 'CPU Cooling',
    nameVN: 'Tản Nhiệt CPU',
    required: true,
    options: [
      { id: 'cool-air', name: 'Air Cooler Tower RGB', brand: 'Noctua', price: 1800000, performance: 6, power: 5, description: 'Tản nhiệt khí cao cấp - TDP 180W' },
      { id: 'cool-240mm', name: 'AIO Liquid Cooler 240mm RGB', brand: 'Corsair', price: 3500000, performance: 8, power: 10, description: 'Tản nhiệt nước - TDP 250W' },
      { id: 'cool-280mm', name: 'AIO Liquid Cooler 280mm RGB', brand: 'NZXT', price: 4200000, performance: 9, power: 12, description: 'Tản nhiệt nước - TDP 280W' },
      { id: 'cool-360mm', name: 'AIO Liquid Cooler 360mm RGB', brand: 'Corsair', price: 5500000, performance: 10, power: 15, description: 'Tản nhiệt nước cao cấp - TDP 320W' }
    ]
  },
  {
    id: 'case',
    name: 'PC Case',
    nameVN: 'Vỏ Case',
    required: true,
    options: [
      { id: 'case-warrior', name: 'Warrior Gaming Case', brand: 'NZXT', price: 2800000, performance: 7, description: 'Mid Tower - Tempered Glass - 4 RGB Fans' },
      { id: 'case-titan', name: 'Titan Premium Case', brand: 'Lian Li', price: 4500000, performance: 9, description: 'Mid Tower - Dual Tempered Glass - 6 RGB Fans' },
      { id: 'case-creator', name: 'Creator Workstation Case', brand: 'Corsair', price: 5200000, performance: 10, description: 'Full Tower - Optimal Airflow - 8 Fans' }
    ]
  },
  {
    id: 'psu',
    name: 'Power Supply',
    nameVN: 'Nguồn',
    required: true,
    options: [
      { id: 'psu-650w', name: '650W 80+ Gold Modular', brand: 'Corsair', price: 2500000, performance: 7, description: 'RM650x - Hiệu suất 90%+' },
      { id: 'psu-750w', name: '750W 80+ Gold Modular', brand: 'Corsair', price: 3200000, performance: 8, description: 'RM750x - Hiệu suất 90%+' },
      { id: 'psu-850w', name: '850W 80+ Gold Modular', brand: 'Corsair', price: 4200000, performance: 9, description: 'RM850x - Hiệu suất 91%+' },
      { id: 'psu-1000w', name: '1000W 80+ Platinum Modular', brand: 'Corsair', price: 5800000, performance: 10, description: 'HX1000 - Hiệu suất 92%+' },
      { id: 'psu-1200w', name: '1200W 80+ Platinum Modular', brand: 'Corsair', price: 7500000, performance: 10, description: 'HX1200 - Extreme Performance' }
    ]
  },
  {
    id: 'extras',
    name: 'Extras',
    nameVN: 'Phụ Kiện',
    required: false,
    options: [
      { id: 'extra-rgb-fans', name: 'RGB Fan Kit (3 Fans)', brand: 'Corsair', price: 1200000, performance: 0, description: 'Thêm quạt RGB cho case' },
      { id: 'extra-cables', name: 'Custom Sleeved Cables', brand: 'CableMod', price: 800000, performance: 0, description: 'Dây nguồn custom đẹp mắt' },
      { id: 'extra-wifi', name: 'WiFi 6E PCIe Card', brand: 'ASUS', price: 1500000, performance: 0, description: 'Card WiFi tốc độ cao' },
      { id: 'extra-sound', name: 'Sound Card PCIe', brand: 'Creative', price: 2800000, performance: 0, description: 'Card âm thanh cao cấp' },
      { id: 'extra-argb', name: 'ARGB Controller Hub', brand: 'Razer', price: 900000, performance: 0, description: 'Điều khiển đèn RGB' }
    ]
  }
];

// Preset configurations
export interface PresetConfig {
  id: string;
  name: string;
  theme: 'warrior' | 'titan' | 'creator';
  components: Record<string, ConfigItem>; // category -> component with quantity
  basePrice: number;
}

export const presetConfigs: PresetConfig[] = [
  {
    id: 'warrior',
    name: 'WARRIOR',
    theme: 'warrior',
    basePrice: 45000000,
    components: {
      cpu: { componentId: 'cpu-i7-14700k', quantity: 1 },
      gpu: { componentId: 'gpu-4070ti', quantity: 1 },
      ram: { componentId: 'ram-32gb', quantity: 1 },
      storage: { componentId: 'ssd-1tb', quantity: 1 },
      cooling: { componentId: 'cool-240mm', quantity: 1 },
      case: { componentId: 'case-warrior', quantity: 1 },
      psu: { componentId: 'psu-750w', quantity: 1 }
    }
  },
  {
    id: 'titan',
    name: 'TITAN',
    theme: 'titan',
    basePrice: 85000000,
    components: {
      cpu: { componentId: 'cpu-i9-14900k', quantity: 1 },
      gpu: { componentId: 'gpu-4090', quantity: 1 },
      ram: { componentId: 'ram-64gb', quantity: 1 },
      storage: { componentId: 'ssd-2tb', quantity: 1 },
      cooling: { componentId: 'cool-360mm', quantity: 1 },
      case: { componentId: 'case-titan', quantity: 1 },
      psu: { componentId: 'psu-1000w', quantity: 1 }
    }
  },
  {
    id: 'creator',
    name: 'CREATOR',
    theme: 'creator',
    basePrice: 72000000,
    components: {
      cpu: { componentId: 'cpu-r9-7950x', quantity: 1 },
      gpu: { componentId: 'gpu-4080', quantity: 1 },
      ram: { componentId: 'ram-128gb', quantity: 1 },
      storage: { componentId: 'ssd-1tb-2tb', quantity: 1 },
      cooling: { componentId: 'cool-360mm', quantity: 1 },
      case: { componentId: 'case-creator', quantity: 1 },
      psu: { componentId: 'psu-1000w', quantity: 1 }
    }
  }
];

// Helper functions
export function getComponentById(categoryId: string, componentId: string): Component | undefined {
  const category = componentCategories.find(c => c.id === categoryId);
  return category?.options.find(opt => opt.id === componentId);
}

export interface ConfigItem {
  componentId: string;
  quantity: number;
}

export function calculateTotalPrice(config: Record<string, ConfigItem | ConfigItem[]>): number {
  let total = 0;

  for (const [categoryId, selection] of Object.entries(config)) {
    if (Array.isArray(selection)) {
      // Multiple selections with quantities (extras)
      selection.forEach((item: ConfigItem) => {
        const component = getComponentById(categoryId, item.componentId);
        if (component) total += component.price * item.quantity;
      });
    } else {
      // Single selection with quantity
      const component = getComponentById(categoryId, selection.componentId);
      if (component) total += component.price * selection.quantity;
    }
  }

  return total;
}

export function calculateTotalPower(config: Record<string, ConfigItem | ConfigItem[]>): number {
  let totalWatts = 0;

  for (const [categoryId, selection] of Object.entries(config)) {
    if (Array.isArray(selection)) {
      selection.forEach((item: ConfigItem) => {
        const component = getComponentById(categoryId, item.componentId);
        if (component?.power) totalWatts += component.power * item.quantity;
      });
    } else {
      const component = getComponentById(categoryId, selection.componentId);
      if (component?.power) totalWatts += component.power * selection.quantity;
    }
  }

  return totalWatts;
}

export function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN') + '₫';
}
