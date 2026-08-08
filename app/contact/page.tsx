import SectionHeading from '@/components/ui/SectionHeading';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Ian Kithinji',
};

export default function ContactPage() {
  return (
    <section className={`container ${styles.section}`}>
      <SectionHeading title="Contact" />
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Good reasons to get in touch: a software project with a real
            problem behind it, a technical conversation worth having, or an
            internship or role where the work above is relevant.
          </p>
          <a href="mailto:iankithinji19@gmail.com" className={styles.emailLink}>
            iankithinji19@gmail.com
          </a>
          <p className={styles.note}>
            Email is the fastest way to reach me. The form below works too,
            if you&apos;d rather use it.
          </p>
        </div>

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
