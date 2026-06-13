import styles from './Portfolio.module.css';
import { Container } from '../../components/Container/Container';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { PortfolioCard } from '../../components/PortfolioCard/PortfolioCard';
import { ptBR as t } from '../../locales/pt-BR';
import { projects } from '../../data/portfolio';

export function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <Container>
        <SectionTitle
          badge={t.portfolio.badge}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
          center
        />
        <div className={styles.grid}>
          {projects.map(p => (
            <PortfolioCard
              key={p.id}
              title={p.title}
              description={p.description}
              initials={p.initials}
              tag={p.tag}
              image={p.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}