export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Help", href: "#help" },
];

export const stats = [
  { icon: "user" as const, value: "90", suffix: "+", label: "Users" },
  { icon: "location" as const, value: "30", suffix: "+", label: "Locations" },
  { icon: "server" as const, value: "50", suffix: "+", label: "Servers" },
];

export const featureItems = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

export type Plan = {
  name: string;
  image: string;
  features: string[];
  price: string | null;
  period?: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free Plan",
    image: "/images/plans/free.svg",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    name: "Standard Plan",
    image: "/images/plans/standard.svg",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
    period: "/ mo",
  },
  {
    name: "Premium Plan",
    image: "/images/plans/premium.svg",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
    period: "/ mo",
    featured: true,
  },
];

export const companies = [
  { name: "Netflix", src: "/images/companies/netflix.png" },
  { name: "Reddit", src: "/images/companies/reddit.png" },
  { name: "Amazon", src: "/images/companies/amazon.png" },
  { name: "Discord", src: "/images/companies/discord.png" },
  { name: "Spotify", src: "/images/companies/spotify.png" },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    quote:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    avatar: "/images/users/user1.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    quote:
      "“I like it because I like to travel far and still can connect with high speed.”.",
    avatar: "/images/users/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    quote:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    avatar: "/images/users/user3.png",
  },
];

export const footerNav = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];

export const socials = [
  { name: "Facebook", icon: "facebook" as const },
  { name: "Twitter", icon: "twitter" as const },
  { name: "Instagram", icon: "instagram" as const },
];
