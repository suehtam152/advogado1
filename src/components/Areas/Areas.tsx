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
      <div className={styles.grid}>
        {areas.map((area) => (
          <div className={styles.card} key={area.title}>
            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardDescription}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 