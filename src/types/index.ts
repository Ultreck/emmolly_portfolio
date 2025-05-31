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
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface projectTag {
  id: string;
  imageUrl: string;
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
