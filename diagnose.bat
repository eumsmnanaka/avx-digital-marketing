@echo off
echo Verificando instalação do Node.js
node --version

echo Verificando instalação do npm
npm --version

echo Listando dependências instaladas
npm list --depth=0

echo Verificando build do projeto
npm run build

echo Iniciando servidor de desenvolvimento
start npm run dev
