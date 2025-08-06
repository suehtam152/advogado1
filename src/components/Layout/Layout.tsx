import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 Juston. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
} 