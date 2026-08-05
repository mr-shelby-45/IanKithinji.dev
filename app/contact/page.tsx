import SectionHeading from '@/components/ui/SectionHeading';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Kimathi',
};

export default function ContactPage() {
  return (
    <section className={`container ${styles.section}`}>
      <SectionHeading index="04" title="Contact" />
      <div className={styles.grid}>
        <p className={styles.lead}>
          Building something and want a second pair of hands, or just want to
          talk shop about math and code? Reach out.
        </p>

        <form className={styles.form} action="/api/contact" method="POST">
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input id="name" name="name" type="text" className={styles.input} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input id="email" name="email" type="email" className={styles.input} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea id="message" name="message" rows={5} className={styles.textarea} required />
          </div>

          <button type="submit" className={styles.submit}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
