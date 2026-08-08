import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import styles from './page.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Ian Kithinji` : 'Project' };
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
        ← All work
      </Link>

      <header className={styles.header}>
        <div className={styles.metaRow}>
          <span className={styles.status} data-status={project.status}>
            {project.status}
          </span>
          <span className={styles.metaText}>
            {project.role} · {project.year}
          </span>
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.oneLiner}>{project.oneLiner}</p>
      </header>

      <div className={styles.body}>
        <section className={styles.block}>
          <h2 className={styles.blockLabel}>Context</h2>
          <p>{project.context}</p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockLabel}>The problem</h2>
          <p>{project.problem}</p>
        </section>

        {project.constraints && (
          <section className={styles.block}>
            <h2 className={styles.blockLabel}>Constraints</h2>
            <p>{project.constraints}</p>
          </section>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockLabel}>Approach</h2>
          <p>{project.approach}</p>
        </section>

        <section className={styles.decisionBlock}>
          <h2 className={styles.blockLabel}>Decision — {project.decision.label}</h2>
          <p>{project.decision.description}</p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockLabel}>Implementation</h2>
          <p>{project.implementation}</p>
        </section>

        {project.difficult && (
          <section className={styles.block}>
            <h2 className={styles.blockLabel}>What was difficult</h2>
            <p>{project.difficult}</p>
          </section>
        )}

        {project.learned && (
          <section className={styles.block}>
            <h2 className={styles.blockLabel}>What I learned</h2>
            <p>{project.learned}</p>
          </section>
        )}
      </div>

      <div className={styles.footer}>
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

        {project.links.length > 0 && (
          <div className={styles.linksSection}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={styles.externalLink}
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
