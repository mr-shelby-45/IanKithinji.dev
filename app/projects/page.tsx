import SectionHeading from '@/components/ui/SectionHeading';
import ProjectEntry from '@/components/sections/ProjectEntry';
import { projects } from '@/lib/data/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Work — Ian Kithinji',
};

export default function ProjectsPage() {
  return (
    <section className={`container ${styles.section}`}>
      <SectionHeading title="Work" />
      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectEntry key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
