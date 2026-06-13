import styles from './SocialLink.module.css';

interface Props {
  name: string;
  url:  string;
}

export function SocialLink({ name, url }: Props) {
  return (
    <li>
      <a
        href={url}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.arrow}>↗</span>
        {name}
      </a>
    </li>
  );
}