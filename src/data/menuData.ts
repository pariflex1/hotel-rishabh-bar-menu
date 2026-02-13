export interface MenuItem {
  name: string;
  priceCheck?: string; // For QTR/Glass
  priceBottle: string;
  icon: string; // Emoji icon for item
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  image: string; // Category image URL
  emoji: string; // Category header emoji
}

export const menuData: MenuCategory[] = [
  {
    title: "BEER (Pint)",
    emoji: "🍺",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "King Fisher Ultra", priceBottle: "140/-", icon: "🍺" },
      { name: "Corona", priceBottle: "210/-", icon: "🍻" },
      { name: "Budweiser", priceBottle: "140/-", icon: "🍺" },
    ],
  },
  {
    title: "WHISKY",
    emoji: "🥃",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Blenders Pride", priceCheck: "290/-", priceBottle: "1130/-", icon: "🥃" },
      { name: "Black Dog", priceCheck: "610/-", priceBottle: "1700/-", icon: "🥃" },
      { name: "100 Pipers", priceCheck: "455/-", priceBottle: "1820/-", icon: "🥃" },
      { name: "Teacher's", priceCheck: "440/-", priceBottle: "1750/-", icon: "🥃" },
      { name: "Ballantine's", priceCheck: "540/-", priceBottle: "1950/-", icon: "🥃" },
      { name: "Black & White", priceCheck: "460/-", priceBottle: "1360/-", icon: "🥃" },
      { name: "Jameson Irish", priceCheck: "660/-", priceBottle: "2450/-", icon: "🥃" },
      { name: "Black Label", priceBottle: "3280/-", icon: "🏷️" },
      { name: "Red Label", priceCheck: "770/-", priceBottle: "2000/-", icon: "🏷️" },
    ],
  },
  {
    title: "VODKA",
    emoji: "🍸",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Magic Moments", priceCheck: "195/-", priceBottle: "780/-", icon: "✨" },
      { name: "Smirnoff", priceCheck: "245/-", priceBottle: "980/-", icon: "🍸" },
      { name: "Absolut", priceCheck: "615/-", priceBottle: "1980/-", icon: "💎" },
    ],
  },
  {
    title: "GIN",
    emoji: "🍹",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Bombay Sapphire", priceBottle: "2500/-", icon: "💙" },
      { name: "Tanqueray", priceBottle: "2080/-", icon: "🍹" },
    ],
  },
  {
    title: "RUM",
    emoji: "🏴‍☠️",
    image: "https://images.unsplash.com/photo-1598018553943-29ace5f4dd20?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Old Monk", priceCheck: "195/-", priceBottle: "760/-", icon: "🍶" },
      { name: "Bacardi Black", priceCheck: "210/-", priceBottle: "810/-", icon: "🖤" },
    ],
  },
  {
    title: "SOFT BEVERAGE",
    emoji: "🥤",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Tonic Water", priceBottle: "95/-", icon: "💧" },
      { name: "Red Bull", priceBottle: "160/-", icon: "🐂" },
      { name: "Ginger Ale", priceBottle: "95/-", icon: "🫚" },
      { name: "Coke 330 ML", priceBottle: "80/-", icon: "🥤" },
      { name: "Coke 750 ML", priceBottle: "55/-", icon: "🥤" },
    ],
  },
  {
    title: "ICE",
    emoji: "🧊",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=250&fit=crop&q=80",
    items: [
      { name: "Ice Bucket", priceBottle: "50/-", icon: "🧊" },
    ],
  },
];
