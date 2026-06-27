export const site = {
  name: "iTHINKBIG",
  domain: "ithinkbig.org",
  url: "https://ithinkbig.org",
  tagline: "Inspire the Young",
  description:
    "iTHINKBIG is a nonprofit motivational assembly organization that has inspired over 3,000,000 students since 2000 through high-energy, heartfelt school presentations.",
  phone: "619.888.4856",
  phoneHref: "tel:+16198884856",
  email: "chad@ithinkbig.org",
  emailHref: "mailto:chad@ithinkbig.org",
  address: {
    line1: "1807 Cable Street",
    city: "San Diego",
    state: "CA",
    zip: "92107",
    country: "United States",
  },
  social: {
    instagram: "https://www.instagram.com/",
    buenaOnda: "https://ilovebig.org",
  },
} as const;

export const images = {
  logo: "https://images.squarespace-cdn.com/content/v1/56e35a3c60b5e97c53ff7e89/ac52d857-36db-4597-bb4b-bb3c9b8d9f9d/iTHINK%2BFRONT_businesscard-3-2.5inx2%2BF.ai.ps.ai.jpg",
  chad: "https://images.squarespace-cdn.com/content/v1/56e35a3c60b5e97c53ff7e89/1498605338418-MIZU7TAHPPRKTM7M2DA0/Chad%2BPrimary%2BHead%2BShot.jpg",
  mexico: "/buena-onda.png",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Team", href: "/team" },
  { label: "References", href: "/references" },
  { label: "Mexico", href: "/mexico" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "3M+", label: "Students inspired", sub: "Across the nation" },
  { value: "2000", label: "Inspiring since", sub: "25+ years of impact" },
  { value: "501C3", label: "Nonprofit", sub: "Founded in San Diego" },
  { value: "#1", label: "Top-rated program", sub: "By the schools we serve" },
] as const;

export type Topic = {
  title: string;
  description: string;
  group: "Inspiration" | "Prevention" | "Leadership" | "Events";
  image: string;
};

export const topics: Topic[] = [
  {
    title: "Thinking Big & Overcoming Obstacles",
    description:
      "Our flagship message — helping students break through barriers and believe a bigger life is possible.",
    group: "Inspiration",
    image: "/topics/topic-1.jpg",
  },
  {
    title: "Goal Setting",
    description:
      "Practical, energizing tools that turn passion into a clear plan students can actually follow.",
    group: "Inspiration",
    image: "/topics/topic-2.jpg",
  },
  {
    title: "Self Esteem",
    description:
      "We help students recognize their potential — even when life has covered it up.",
    group: "Inspiration",
    image: "/topics/topic-3.jpg",
  },
  {
    title: "Red Ribbon Week",
    description:
      "High-energy assemblies that make healthy, drug-free choices feel powerful and cool.",
    group: "Prevention",
    image: "/topics/topic-4.jpg",
  },
  {
    title: "Bullying / Cyberbullying",
    description:
      "Honest, current, and relevant — content that captures every student and teacher in the room.",
    group: "Prevention",
    image: "/topics/topic-5.jpg",
  },
  {
    title: "“At Risk” Assemblies",
    description:
      "Meeting students where they are and channeling their passion toward a personal win.",
    group: "Prevention",
    image: "/topics/topic-6.jpg",
  },
  {
    title: "Leadership Training",
    description:
      "Equipping student leaders, ASB, and teams with mindset and skills to lead well.",
    group: "Leadership",
    image: "/topics/topic-7.jpg",
  },
  {
    title: "Assemblies to Motivate for Testing",
    description:
      "Get students fired up and focused right when momentum matters most.",
    group: "Leadership",
    image: "/topics/topic-8.jpg",
  },
  {
    title: "Teacher Seminars & Staff Development",
    description:
      "Reignite your staff with sessions built to inspire the people who inspire students.",
    group: "Leadership",
    image: "/topics/topic-9.jpg",
  },
  {
    title: "Career Days",
    description:
      "Help students connect today's choices to the future they're capable of building.",
    group: "Events",
    image: "/topics/topic-10.jpg",
  },
  {
    title: "Homecoming & ASB Events",
    description:
      "Bring unforgettable energy to your biggest school moments of the year.",
    group: "Events",
    image: "/topics/topic-11.jpg",
  },
  {
    title: "Student Retreats & Camps",
    description:
      "Immersive experiences that mine the passion in the hearts of young people.",
    group: "Events",
    image: "/topics/topic-12.jpg",
  },
];

export const audiences = [
  "Middle Schools",
  "High Schools",
  "Leadership Groups",
  "Staff Development",
  "Student Retreats",
  "ASB Events",
  "Camps",
];

export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Your presentation was relevant, motivational, and current. It captured the attention of every student and teacher in the building. It takes a special presenter to pull that off!",
    name: "Andy Burnett",
    org: "Brawley High School",
  },
  {
    quote:
      "I've worked with iTHINK for the past 7 years and they give kids lifelong tools to make good choices.",
    name: "Petria Reis",
    org: "Diamond Bar High School",
  },
  {
    quote:
      "The pacing and uniqueness was perfect for Middle School Students, as the result was remarkable.",
    name: "Sean Wells",
    org: "Thurgood Marshall Middle School",
  },
  {
    quote:
      "Every year I use iTHINKBIG.ORG to present to my city schools. I'm amazed by how they put our desired content and goals first and hit the mark perfectly.",
    name: "Nate Landis",
    org: "Urban Youth Collaborative — Founder & President",
  },
];

export const founderTimeline = [
  {
    year: "Age 16",
    title: "A moment that changed everything",
    body: "A student at Alameda High School in Northern California, Chad sat through a school assembly where speaker Donnie Moore had a profound impact on his life.",
  },
  {
    year: "The decision",
    title: "Determined to live big",
    body: "Chad realized the impact an inspiring moment could have — and resolved to live big and make a difference for others.",
  },
  {
    year: "2000",
    title: "iTHINKBIG.org is born",
    body: "Chad launched iTHINKBIG.org in San Diego, CA and began speaking to students across the nation.",
  },
  {
    year: "Today",
    title: "3,000,000+ students later",
    body: "Chad has spoken to millions of students and now leads The Garden of Dreams, building a free daycare in Punta Colonet, Baja California, Mexico.",
  },
];
