import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/sections/ProjectGrid';
import { projects } from '@/lib/data/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects — Kimathi',
};

export default function ProjectsPage() {
  return (
    <section className={`container ${styles.section}`}>
      <SectionHeading index="03" title="All Projects" />
      <ProjectGrid projects={projects} />
    </section>
  );
}
