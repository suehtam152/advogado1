import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.overlay} />
      <section className={`container section ${styles.heroSection}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Defesa dos seus direitos com excelência e inovação
          </h1>
          <p className={styles.description}>
            Juston especializado em soluções jurídicas modernas, atendimento personalizado e resultados concretos.
          </p>
          <div className={styles.desktopButton}>
            <Button href="#contato" variant="primary" size="large">
              Agende uma consulta
            </Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/notebook.png" 
            alt="Notebook - imagem gerada por IA" 
            width={540} 
            height={370} 
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.mobileButton}>
          <Button href="#contato" variant="primary" size="large">
            Agende uma consulta
          </Button>
        </div>
      </section>
    </>
  );
} 