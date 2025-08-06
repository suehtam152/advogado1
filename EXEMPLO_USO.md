# Exemplo Prático - Nova Estrutura CSS

## 🎯 Como Usar os Componentes Modulares

### 1. **Usando o Button Component**

```tsx
import Button from '../components/Button/Button';

// Botão primário (padrão)
<Button href="#contato">Fale Conosco</Button>

// Botão secundário
<Button variant="secondary" onClick={handleClick}>
  Cancelar
</Button>

// Botão outline
<Button variant="outline" size="small">
  Saiba Mais
</Button>

// Botão grande
<Button variant="primary" size="large" href="#formulario">
  Agende uma Consulta
</Button>
```

### 2. **Criando um Novo Componente**

```tsx
// src/components/Testimonials/Testimonials.tsx
import React from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className={`container section ${styles.section}`}>
      <h2 className={styles.title}>Depoimentos</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.author}>
              <strong>{testimonial.name}</strong>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

```css
/* src/components/Testimonials/Testimonials.module.css */
.section {
  position: relative;
  z-index: 1;
}

.title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid #ececec;
}

.text {
  color: var(--color-detail);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  font-style: italic;
}

.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  color: var(--color-secondary);
  font-size: 1.2rem;
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### 3. **Usando na Página Principal**

```tsx
// src/app/page.tsx (versão modularizada)
'use client';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Areas from '../components/Areas/Areas';
import Testimonials from '../components/Testimonials/Testimonials';

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento! Resolveram meu problema rapidamente.",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissionais muito competentes e atenciosos.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="home-bg">
      <Layout>
        <Hero />
        <Areas />
        <Testimonials testimonials={testimonials} />
      </Layout>
    </div>
  );
}
```

## 🔧 Customização Fácil

### Mudar Cores Globais

```css
/* src/styles/variables.css */
:root {
  --color-primary: #2C3E50;    /* Nova cor primária */
  --color-secondary: #E74C3C;  /* Nova cor secundária */
  --color-accent: #3498DB;     /* Nova cor de destaque */
}
```

### Adicionar Nova Variável

```css
/* src/styles/variables.css */
:root {
  /* ... outras variáveis ... */
  --gradient-primary: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  --animation-duration: 0.3s;
}
```

### Usar em Componentes

```css
/* Em qualquer .module.css */
.myComponent {
  background: var(--gradient-primary);
  transition: all var(--animation-duration);
}
```

## 📱 Responsividade Organizada

### 1. **Global** (global.css)
```css
@media (max-width: 767px) {
  .container {
    padding-left: var(--spacing-sm);
    padding-right: var(--spacing-sm);
  }
}
```

### 2. **Componente** (Component.module.css)
```css
@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 1.5rem;
  }
}
```

### 3. **Tailwind** (quando necessário)
```tsx
<div className="md:flex lg:grid lg:grid-cols-3">
  {/* Conteúdo */}
</div>
```

## 🎨 Temas e Variações

### Criar Tema Escuro

```css
/* src/styles/variables.css */
:root {
  /* Tema claro (padrão) */
  --color-bg: #F7F7F8;
  --color-text: #232323;
}

[data-theme="dark"] {
  /* Tema escuro */
  --color-bg: #1A1A1A;
  --color-text: #FFFFFF;
  --color-primary: #BFA181;
}
```

### Usar Tema

```tsx
// Toggle de tema
const [theme, setTheme] = useState('light');

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);
```

## 🚀 Benefícios Práticos

### ✅ **Antes** (estilos inline)
```tsx
<header style={{
  width: '100%',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem clamp(1rem, 4vw, 2rem)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  // ... mais 20 linhas de estilos
}}>
```

### ✅ **Depois** (CSS modular)
```tsx
<header className={styles.header}>
  {/* Conteúdo limpo e focado */}
</header>
```

### ✅ **Reutilização**
```tsx
// Mesmo botão em diferentes contextos
<Button variant="primary" size="large">Agendar</Button>
<Button variant="secondary" size="small">Cancelar</Button>
<Button variant="outline" href="#contato">Fale Conosco</Button>
```

---

**Resultado**: Código mais limpo, organizado e fácil de manter! 🎉 