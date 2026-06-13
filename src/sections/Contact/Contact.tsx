//formEvent anteriormente, mas agora usando SubmitEvent do React para melhor tipagem
import { type SubmitEvent } from 'react';
import styles from './Contact.module.css';
import { Container } from '../../components/Container/Container';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { ptBR as t } from '../../locales/pt-BR';

export function Contact() {
  const f = t.contact.form;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  return (
    <section className={`section section--surface`} id="contact">
      <Container>
        <div className={styles.grid}>

          <div className={styles.info}>
            <SectionTitle badge={t.contact.badge} title={t.contact.title} />
            <p className={styles.desc}>{t.contact.desc}</p>

            <div className={styles.contactItem}>
              <div className={styles.icon}><EmailIcon /></div>
              <div>
                <div className={styles.itemLabel}>{t.contact.email}</div>
                <div>technedev.oficial@gmail.com</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}><PhoneIcon /></div>
              <div>
                <div className={styles.itemLabel}>{t.contact.phone}</div>
                <div>(84) 99915-4346</div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>{f.name}</label>
                <input className={styles.input} type="text" placeholder={f.namePh} required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{f.email}</label>
                <input className={styles.input} type="email" placeholder={f.emailPh} required />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{f.subject}</label>
              <input className={styles.input} type="text" placeholder={f.subjectPh} required />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{f.message}</label>
              <textarea className={styles.textarea} placeholder={f.messagePh} required />
            </div>
            <Button type="submit" variant="primary">
              <SendIcon />
              {f.submit}
            </Button>
          </form>

        </div>
      </Container>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38305" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B38305" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.93a2 2 0 012-2.18h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.02-.57a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}