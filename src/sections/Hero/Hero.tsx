import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { Button } from '../../components/Button/Button';
import { ptBR as t } from '../../locales/pt-BR';

import logo from '../../assets/logo.svg';

function HeroLogoSVG() {
  return <img src={logo} alt="TechneDev Logo" className={styles.logoImg} />;
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('div');
      el.className = styles.particle;
      const size = Math.random() * 80 + 20;
      el.style.cssText = [
        `width:${size}px`, `height:${size}px`,
        `left:${Math.random() * 100}%`, `top:${Math.random() * 100}%`,
        `--dur:${3 + Math.random() * 4}s`,
        `--del:-${Math.random() * 4}s`,
        `opacity:${0.03 + Math.random() * 0.06}`,
      ].join(';');
      container.appendChild(el);
    }
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={styles.particles} ref={particlesRef} />

      <div className={styles.container}>
        <div className={`${styles.left} anim-fade-up`}>
          <div className={styles.eyebrow}>
            <TriangleIcon />
            {t.hero.eyebrow}
          </div>

          <h1 className={styles.title}>
            {t.hero.title1}
            <br />
            {t.hero.title2}
            <br />
            {t.hero.title3}
            <span className={styles.gold}>{t.hero.titleGold}</span>
          </h1>

          <p className={styles.desc}>{t.hero.desc}</p>

          <div className={styles.btnGroup}>
            <Button variant="primary" onClick={() => scrollTo('portfolio')}>
              <MonitorIcon />
              {t.hero.btnWork}
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              <PhoneIcon />
              {t.hero.btnContact}
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.logoWrap}>
            <div className={styles.glow} />
            <div className={styles.ring} />
            <div className={styles.ring2} />
            <div className={styles.orbitDot} style={{ '--dur': '6s' } as React.CSSProperties} />
            <div className={styles.orbitDotSm} style={{ '--dur': '9s', '--del': '-3s' } as React.CSSProperties} />
            <HeroLogoSVG />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ── */
function TriangleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--primary)">
      <polygon points="6,1 11,10 1,10" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.93a2 2 0 012-2.18h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.02-.57a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}



/*

function HeroLogoSVG() {
  return (
    <svg className={styles.logoSvg} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      // gear
      <g transform="translate(55,30)">
        <path
          d="M80 20 L95 8 L105 8 L110 20 L120 22 L125 12 L137 16 L135 28 L143 35 L155 30 L163 40 L155 50 L157 62 L170 65 L168 78 L155 78 L150 90 L160 98 L152 108 L141 102 L130 108 L130 122 L117 122 L115 108 L103 104 L93 113 L83 106 L90 95 L85 83 L72 83 L70 70 L83 67 L85 55 L75 47 L80 36 L93 39 L100 30 Z"
          fill="#B38305" opacity=".85"
        />
        <circle cx="120" cy="65" r="28" fill="#00001A" opacity=".95" />
        <path
          d="M80 20 L95 8 L105 8 L110 20 L120 22 L125 12 L137 16 L135 28 L143 35 L155 30 L163 40 L155 50 L157 62 L170 65 L168 78 L155 78 L150 90 L160 98 L152 108 L141 102 L130 108 L130 122 L117 122 L115 108 L103 104 L93 113 L83 106 L90 95 L85 83 L72 83 L70 70 L83 67 L85 55 L75 47 L80 36 L93 39 L100 30 Z"
          fill="none" stroke="rgba(179,131,5,0.4)" strokeWidth="1.5"
        />
      </g>
      // orbit rings 
      <circle cx="140" cy="130" r="55" fill="rgba(179,131,5,0.06)" stroke="rgba(179,131,5,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="140" cy="130" r="75" fill="none" stroke="rgba(179,131,5,0.1)" strokeWidth="1" strokeDasharray="4 6" />
      // figure 
      <g transform="translate(100,65) scale(0.85)">
        <rect x="24" y="30" width="46" height="60" rx="23" fill="rgba(230,220,200,0.9)" />
        <ellipse cx="47" cy="30" rx="23" ry="12" fill="rgba(230,220,200,0.9)" />
        <path d="M24 65 Q10 80 18 100 Q22 110 35 112 L59 112 Q72 110 76 100 Q84 80 70 65" fill="rgba(220,210,190,0.9)" />
        <line x1="47" y1="15" x2="47" y2="5" stroke="rgba(230,220,200,0.8)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="47" cy="4" rx="5" ry="5" fill="rgba(230,220,200,0.9)" />
        <path d="M38 115 L35 145 L59 145 L56 115" fill="rgba(220,210,190,0.9)" />
        <line x1="35" y1="145" x2="28" y2="175" stroke="rgba(210,200,180,0.9)" strokeWidth="8" strokeLinecap="round" />
        <line x1="59" y1="145" x2="66" y2="175" stroke="rgba(210,200,180,0.9)" strokeWidth="8" strokeLinecap="round" />
        <line x1="22" y1="88" x2="8"  y2="120" stroke="rgba(210,200,180,0.9)" strokeWidth="6" strokeLinecap="round" />
        <line x1="72" y1="88" x2="86" y2="128" stroke="rgba(210,200,180,0.9)" strokeWidth="6" strokeLinecap="round" />
      </g>
      // wordmark
      <text x="108" y="242" fontFamily="serif" fontSize="26" fontWeight="700" fill="white" letterSpacing="-0.5">Techne</text>
      <text x="196" y="242" fontFamily="serif" fontSize="26" fontWeight="700" fill="#B38305" letterSpacing="-0.5">Dev</text>
    </svg>
  );
}

*/