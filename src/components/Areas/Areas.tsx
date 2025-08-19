import React from 'react';
import styles from './Areas.module.css';

const areas = [
  { title: 'Direito Civil', desc: 'Contratos, responsabilidade civil, indenizações e mais.' },
  { title: 'Direito Trabalhista', desc: 'Defesa de direitos do trabalhador e do empregador.' },
  { title: 'Direito de Família', desc: 'Divórcio, guarda, pensão, inventário e sucessões.' },
  { title: 'Direito Empresarial', desc: 'Assessoria jurídica para empresas e empresários.' },
];

export default function Areas() {
  return (
    <section className={`container section ${styles.section}`}>
      <h2 className={styles.title}>Áreas de Atuação</h2>
      <div
        className={styles.grid}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {areas.map((area) => (
          <div
            className={styles.card}
            key={area.title}
            style={{
              padding: '0.75rem',
              minHeight: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <h3 className={styles.cardTitle} style={{ marginBottom: '0.3rem' }}>
              {area.title}
            </h3>
            <p className={styles.cardDescription}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
