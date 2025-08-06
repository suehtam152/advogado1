# Juston - Plataforma Jurídica

Plataforma moderna e acessível para resolução de problemas jurídicos, desenvolvida com Next.js, TypeScript e Prisma.

## 🚀 Funcionalidades

- **Landing Page Profissional**: Design moderno e responsivo
- **Formulário de Contato**: Integrado com banco de dados e envio de emails
- **Sistema de Problemas**: Interface para categorização de problemas jurídicos
- **Painel Administrativo**: Gerenciamento de contatos e mensagens
- **Blog Jurídico**: Seção de artigos e dicas legais
- **Testimonials**: Depoimentos de clientes
- **FAQ**: Perguntas frequentes

## 🛠️ Tecnologias

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Database**: PostgreSQL com Prisma ORM
- **Email**: Nodemailer
- **Icons**: React Icons
- **Deployment**: Vercel (recomendado)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd advogado1
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/juston_db"

# Email Configuration
EMAIL_USER="seu-email@gmail.com"
EMAIL_PASS="sua-senha-de-app"
ADMIN_EMAIL="admin@juston.com"
```

4. **Configure o banco de dados**
```bash
# Gere o cliente Prisma
npx prisma generate

# Execute as migrações
npx prisma migrate dev

# (Opcional) Visualize o banco
npx prisma studio
```

5. **Execute o projeto**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/                    # APIs do backend
│   │   ├── contact/           # Processamento de contatos
│   │   ├── feedback/          # Sistema de feedback
│   │   └── contacts/          # Listagem de contatos
│   ├── admin/                 # Painel administrativo
│   ├── problemas/             # Página de problemas
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página inicial
├── prisma/
│   └── schema.prisma          # Schema do banco de dados
└── public/                    # Arquivos estáticos
```

## 🖼️ Imagens do Projeto

### Imagens Geradas por IA

Este projeto utiliza imagens geradas por inteligência artificial. Todas as imagens estão devidamente marcadas com a descrição "imagem gerada por IA" para transparência.

#### Imagens Utilizadas:

1. **logomarca-1.png** - Logomarca da empresa Juston
   - Localização: `/public/logomarca-1.png`
   - Uso: Header da página principal
   - Alt: "Juston - logomarca"

2. **notebook.png** - Imagem de um notebook/laptop
   - Localização: `/public/notebook.png`
   - Uso: Componente principal da página inicial
   - Alt: "Notebook - imagem gerada por IA"

3. **balanca.jpg** - Imagem de uma balança da justiça
   - Localização: `/public/balanca.jpg`
   - Uso: Imagem de fundo (background) da página inicial
   - Documentação: Comentário no CSS indicando "imagem gerada por IA"

## 🔧 Configuração do Email

Para configurar o envio de emails:

1. **Gmail**: Use uma "senha de app" em vez da senha normal
2. **Outros provedores**: Configure conforme a documentação do Nodemailer

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy automático a cada push

### Outros provedores

O projeto é compatível com qualquer provedor que suporte Next.js.

## 📊 Banco de Dados

O projeto usa PostgreSQL com as seguintes tabelas:

- **Contact**: Informações dos clientes
- **Message**: Mensagens trocadas
- **Feedback**: Sistema de feedback

## 🎨 Personalização

- **Cores**: Edite as variáveis CSS em `globals.css`
- **Conteúdo**: Modifique os textos em `page.tsx`
- **Imagens**: Substitua as imagens em `public/`

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

## 📄 Licença

Este projeto está sob a licença MIT. 