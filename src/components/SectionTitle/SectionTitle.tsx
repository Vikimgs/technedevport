import styles from './SectionTitle.module.css';

interface Props {
  badge?:    string;
  title:     string;
  subtitle?: string;
  center?:   boolean;
}

export function SectionTitle({ badge, title, subtitle, center }: Props) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ''}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}