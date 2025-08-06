import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image 
          src="/logomarca-1.png" 
          alt="Juston - logomarca" 
          width={80} 
          height={80} 
          className={styles.logo}
        />
        <span className={styles.logoText}>Juston</span>
      </div>
      <Button 
        href="#contato" 
        variant="primary" 
        size="small"
        className={styles.contactButton}
      >
        Fale Conosco
      </Button>
    </header>
  );
} 