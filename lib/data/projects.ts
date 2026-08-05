import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'mwenda-kimathi-foundation',
    title: 'Mwenda Kimathi Foundation',
    summary:
      'A Kenyan NGO site for sport, conservation, and culture programmes in Meru — built and shipped end to end.',
    description:
      'Designed and built the full site from concept through deployment: Sanity-managed news and programme content, Paystack donations, transactional email via Resend, and SEO foundations. Sport is treated as intrinsically valuable rather than purely instrumental, which shaped both the copy and the information architecture.',
    role: 'Founder & Developer',
    stack: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'CSS Modules', 'Paystack', 'Vercel'],
    year: '2025',
    featured: true,
    liveUrl: 'https://savanna-rising-foundation.vercel.app',
    repoUrl: 'https://github.com/mr-shelby-45/Savanna-Rising-Foundation',
  },
  {
    slug: 'jirani',
    title: 'Jirani',
    summary:
      'A community trust marketplace for lending items and services, sharing one backend across two identities.',
    description:
      'Explores how a single backend can serve two distinct front-end identities for items and services, built around neighborhood trust rather than anonymous transactions.',
    role: 'Founder & Developer',
    stack: ['Next.js', 'TypeScript'],
    year: '2025',
    featured: true,
  },
  {
    slug: 'egeshasmart',
    title: 'EGESHASMART',
    summary:
      'A smart car parking system using computer vision, built as a five-person final-year group project.',
    description:
      'Integrated YOLOv8 for vehicle detection with a Firebase/PostgreSQL backend, Stripe and M-Pesa for payment, delivering a working system alongside full academic documentation and a final presentation.',
    role: 'Team Member',
    stack: ['Vite', 'TypeScript', 'YOLOv8', 'Firebase', 'PostgreSQL', 'Stripe', 'M-Pesa'],
    year: '2024',
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
