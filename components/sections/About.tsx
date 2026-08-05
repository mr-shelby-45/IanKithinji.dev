import SectionHeading from '@/components/ui/SectionHeading';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <SectionHeading index="01" title="About" />
      <div className={styles.grid}>
        <p className={styles.lead}>
          I&apos;m a final-year Mathematics and Computer Science student at
          JKUAT, which means I spend as much time proving things as I do
          shipping them.
        </p>
        <div className={styles.body}>
          <p>
            That combination shapes how I build: I care about correctness
            before I care about polish, but I&apos;ve learned that a working
            proof and a working product both need to survive contact with a
            real user. Most of my recent work has been full-stack — Next.js,
            TypeScript, and whatever backend a project actually needs — built
            for people in Kenya, from an NGO&apos;s donation flow to a
            university parking system.
          </p>
          <p>
            I&apos;m especially interested in the gap between a technically
            correct interface and one that feels considered — which is part
            of why I&apos;ve spent time building tooling that stops AI-assisted
            builds from defaulting to generic output.
          </p>
        </div>
      </div>
    </section>
  );
}
