export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  year: string;
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
