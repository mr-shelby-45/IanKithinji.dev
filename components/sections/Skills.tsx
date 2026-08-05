import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/lib/data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`container ${styles.section}`}>
      <SectionHeading index="02" title="Skills" />
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            <p className={styles.groupLabel}>{group.label}</p>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
