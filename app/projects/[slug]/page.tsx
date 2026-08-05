import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import styles from './page.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className={`container ${styles.article}`}>
      <Link href="/projects" className={styles.back}>
        ← All projects
      </Link>

      <header className={styles.header}>
        <p className={styles.meta}>
          {project.role} · {project.year}
        </p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.primaryLink}>
              View live →
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
              Source
            </a>
          )}
        </div>
      </header>

      <div className={styles.body}>
        <p>{project.description}</p>
      </div>

      <div className={styles.stackSection}>
        <p className={styles.stackLabel}>Stack</p>
        <ul className={styles.stackList}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
