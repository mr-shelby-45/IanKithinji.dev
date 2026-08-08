import SectionHeading from '@/components/ui/SectionHeading';
import { capabilities } from '@/lib/data/capabilities';
import styles from './Approach.module.css';

export default function Approach() {
  return (
    <section id="approach" className={`container ${styles.section}`}>
      <SectionHeading
        title="How I Work"
        lead="Not a technology list. What actually shows up across the projects above."
      />
      <div className={styles.list}>
        {capabilities.map((cap) => (
          <div key={cap.label} className={styles.item}>
            <h3 className={styles.label}>{cap.label}</h3>
            <p className={styles.description}>{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
