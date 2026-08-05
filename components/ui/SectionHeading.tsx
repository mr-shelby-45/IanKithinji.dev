import styles from './SectionHeading.module.css';

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.index}>§{index}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rule} />
    </div>
  );
}
