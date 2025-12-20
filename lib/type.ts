export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  contributors?: number;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  type: "online" | "offline" | "hybrid";
  image: string;
  registrationUrl?: string;
  status: "upcoming" | "ongoing" | "completed";
  tags: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage?: string;
  image: string;
  tags: string[];
  content: string;
  readingTime?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  type: "sponsor" | "partner" | "supporter";
  tier?: "platinum" | "gold" | "silver" | "bronze";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}