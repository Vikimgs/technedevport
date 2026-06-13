import { useEffect, useState} from 'react';
import styles from './Navbar.module.css';
import { Button } from '../Button/Button';
import { ptBR as t } from '../../locales/pt-BR';

import logo from '../../assets/logo.svg';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <img src={logo} alt="TechneDev" width={36} />
          <span className={styles.logoText}>
            <span className={styles.logoWhite}>Techne</span>
            <span className={styles.logoGold}>Dev</span>
          </span>
        </a>

        <nav>
          <ul className={styles.menu}>
            <li>
              <button className={styles.menuItem} onClick={() => scrollTo('about')}>
                {t.nav.about}
              </button>
            </li>
            <li>
              <button className={styles.menuItem} onClick={() => scrollTo('portfolio')}>
                {t.nav.portfolio}
              </button>
            </li>
            <li>
              <button className={styles.menuItem} onClick={() => scrollTo('contact')}>
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </nav>

        <Button variant="primary" onClick={() => scrollTo('contact')}>
          {t.nav.cta}
        </Button>
      </div>
    </header>
  );
}