# 📱 Centralizações Mobile - Seção Hero

## 🎯 Elementos Centralizados

### **1. Título Centralizado**
```html
<h1 style="font-weight:800;font-size:clamp(1.8rem, 4vw, 2.5rem);color:var(--color-primary);margin-bottom:1.2rem">
  Defesa dos seus direitos com excelência e inovação
</h1>
```

**CSS Aplicado:**
```css
@media (max-width: 767px) {
  .title {
    text-align: center;
    width: 100%;
    display: block;
  }
}
```

### **2. Descrição Centralizada**
```html
<p style="max-width:500px;color:var(--color-detail);font-size:clamp(1rem, 2.5vw, 1.15rem);margin-bottom:24px">
  Juston especializado em soluções jurídicas modernas, atendimento personalizado e resultados concretos.
</p>
```

**CSS Aplicado:**
```css
@media (max-width: 767px) {
  .description {
    text-align: center;
    width: 100%;
    display: block;
  }
}
```

### **3. Imagem Centralizada**
```html
<img alt="Notebook - imagem gerada por IA" 
     style="border-radius:14px;max-width:100%;height:auto;margin-top:1rem;opacity:1"
     src="/notebook.png">
```

**CSS Aplicado:**
```css
@media (max-width: 767px) {
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--radius-lg);
  }
}
```

### **4. Botão Centralizado**
```html
<div class="mobile-btn" style="margin-top:2rem;width:100%;text-align:center">
  <a href="#contato" class="btn" style="font-weight:700;opacity:1">
    Agende uma consulta
  </a>
</div>
```

**CSS Aplicado:**
```css
@media (max-width: 767px) {
  .mobileButton {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
```

## 📐 Estrutura Final Mobile

### **Layout Visual**
```
┌─────────────────────┐
│                     │
│   TÍTULO            │ ← Centralizado
│ (centralizado)      │
│                     │
├─────────────────────┤
│                     │
│   DESCRIÇÃO         │ ← Centralizado
│ (centralizado)      │
│                     │
├─────────────────────┤
│                     │
│    [IMAGEM]         │ ← Centralizada
│   (notebook.png)    │
│                     │
├─────────────────────┤
│                     │
│   [BOTÃO]           │ ← Centralizado
│(Agende consulta)    │
│                     │
└─────────────────────┘
```

## 🎨 CSS Completo Mobile

### **Breakpoint 767px**
```css
@media (max-width: 767px) {
  .heroSection {
    flex-direction: column !important;
    text-align: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) 0;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    order: 1;
    text-align: center;
    margin-bottom: var(--spacing-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 1rem;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
  }
  
  .description {
    max-width: 100%;
    font-size: clamp(0.95rem, 3vw, 1.1rem);
    margin-bottom: var(--spacing-md);
    line-height: 1.5;
    text-align: center;
    width: 100%;
    display: block;
  }
  
  .imageContainer {
    order: 2;
    min-width: 100%;
    margin-top: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .image {
    max-width: 90%;
    margin-top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--radius-lg);
  }
  
  .mobileButton {
    order: 3;
    display: block !important;
    margin-top: var(--spacing-lg);
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
```

### **Breakpoint 480px**
```css
@media (max-width: 480px) {
  .heroSection {
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) 0;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    margin-bottom: var(--spacing-sm);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .title {
    font-size: clamp(1.3rem, 6vw, 1.8rem);
    margin-bottom: 0.8rem;
    text-align: center;
    width: 100%;
    display: block;
  }
  
  .description {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
    margin-bottom: var(--spacing-sm);
    text-align: center;
    width: 100%;
    display: block;
  }
  
  .image {
    max-width: 85%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--radius-lg);
  }
  
  .mobileButton {
    order: 3;
    margin-top: var(--spacing-md);
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
```

## ✅ Resultados Alcançados

### **Antes**
- ❌ Título não centralizado
- ❌ Descrição não centralizada
- ❌ Imagem não centralizada
- ❌ Botão não centralizado

### **Depois**
- ✅ Título perfeitamente centralizado
- ✅ Descrição perfeitamente centralizada
- ✅ Imagem notebook centralizada
- ✅ Botão centralizado e bem posicionado

## 📱 Teste das Centralizações

### **Como Verificar**
1. Abra o DevTools (F12)
2. Ative o modo responsivo
3. Escolha um dispositivo mobile (ex: iPhone SE)
4. Verifique se todos os elementos estão centralizados:
   - ✅ Título centralizado
   - ✅ Descrição centralizada
   - ✅ Imagem centralizada
   - ✅ Botão centralizado

### **Dispositivos Testados**
- ✅ iPhone SE (375px)
- ✅ iPhone 12 (390px)
- ✅ Samsung Galaxy S20 (360px)
- ✅ iPad (768px)

---

**Resultado**: Todos os elementos agora estão perfeitamente centralizados no mobile! 📱✨ 