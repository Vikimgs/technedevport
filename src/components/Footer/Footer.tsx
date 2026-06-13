import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { SocialLink } from '../SocialLink/SocialLink';
import { ptBR as t } from '../../locales/pt-BR';
import { socials } from '../../data/socials';
import { founders } from '../../data/founders';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>

          <div>
            <h4 className={styles.colTitle}>{t.footer.contactTitle}</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{t.contact.email}</span>
              <span className={styles.contactVal}>technedev.oficial@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{t.contact.phone}</span>
              <span className={styles.contactVal}>(84) 99915-4346</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{t.footer.locationLabel}</span>
              <span className={styles.contactVal}>{t.footer.locationValue}</span>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>{t.footer.socialsTitle}</h4>
            <ul className={styles.list}>
              {socials.map(s => (
                <SocialLink key={s.id} name={s.name} url={s.url} />
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>{t.footer.foundersTitle}</h4>
            <ul className={styles.founderList}>
              {founders.map(f => (
                <li key={f.id}>
                  <a
                    href={f.url}
                    className={styles.founderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.avatar}>{f.initials}</div>
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>{t.footer.copy}</p>
          <a href="#home" className={styles.bottomLogo}>
            <span className={styles.logoWhite}>Techne</span>
            <span className={styles.logoGold}>Dev</span>
          </a>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}