import SectionHeading from '@/components/ui/SectionHeading';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <SectionHeading title="About" />
      <div className={styles.grid}>
        <p className={styles.lead}>
          Studying Mathematics has made me unusually comfortable sitting with
          a problem before reaching for an implementation.
        </p>
        <div className={styles.body}>
          <p>
            I&apos;m in my final year of a Mathematics and Computer Science
            degree at JKUAT, in Nakuru. Most of my recent work outside
            coursework has been building software for organisations that
            need it to actually work — not a portfolio piece, not a demo.
            The Mwenda Kimathi Foundation needed a real donation flow, not a
            page that looks like one. EGESHASMART needed vehicle detection
            that could drive a real payment decision, not a model that only
            performs well in a notebook.
          </p>
          <p>
            That combination changes how I approach a build. I&apos;d rather
            spend longer figuring out what a problem actually is — what
            &quot;a listing&quot; means when it has to represent both a
            borrowed drill and a booked tutoring session, for instance —
            than start writing code against an assumption I haven&apos;t
            checked.
          </p>
          <p>
            I also try to keep AI-assisted development from producing the
            generic output it defaults to. That started as a practical
            problem on my own projects and turned into a two-file system
            (process rules plus a per-project design reference) that I use
            across builds, including this site.
          </p>
        </div>
      </div>
    </section>
  );
}
