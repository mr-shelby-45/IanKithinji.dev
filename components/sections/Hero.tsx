import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Nakuru, Kenya</p>
        <h1 className={styles.headline}>
          I build software for problems worth solving.
        </h1>
        <p className={styles.sub}>
          Final-year Mathematics &amp; Computer Science student at JKUAT. I
          build full-stack software for organisations with real
          constraints — an NGO that needs donations to actually clear, a
          neighbourhood marketplace that needs trust, a parking system that
          has to work with an actual camera and actual cars.
        </p>
        <div className={styles.actions}>
          <a href="#work" className={styles.primaryLink}>
            See the work →
          </a>
          <a href="/contact" className={styles.secondaryLink}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
