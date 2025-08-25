'use client';
import React, { useRef } from 'react';
import Header from '../../components/Header';

const cards = [
  {
    title: 'Problema com voo e bagagem',
    desc: 'Atraso, cancelamento ou extravio de bagagem.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="40" height="20" rx="6" fill="#1976D2" />
        <rect x="14" y="26" width="28" height="8" rx="2" fill="#BBDEFB" />
        <rect x="20" y="34" width="16" height="4" rx="1" fill="#388E3C" />
        <rect x="18" y="24" width="8" height="2" rx="1" fill="#fff" />
        <rect x="30" y="24" width="8" height="2" rx="1" fill="#fff" />
      </svg>
    ),
  },
  {
    title: 'Nome negativado indevidamente',
    desc: 'Seu nome foi para o SPC/SERASA sem motivo?',
    icon: (
      <svg width="64" height="64" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="18" width="32" height="20" rx="5" fill="#FFF9C4" />
        <circle cx="28" cy="28" r="6" fill="#F44336" />
        <circle cx="40" cy="22" r="4" fill="#1976D2" />
        <rect x="36" y="18" width="8" height="8" rx="4" fill="#fff" />
        <path d="M38 20l4 4M42 20l-4 4" stroke="#F44336" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Restituição de INSS para médicos',
    desc: 'Recupere valores pagos a mais no INSS.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28" cy="28" rx="18" ry="12" fill="#81C784" />
        <ellipse cx="28" cy="28" rx="10" ry="6" fill="#FFF176" />
        <circle cx="28" cy="28" r="3" fill="#388E3C" />
        <ellipse cx="36" cy="22" rx="3" ry="2" fill="#1976D2" />
      </svg>
    ),
  },
];

export default function Problemas() {
  const rippleRefs = useRef([]);

  function handleCardClick(e, idx) {
    const card = rippleRefs.current[idx];
    if (!card) return;
    const circle = document.createElement('span');
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - card.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - card.getBoundingClientRect().top - radius}px`;
    circle.className = 'ripple';
    card.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#fff',
      fontFamily: 'Poppins, Nunito, Arial, sans-serif',
      padding: 0,
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <Header showContactButton={false} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap');
        .card-acess {
          background: #fff;
          border: 2px solid #90caf9;
          border-radius: 20px;
          box-shadow: 0 4px 16px 0 #90caf930;
          transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
          cursor: pointer;
          padding: 2.2rem 1.5rem 1.5rem 1.5rem;
          min-width: 260px;
          max-width: 340px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          outline: none;
        }
        .card-acess:focus, .card-acess:hover {
          border: 2.5px solid #388E3C;
          box-shadow: 0 8px 32px 0 #388e3c30;
          transform: scale(1.04);
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: rgba(56, 142, 60, 0.18);
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .acess-btn {
          background: linear-gradient(90deg, #388E3C 0%, #43A047 100%);
          color: #fff;
          border-radius: 32px;
          padding: 1.1rem 2.5rem;
          font-weight: 800;
          font-size: 1.15rem;
          border: none;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 2px 8px #388e3c30;
          margin-top: 2.5rem;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .acess-btn:hover, .acess-btn:focus {
          background: linear-gradient(90deg, #43A047 0%, #388E3C 100%);
          box-shadow: 0 4px 16px #388e3c50;
        }
        @media (max-width: 700px) {
          .card-acess { min-width: 90vw !important; max-width: 98vw !important; }
        }
      `}</style>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '2.5rem 1rem 6rem 1rem'}}>
        <h1 style={{
          textAlign: 'center',
          color: '#1976D2',
          fontWeight: 900,
          fontSize: '2.3rem',
          letterSpacing: '-1px',
          margin: '2rem 0 0.5rem 0',
          fontFamily: 'Poppins, Nunito, Arial, sans-serif',
        }}>
          Como podemos te ajudar?
        </h1>
        <p style={{textAlign: 'center', color: '#388E3C', fontSize: '1.15rem', marginBottom: '2.2rem', fontWeight: 700}}>
          Escolha o seu problema abaixo e clique para continuar.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              ref={el => { if (el) rippleRefs.current[idx] = el; }}
              className="card-acess"
              tabIndex={0}
              style={{position: 'relative'}}
              onClick={e => handleCardClick(e, idx)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(e, idx); }}
            >
              <div style={{marginBottom: 18}}>{card.icon}</div>
              <div style={{color: '#1976D2', fontWeight: 800, fontSize: '1.15rem', textAlign: 'center', marginBottom: 8}}>{card.title}</div>
              <div style={{color: '#333', fontSize: '1rem', textAlign: 'center', fontWeight: 500}}>{card.desc}</div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className="acess-btn">Quero resolver meu problema</button>
        </div>
      </div>
    </div>
  );
} 