# Guia da Nova Estrutura CSS - Juston

## 📁 Estrutura de Pastas Organizada

```
src/
 ├─ styles/                    # Estilos globais e variáveis
 │   ├─ variables.css         # Variáveis CSS centralizadas
 │   └─ global.css            # Estilos globais limpos
 ├─ components/               # Componentes modulares
 │   ├─ Header/
 │   │   ├─ Header.tsx
 │   │   └─ Header.module.css
 │   ├─ Hero/
 │   │   ├─ Hero.tsx
 │   │   └─ Hero.module.css
 │   ├─ Areas/
 │   │   ├─ Areas.tsx
 │   │   └─ Areas.module.css
 │   └─ Layout/
 │       ├─ Layout.tsx
 │       └─ Layout.module.css
 └─ app/
     ├─ page.tsx              # Página atual (com estilos inline)
     ├─ page-modular.tsx      # Exemplo modularizado
     └─ layout.tsx            # Layout principal
```

## ✅ Benefícios da Nova Estrutura

### 1. **Separação de Responsabilidades**
- **`variables.css`**: Todas as variáveis CSS centralizadas
- **`global.css`**: Apenas estilos realmente globais
- **`.module.css`**: Estilos específicos de cada componente

### 2. **Segurança e Manutenibilidade**
- ✅ CSS Modules evitam conflitos de nomes
- ✅ Variáveis centralizadas facilitam mudanças
- ✅ Componentes isolados e reutilizáveis
- ✅ Sem estilos inline no JSX

### 3. **Organização por Componentes**
```tsx
// Antes (estilos inline)
<header style={{ width: '100%', background: '#fff', ... }}>

// Depois (CSS modular)
<header className={styles.header}>
```

## 🎯 Como Usar

### 1. **Variáveis Globais** (`variables.css`)
```css
:root {
  --color-primary: #1A1A1A;
  --spacing-lg: 2rem;
  --radius-sm: 8px;
}
```

### 2. **Estilos Globais** (`global.css`)
```css
/* Apenas estilos realmente globais */
body { background: var(--color-bg); }
.btn { background: var(--color-secondary); }
.container { max-width: var(--container-max-width); }
```

### 3. **Componentes Modulares**
```tsx
// Header.tsx
import styles from './Header.module.css';

export default function Header() {
  return <header className={styles.header}>...</header>;
}
```

```css
/* Header.module.css */
.header {
  width: 100%;
  background: #fff;
  /* Estilos específicos do header */
}
```

## 🔄 Migração Gradual

### Opção 1: Manter Página Atual
- A página `page.tsx` atual continua funcionando
- Use `page-modular.tsx` como referência para migração

### Opção 2: Migração Completa
1. Substitua `page.tsx` pelo conteúdo de `page-modular.tsx`
2. Migre seção por seção para componentes modulares
3. Remova estilos inline gradualmente

## 📱 Responsividade

A responsividade está organizada em camadas:

1. **Global**: Media queries básicas no `global.css`
2. **Componente**: Media queries específicas em cada `.module.css`
3. **Tailwind**: Classes utilitárias quando necessário

## 🎨 Customização

### Mudar Cores
```css
/* variables.css */
:root {
  --color-primary: #NOVA_COR;
}
```

### Mudar Espaçamentos
```css
/* variables.css */
:root {
  --spacing-lg: 3rem; /* Novo valor */
}
```

### Adicionar Novos Componentes
1. Crie pasta `src/components/NovoComponente/`
2. Crie `NovoComponente.tsx` e `NovoComponente.module.css`
3. Importe e use no layout

## 🚀 Próximos Passos

1. **Migrar seções restantes** para componentes modulares
2. **Criar componentes reutilizáveis** (Button, Card, etc.)
3. **Implementar tema escuro** usando variáveis CSS
4. **Otimizar performance** com CSS-in-JS se necessário

## 📋 Checklist de Migração

- [x] Criar estrutura de pastas
- [x] Separar variáveis CSS
- [x] Limpar CSS global
- [x] Criar componentes Header, Hero, Areas
- [x] Criar Layout component
- [ ] Migrar seções restantes
- [ ] Remover estilos inline
- [ ] Testar responsividade
- [ ] Documentar componentes

---

**Resultado**: Sistema mais organizado, seguro e fácil de manter! 🎉 