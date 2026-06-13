import styles from './PortfolioCard.module.css';

interface Props {
  title:       string;
  description: string;
  initials:    string;
  tag:         string;
  image?:      string;
}

export function PortfolioCard({ title, description, initials, tag, image }: Props) {

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        {image
          ? <img src={image} alt={title} className={styles.thumbImg} />
          : <div className={styles.thumbInitials}>{initials}</div>
        }
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.tag}>{tag}</span>
      </div>
    </div>
  );
}