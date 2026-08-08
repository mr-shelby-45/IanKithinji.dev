export type ProjectStatus = 'Live' | 'In development' | 'Academic project';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  focus: string; // short metadata line, e.g. "Product · CMS · Payments"

  context: string;
  problem: string;
  constraints?: string;
  approach: string;
  decision: {
    label: string;
    description: string;
  };
  implementation: string;
  difficult?: string;
  learned?: string;

  stack: string[];
  links: ProjectLink[];
  image?: string;
}

export interface CapabilityGroup {
  label: string;
  description: string;
}
