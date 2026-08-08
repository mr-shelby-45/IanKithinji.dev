import SectionHeading from '@/components/ui/SectionHeading';
import ProjectEntry from './ProjectEntry';
import { getFeaturedProjects } from '@/lib/data/projects';
import styles from './Work.module.css';

export default function Work() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className={`container ${styles.section}`}>
      <SectionHeading
        title="Selected Work"
        lead="Three projects, in enough detail to see the actual decisions, not just the stack."
      />
      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectEntry key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
