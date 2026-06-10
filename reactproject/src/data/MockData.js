const palette = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
];

const avatar = (seed) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;

export const initialStories = [
  { id: "s1", user: "Sarah Lin", avatar: avatar("Sarah"), bg: palette[0] },
  { id: "s2", user: "Marcus Reid", avatar: avatar("Marcus"), bg: palette[1] },
  { id: "s3", user: "Aiko Tanaka", avatar: avatar("Aiko"), bg: palette[2] },
  { id: "s4", user: "Diego Rivera", avatar: avatar("Diego"), bg: palette[3] },
  { id: "s5", user: "Priya Patel", avatar: avatar("Priya"), bg: palette[4] },
];

export const initialPosts = [
  {
    id: "p1",
    user: "Sarah Lin",
    avatar: avatar("Sarah"),
    time: "2 h",
    content:
      "Finally finished my weekend project! Built a little weather dashboard with live radar — couldn't be happier 🌦️",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    likes: 124,
    liked: false,
    shares: 8,
    comments: [
      {
        id: "c1",
        user: "Marcus Reid",
        avatar: avatar("Marcus"),
        text: "This looks amazing! Mind sharing the repo?",
        time: "1 h",
      },
      {
        id: "c2",
        user: "Priya Patel",
        avatar: avatar("Priya"),
        text: "Love the color palette 😍",
        time: "45 m",
      },
    ],
  },
  {
    id: "p2",
    user: "Diego Rivera",
    avatar: avatar("Diego"),
    time: "5 h",
    content: "Sunset run today. 8km, new personal best 🏃‍♂️",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80",
    likes: 87,
    liked: true,
    shares: 3,
    comments: [
      {
        id: "c3",
        user: "Aiko Tanaka",
        avatar: avatar("Aiko"),
        text: "Goals! 👏",
        time: "3 h",
      },
    ],
  },
  {
    id: "p3",
    user: "Aiko Tanaka",
    avatar: avatar("Aiko"),
    time: "Yesterday",
    content: "Pineapple on pizza is underrated 🍕🍍",
    likes: 312,
    liked: false,
    shares: 24,
    comments: [],
  },
];

export const contacts = [
  "Marcus Reid",
  "Priya Patel",
  "Diego Rivera",
  "Aiko Tanaka",
  "Sarah Lin",
  "Lena Hoffmann",
  "Tariq Hassan",
  "Nora Eklund",
  "Jamal Carter",
  "Yuki Sato",
].map((name) => ({
  name,
  avatar: avatar(name),
  online: Math.random() > 0.4,
}));

export const shortcuts = [
  { name: "Indie Game Devs", icon: "🎮" },
  { name: "Bay Area Hikers", icon: "🥾" },
  { name: "Book Club Monthly", icon: "📚" },
  { name: "Home Cooks United", icon: "🍳" },
];

export const sidebarLinks = [
  { name: "Friends", icon: "👥" },
  { name: "Memories", icon: "🕒" },
  { name: "Saved", icon: "🔖" },
  { name: "Groups", icon: "👨‍👩‍👧" },
  { name: "Marketplace", icon: "🏪" },
  { name: "Watch", icon: "📺" },
  { name: "Events", icon: "📅" },
  { name: "Pages", icon: "🚩" },
];

export const birthdays = [
  { name: "Lena Hoffmann", others: 2 },
];

export const sponsored = [
  {
    title: "Ergonomic Desk Chair",
    site: "comfyworks.com",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&q=80",
  },
  {
    title: "Learn Design in 30 Days",
    site: "designsprint.io",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=300&q=80",
  },
];