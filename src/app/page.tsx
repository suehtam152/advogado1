'use client';
import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const areas = [
  { title: 'Direito Civil', desc: 'Contratos, responsabilidade civil, indenizações e mais.' },
  { title: 'Direito Trabalhista', desc: 'Defesa de direitos do trabalhador e do empregador.' },
  { title: 'Direito de Família', desc: 'Divórcio, guarda, pensão, inventário e sucessões.' },
  { title: 'Direito Empresarial', desc: 'Assessoria jurídica para empresas e empresários.' },
];

const diferenciais = [
  'Atendimento personalizado e humanizado',
  'Transparência e ética em todos os processos',
  'Equipe especializada e atualizada',
  'Soluções inovadoras e eficientes',
];

export default function Home() {
  return (
    <div className="home-bg" style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-20 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3" style={{ marginLeft: '0.5cm' }}>
          <Image src="/logomarca-1.png" alt="Juston - logomarca" width={60} height={60} className="rounded-lg bg-white" />
          <span className="font-black text-xl text-gray-800" style={{ fontFamily: 'Montserrat, Inter, Arial, sans-serif', fontWeight: 900 }}>Juston</span>
        </div>
        <a href="#contato" className="btn font-bold opacity-100" style={{ marginRight: '0.5cm' }}>
          Fale Conosco
        </a>
      </header>

      <section className="hero-section relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-6 md:pt-32 pb-10">
        <div className="hero-content text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center md:h-full">
          <h1 className="text-[30px] font-bold mt-2 md:mt-0 mb-6 md:mb-10 text-gray-800 leading-tight" style={{ marginTop: '-1.5cm', fontSize: '30px' }}>
            <span className="md:text-[120px] md:leading-[1.1]">Defesa dos seus direitos com excelência e inovação</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
            Juston especializado em soluções jurídicas modernas, atendimento personalizado e resultados concretos.
          </p>
          <div className="mt-8 md:mt-0">
            <a href="#contato" className="btn font-bold opacity-100 text-xl px-10 py-5">Agende uma consulta</a>
          </div>
        </div>
        
        <div className="hero-image md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end md:items-start">
          <Image 
            src="/notebook.png" 
            alt="Notebook - imagem gerada por IA" 
            width={540} 
            height={370} 
            className="rounded-xl w-full max-w-md md:max-w-2xl h-auto opacity-100" 
          />
        </div>
      </section>

      <section className="px-4 md:px-8 py-10 relative z-10">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] mb-8 text-gray-800 text-center md:text-left">Áreas de Atuação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {areas.map((area) => (
            <div className="card" key={area.title} style={{ 
              background: '#fff', 
              borderRadius: 10, 
              padding: '1.5rem', 
              minHeight: 160, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              maxWidth: 'calc(100% - 1cm)',
              boxSizing: 'border-box',
              margin: '0 0.5cm 0.5cm 0.5cm'
            }}>
              <h3 style={{ color: '#1a1a1a', fontWeight: 700 }}>{area.title}</h3>
              <p style={{ color: '#6b7280' }}>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-10 relative z-10" id="sobre">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] mb-5 text-gray-800 text-center md:text-left">Sobre a Juston</h2>
        <p className="max-w-4xl text-gray-600 text-lg text-center md:text-left mx-auto">
          Com anos de experiência e uma equipe altamente qualificada, oferecemos assessoria jurídica completa, sempre pautados pela ética, transparência e compromisso com o cliente. Nosso objetivo é garantir a melhor solução para cada caso, utilizando tecnologia e conhecimento atualizado.
        </p>
      </section>

      <section className="px-4 md:px-8 py-10 relative z-10">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] mb-5 text-gray-800 text-center md:text-left">Nossos Diferenciais</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto list-none p-0">
          {diferenciais.map((dif, idx) => (
            <li key={idx} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#fff', 
              borderRadius: 8, 
              padding: '1rem', 
              minHeight: '60px',
              maxWidth: 'calc(100% - 1cm)',
              boxSizing: 'border-box',
              margin: '0 0.5cm 0.5cm 0.5cm'
            }}>
              <span style={{ fontSize: 22, color: '#1a1a1a' }}>✔</span>
              <span style={{ color: '#6b7280', fontSize: '1.08rem' }}>{dif}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 md:px-8 py-10 relative z-10">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] mb-5 text-gray-800 text-center md:text-left">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <blockquote style={{ 
            background: '#fff', 
            borderRadius: 10, 
            padding: '1.5rem', 
            minHeight: 160, 
            position: 'relative', 
            paddingBottom: '2.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            maxWidth: 'calc(100% - 1cm)',
            boxSizing: 'border-box',
            border: '1px solid #ececec',
            overflow: 'hidden',
            margin: '0 0.5cm 0.5cm 0.5cm'
          }}>
            "Fui muito bem atendido, o time é atencioso e resolveu meu caso com rapidez!"
            <footer style={{ position: 'absolute', left: '1.5rem', bottom: '1.2rem', color: '#1a1a1a', fontWeight: 700, marginTop: 0 }}>– João Pereira</footer>
          </blockquote>
          <blockquote style={{ 
            background: '#fff', 
            borderRadius: 10, 
            padding: '1.5rem', 
            minHeight: 160, 
            position: 'relative', 
            paddingBottom: '2.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            maxWidth: 'calc(100% - 1cm)',
            boxSizing: 'border-box',
            border: '1px solid #ececec',
            overflow: 'hidden',
            margin: '0 0.5cm 0.5cm 0.5cm'
          }}>
            "Profissionais sérios e muito qualificados. Recomendo!"
            <footer style={{ position: 'absolute', left: '1.5rem', bottom: '1.2rem', color: '#1a1a1a', fontWeight: 700, marginTop: 0 }}>– Ana Souza</footer>
          </blockquote>
        </div>
      </section>

      <section className="px-4 md:px-8 py-10 relative z-10 max-w-full overflow-hidden" id="contato">
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.2rem', color: '#1a1a1a', textAlign: 'center' }}>Fale Conosco</h2>
        <form
          style={{
            maxWidth: 'calc(100% - 1cm)',
            margin: '0 0.5cm 0.5cm 0.5cm',
            background: '#fff',
            borderRadius: 20,
            padding: 'clamp(1rem, 4vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxSizing: 'border-box',
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              phone: formData.get('phone') as string,
              message: formData.get('message') as string,
            };

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });

              if (response.ok) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                e.currentTarget.reset();
              } else {
                const error = await response.json();
                alert(`Erro: ${error.error}`);
              }
            } catch (error) {
              alert('Erro ao enviar mensagem. Tente novamente.');
            }
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
              <input
                name="name"
                type="text"
                placeholder="Seu nome"
                required
                style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16 }}
              />
              <input
                name="phone"
                type="text"
                placeholder="Seu contato"
                required
                style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16 }}
              />
              <input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                required
                style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16 }}
              />
            </div>
            <div style={{ display: 'flex', flex: 2 }}>
              <textarea
                name="message"
                placeholder="Descreva brevemente sua dúvida ou situação jurídica. Ex: 'Preciso de orientação sobre um contrato', 'Tenho dúvidas sobre pensão alimentícia', etc."
                required
                rows={8}
                style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16, width: '100%', resize: 'vertical', minHeight: 140 }}
              />
            </div>
          </div>
          <button
            className="btn"
            type="submit"
            style={{ fontWeight: 700, width: '100%', alignSelf: 'center', marginTop: 12 }}
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', color: '#6b7280', padding: '2rem 0 1rem 0', fontSize: 15, background: '#f7f7f8', borderTop: '1px solid #ececec', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="WhatsApp" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaWhatsapp /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="Instagram" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="LinkedIn" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaLinkedin /></a>
        </div>
        &copy; {new Date().getFullYear()} Juston. Todos os direitos reservados.
      </footer>
    </div>
  );
} 