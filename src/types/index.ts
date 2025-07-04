export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  appName: string,
  year: string,
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface projectTag {
  id: string;
  imageUrl: string;
  appName: string,
  year: string,
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface DummyReviews {
    id: number;
    name: string;
    rating: number;
    date: string;
    review: string;
    avatar: string;
}
