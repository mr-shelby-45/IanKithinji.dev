import styles from './SectionHeading.module.css';

export default function SectionHeading({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
