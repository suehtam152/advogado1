#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Configurando o projeto Juston...\n');

// Verificar se o .env.local já existe
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  console.log('⚠️  Arquivo .env.local já existe. Pulando criação...');
} else {
  // Copiar env.example para .env.local
  const envExamplePath = path.join(process.cwd(), 'env.example');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Arquivo .env.local criado com sucesso!');
    console.log('📝 Lembre-se de configurar as variáveis de ambiente no arquivo .env.local');
  } else {
    console.log('❌ Arquivo env.example não encontrado');
  }
}

// Instalar dependências
console.log('\n📦 Instalando dependências...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependências instaladas com sucesso!');
} catch (error) {
  console.log('❌ Erro ao instalar dependências:', error.message);
}

// Gerar cliente Prisma
console.log('\n🔧 Gerando cliente Prisma...');
try {
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Cliente Prisma gerado com sucesso!');
} catch (error) {
  console.log('❌ Erro ao gerar cliente Prisma:', error.message);
}

console.log('\n🎉 Configuração concluída!');
console.log('\n📋 Próximos passos:');
console.log('1. Configure as variáveis de ambiente no arquivo .env.local');
console.log('2. Configure seu banco de dados PostgreSQL');
console.log('3. Execute: npx prisma migrate dev');
console.log('4. Execute: npm run dev');
console.log('\n🌐 Acesse: http://localhost:3000'); 