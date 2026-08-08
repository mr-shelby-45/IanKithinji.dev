import Link from 'next/link';
import { Project } from '@/types';
import styles from './ProjectEntry.module.css';

export default function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={styles.entry}>
      <div className={styles.number}>{String(index).padStart(2, '0')}</div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.status} data-status={project.status}>
            {project.status}
          </span>
        </div>
        <p className={styles.oneLiner}>{project.oneLiner}</p>
        <p className={styles.meta}>
          {project.role} · {project.focus}
        </p>
        <Link href={`/projects/${project.slug}`} className={styles.link}>
          View project →
        </Link>
      </div>
    </article>
  );
}
