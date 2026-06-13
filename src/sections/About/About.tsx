import styles from './About.module.css';
import { Container } from '../../components/Container/Container';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ptBR as t } from '../../locales/pt-BR';

import gear from '../../assets/gear.svg';

function GearSVG() {
  return (
    <img className={styles.gear} src={gear} alt="Gear" />
  );
}

export function About() {
  const stats = t.about.stats;

  return (
    <section className={`section section--surface ${styles.about}`} id="about">
      <Container>
        <div className={styles.grid}>
          <div className={styles.text}>
            <SectionTitle badge={t.about.badge} title={t.about.title} />
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <div className={styles.stats}>
              {Object.values(stats).map(s => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statNum}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.orb}>
              <div className={styles.inner}>
                <GearSVG />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
function GearSVG() {
  return (
    <svg className={styles.gear} viewBox="0 0 80 80" fill="none">
      <path
        d="M40 10 L44 5 L48 5 L50 10 L55 11 L57 6 L62 8 L61 14 L65 17 L70 14 L74 18 L71 23 L73 28 L78 29 L78 34 L73 35 L71 40 L75 44 L72 49 L67 47 L63 50 L63 56 L58 57 L56 52 L51 51 L48 56 L43 56 L41 51 L36 51 L33 55 L28 54 L28 49 L24 46 L19 49 L15 45 L18 40 L16 35 L10 34 L10 29 L16 28 L18 23 L14 18 L18 15 L23 18 L28 15 L27 9 L32 8 L35 13 L40 12 Z"
        fill="rgba(179,131,5,0.5)" stroke="#B38305" strokeWidth="1"
      />
      <circle cx="40" cy="30" r="12" fill="rgba(0,0,26,0.8)" stroke="#B38305" strokeWidth="1.5" />
      <circle cx="40" cy="30" r="5"  fill="#B38305" />
    </svg>
  );
}
*/