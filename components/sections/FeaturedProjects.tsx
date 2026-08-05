import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from './ProjectGrid';
import { getFeaturedProjects } from '@/lib/data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className={`container ${styles.section}`}>
      <SectionHeading index="03" title="Projects" />
      <ProjectGrid projects={projects} />
      <div className={styles.viewAll}>
        <Link href="/projects" className={styles.viewAllLink}>
          View all projects →
        </Link>
      </div>
    </section>
  );
}
