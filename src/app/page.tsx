'use client';
import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';

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
      
      <Header />

      <section className="hero-section relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-6 md:pt-32 pb-10">
        <div className="hero-content text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center md:h-full">
          <h1 className="text-[30px] font-bold mt-2 md:mt-0 mb-6 md:mb-10 text-gray-800 leading-tight" style={{ marginTop: '-1.5cm', fontSize: '30px' }}>
            <span className="md:text-[120px] md:leading-[1.1] font-extrabold" style={{ color: 'var(--color-primary)' }}>Defesa dos seus direitos com excelência e inovação</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
            Juston especializado em soluções jurídicas modernas, atendimento personalizado e resultados concretos.
          </p>
          <div className="mt-8 md:mt-0">
            <a href="#contato" className="btn btn-success fw-bold btn-lg px-4 py-3">Agende uma consulta</a>
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

                           <section className="px-4 md:px-12 py-10 relative z-10">
          <h2 className="mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)] text-gray-800 text-center md:text-left">Áreas de Atuação</h2>
         <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-center">
           {areas.map((area) => (
             <div className="col" key={area.title}>
               <div 
                 className="card h-100"
                 style={{ 
                   background: '#fff', 
                   borderRadius: 10, 
                   padding: '1.5rem', 
                   minHeight: 0, 
                   display: 'flex', 
                   flexDirection: 'column', 
                   justifyContent: 'space-between',
                   boxSizing: 'border-box'
                 }}
               >
                 <h3 className="mb-1 mb-md-2" style={{ color: '#1a1a1a', fontWeight: 700 }}>{area.title}</h3>
                 <p className="mb-0" style={{ color: '#6b7280' }}>{area.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </section>

                    <section className="px-6 md:px-12 py-10 relative z-10" id="sobre">
        <h2 className="mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)] text-gray-800 text-center md:text-left">Sobre a Juston</h2>
        <p className="max-w-4xl text-gray-600 text-lg text-center md:text-left mx-auto">
          Com anos de experiência e uma equipe altamente qualificada, oferecemos assessoria jurídica completa, sempre pautados pela ética, transparência e compromisso com o cliente. Nosso objetivo é garantir a melhor solução para cada caso, utilizando tecnologia e conhecimento atualizado.
        </p>
      </section>

                                         <section className="px-4 md:px-12 py-10 relative z-10">
          <h2 className="mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)] text-gray-800 text-center md:text-left">Nossos Diferenciais</h2>
          <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-center align-items-md-stretch">
            {diferenciais.map((dif, idx) => (
              <div className="col d-flex" key={idx}>
                <li className="w-100 h-100" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  background: '#fff', 
                  borderRadius: 8, 
                  padding: '1rem', 
                  minHeight: '100px',
                  height: '100%',
                  boxSizing: 'border-box',
                  listStyle: 'none'
                }}>
                  <span style={{ fontSize: 22, color: '#1a1a1a' }}>✔</span>
                  <span style={{ color: '#6b7280', fontSize: '1.08rem' }}>{dif}</span>
                </li>
              </div>
            ))}
          </div>
        </section>

                                                                                                               <section className="px-4 md:px-12 py-10 relative z-10">
            <h2 className="mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)] text-gray-800 text-center md:text-left">O que dizem nossos clientes</h2>
          <div className="row g-3 justify-content-center">
            {/* Coluna esquerda */}
            <div className="col-12 col-md-6 d-md-flex">
              <blockquote style={{ 
                background: '#fff', 
                borderRadius: 10, 
                padding: '1.5rem', 
                minHeight: 100, 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                border: '1px solid #ececec',
                overflow: 'hidden',
                margin: '0 0 0.5rem 0'
              }} className="w-100 h-100 d-flex flex-column justify-content-between pb-5 pb-md-4">
                "Fui muito bem atendido, o time é atencioso e resolveu meu caso com rapidez!"
                <footer style={{ position: 'absolute', left: '1.5rem', bottom: '1.2rem', color: '#1a1a1a', fontWeight: 700, marginTop: 0 }}>– João Pereira</footer>
              </blockquote>
            </div>
            
            {/* Coluna direita */}
            <div className="col-12 col-md-6 d-md-flex">
              <blockquote style={{ 
                background: '#fff', 
                borderRadius: 10, 
                padding: '1.5rem', 
                minHeight: 100, 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                border: '1px solid #ececec',
                overflow: 'hidden',
                margin: '0 0 0.5rem 0'
              }} className="w-100 h-100 d-flex flex-column justify-content-between pb-5 pb-md-4">
                "Profissionais sérios e muito qualificados. Recomendo!"
                <footer style={{ position: 'absolute', left: '1.5rem', bottom: '1.2rem', color: '#1a1a1a', fontWeight: 700, marginTop: 0 }}>– Ana Souza</footer>
              </blockquote>
            </div>
          </div>
        </section>

                           <section className="px-4 md:px-12 py-10 relative z-10 max-w-full overflow-hidden" id="contato">
         <h2 className="mt-5 mb-5" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#1a1a1a', textAlign: 'center' }}>Fale Conosco</h2>
         <form
           style={{
             maxWidth: '72rem',
             margin: '0 auto',
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
                                           <div className="row g-3">
              <div className="col-12 col-md-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16, width: '100%' }}
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Seu contato"
                  required
                  style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16, width: '100%', marginTop: '1rem' }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16, width: '100%', marginTop: '1rem' }}
                />
              </div>
              <div className="col-12 col-md-8">
                <textarea
                  name="message"
                  placeholder="Descreva brevemente sua dúvida ou situação jurídica. Ex: 'Preciso de orientação sobre um contrato', 'Tenho dúvidas sobre pensão alimentícia', etc."
                  required
                  rows={8}
                  style={{ padding: '0.8em', borderRadius: 8, border: '1.5px solid #ececec', fontSize: 16, width: '100%', resize: 'vertical', minHeight: 140 }}
                />
              </div>
            </div>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '14px', color: '#495057', marginBottom: '0.5rem' }}>
                <strong>Termo de Responsabilidade:</strong> O Juston atua exclusivamente como plataforma de intermediação e direcionamento de potenciais clientes a advogados e escritórios de advocacia cadastrados.
              </p>
              <button
                type="button"
                onClick={() => {
                  const termsDiv = document.getElementById('full-terms');
                  if (termsDiv) {
                    termsDiv.style.display = termsDiv.style.display === 'none' ? 'block' : 'none';
                  }
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid #6c757d',
                  color: '#6c757d',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#6c757d';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6c757d';
                }}
              >
                Ler mais
              </button>
            </div>
            
            <div id="full-terms" style={{ display: 'none', fontSize: '12px', color: '#6c757d', lineHeight: '1.4', maxHeight: '200px', overflowY: 'auto', padding: '1rem', background: 'white', borderRadius: '4px', border: '1px solid #dee2e6' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem', color: '#495057' }}>Termo de Responsabilidade</h4>
              <p style={{ marginBottom: '0.5rem' }}>O presente Termo de Responsabilidade ("Termo") estabelece as condições de uso do site Juston, que atua exclusivamente como plataforma de intermediação e direcionamento de potenciais clientes a advogados e escritórios de advocacia cadastrados.</p>
              
              <h5 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.8rem', color: '#495057' }}>1. Natureza do Serviço</h5>
              <p style={{ marginBottom: '0.5rem' }}>O Juston não é um escritório de advocacia, não presta serviços jurídicos e não mantém vínculo empregatício ou societário com os advogados indicados. O site atua apenas como um meio tecnológico para facilitar o contato entre usuários e profissionais especializados.</p>
              
              <h5 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.8rem', color: '#495057' }}>2. Limitação de Responsabilidade</h5>
              <p style={{ marginBottom: '0.5rem' }}>O Juston não se responsabiliza, direta ou indiretamente, por:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>
                <li>Conduta profissional, ética ou pessoal dos advogados indicados;</li>
                <li>Prazos processuais, administrativos ou contratuais;</li>
                <li>Valores cobrados pelos profissionais;</li>
                <li>Serviços mal prestados ou não executados;</li>
                <li>Informações incorretas ou omissas fornecidas pelos advogados ou usuários;</li>
                <li>Qualquer prejuízo, dano material, moral ou financeiro decorrente da relação entre cliente e advogado.</li>
              </ul>
              
              <h5 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.8rem', color: '#495057' }}>3. Relação Cliente–Advogado</h5>
              <p style={{ marginBottom: '0.5rem' }}>Toda e qualquer negociação, contratação, definição de honorários, forma de pagamento, escopo e execução dos serviços jurídicos é de responsabilidade exclusiva do advogado e do cliente. O Juston não interfere, media ou fiscaliza tais tratativas.</p>
              
              <h5 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.8rem', color: '#495057' }}>4. Verificação Profissional</h5>
              <p style={{ marginBottom: '0.5rem' }}>O Juston pode, a seu critério, solicitar comprovação de inscrição na OAB e demais informações para cadastro, porém não garante a veracidade ou atualização constante desses dados.</p>
              
              <h5 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.8rem', color: '#495057' }}>5. Aceitação do Termo</h5>
              <p style={{ marginBottom: '0.5rem' }}>Ao utilizar o site, o usuário declara estar ciente e de acordo com todas as cláusulas deste Termo, reconhecendo que o Juston é apenas uma ferramenta de conexão e não possui responsabilidade sobre o resultado final dos serviços contratados.</p>
            </div>
            
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                id="accept-terms"
                required
                style={{ width: '16px', height: '16px' }}
              />
              <label htmlFor="accept-terms" style={{ fontSize: '14px', color: '#495057', cursor: 'pointer' }}>
                Li e aceito os termos de responsabilidade
              </label>
            </div>
          </div>
          
          <button
            className="btn btn-primary"
            type="submit"
            style={{ fontWeight: 700, width: '100%', alignSelf: 'center', marginTop: 12 }}
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      <footer className="mt-4 mt-md-5" style={{ textAlign: 'center', color: '#6b7280', padding: '2rem 0 1rem 0', fontSize: 15, background: '#f7f7f8', borderTop: '1px solid #ececec', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <a href="https://wa.me/5571984699359" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="WhatsApp" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaWhatsapp /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="Instagram" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', fontSize: 32, transition: 'transform 0.2s ease' }} aria-label="LinkedIn" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FaLinkedin /></a>
        </div>
        &copy; {new Date().getFullYear()} Juston. Todos os direitos reservados.
      </footer>
    </div>
  );
} 