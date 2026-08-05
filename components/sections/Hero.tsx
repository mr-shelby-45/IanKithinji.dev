import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Nakuru, Kenya</p>
        <h1 className={styles.headline}>
          I build things at the
          <br />
          intersection of <span className={styles.accent}>proof</span> and{' '}
          <span className={styles.accent}>product</span>.
        </h1>
        <p className={styles.sub}>
          Final-year Mathematics &amp; Computer Science student at JKUAT.
          I ship full-stack web applications — from NGO platforms to
          computer-vision systems — with the same rigor I bring to a proof.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View projects
          </a>
          <a href="/contact" className={styles.secondaryBtn}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
