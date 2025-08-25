'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  showAdminButton?: boolean;
  showContactButton?: boolean;
}

export default function Header({ showAdminButton = true, showContactButton = true }: HeaderProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToHome = () => {
    // Se já estamos na página inicial, apenas volta ao topo
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se estamos em outra página, navega para a página inicial
      router.push('/');
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Se estamos na página inicial, faz scroll suave para a seção de contato
    if (window.location.pathname === '/') {
      // Aguarda um pouco para garantir que o DOM está pronto
      setTimeout(() => {
        const contactSection = document.getElementById('contato');
        if (contactSection) {
          // Calcula a posição considerando o header fixo e adiciona offset para posição mais baixa
          const headerHeight = 80; // altura do header
          const elementPosition = contactSection.offsetTop - headerHeight;
          
          // Offset ajustado: desktop sobe um pouco mais; mobile mantém confortável
          const additionalOffset = isMobile ? 140 : 160;
          
          window.scrollTo({
            top: elementPosition + additionalOffset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Se estamos em outra página, navega para a página inicial com âncora
      router.push('/#contato');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-20 flex items-center justify-between px-2 md:px-8">
      {/* Logo - mais à esquerda no mobile */}
      <div 
        className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200" 
        style={{ marginLeft: isMobile ? '0.2cm' : '0.5cm' }}
        onClick={goToHome}
        title="Voltar ao início"
      >
        <Image 
          src="/logomarca-1.png" 
          alt="Juston - logomarca" 
          width={60} 
          height={60} 
          className="rounded-lg bg-white" 
        />
        <span 
          className="font-black text-xl text-gray-800" 
          style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif', fontWeight: 900 }}
        >
          Juston
        </span>
      </div>
      
      {/* Botões desktop (visíveis apenas em desktop) */}
      <div className="d-none d-md-flex align-items-center gap-2" style={{ marginRight: '0.5cm' }}>
        {showAdminButton && (
          <a href="/admin" className="btn btn-outline-secondary fw-bold">
            Admin
          </a>
        )}
        {showContactButton && (
          <a 
            href="#contato" 
            className="btn btn-primary fw-bold"
            onClick={scrollToContact}
          >
            Fale Conosco
          </a>
        )}
      </div>

      {/* Botão hamburger mobile (visível apenas em mobile) */}
      <div className="d-flex d-md-none align-items-center">
        <button
          onClick={toggleMobileMenu}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          style={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            background: isMobileMenuOpen ? '#f3f4f6' : '#ffffff',
            transition: 'transform .1s ease',
          }}
          onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.96)'; }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
        >
          <div style={{ width: 24, height: 24, position: 'relative' }}>
            <span style={{
              position: 'absolute', left: 0, right: 0, top: 4, height: 2, background: '#1f2937',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              transition: 'transform .3s ease',
            }} />
            <span style={{
              position: 'absolute', left: 0, right: 0, top: 11, height: 2, background: '#1f2937',
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: 'opacity .2s ease',
            }} />
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: 4, height: 2, background: '#1f2937',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              transition: 'transform .3s ease',
            }} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div
          className="d-md-none"
          style={{
            position: 'fixed',
            top: 80, // altura do header (h-20 ~ 80px)
            left: 0,
            right: 0,
            zIndex: 60,
            background: '#ffffff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            borderTop: '1px solid #eeeeee',
          }}
        >
          <div className="d-flex flex-column p-3 gap-2">
            {showAdminButton && (
              <a 
                href="/admin" 
                className="btn btn-outline-secondary fw-bold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </a>
            )}
            {showContactButton && (
              <a 
                href="#contato" 
                className="btn btn-primary fw-bold text-center"
                onClick={(e) => {
                  scrollToContact(e);
                  setIsMobileMenuOpen(false);
                }}
              >
                Fale Conosco
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
