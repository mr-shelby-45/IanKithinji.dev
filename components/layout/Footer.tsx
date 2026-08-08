import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.mono}>© {year} Ian Kithinji — Nakuru, Kenya</p>
        <div className={styles.links}>
          <a href="mailto:iankithinji19@gmail.com" className={styles.link}>
            Email
          </a>
          <a href="https://github.com/mr-shelby-45" className={styles.link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
