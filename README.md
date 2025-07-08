# 🚀 Let Me Ask

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</div>

<div align="center">
  <h3>Uma plataforma moderna para perguntas e respostas em tempo real</h3>
  <p>Construído com React, TypeScript e Vite para máxima performance</p>
</div>

---

## ✨ Sobre o Projeto

**Let Me Ask** é uma aplicação web moderna que permite aos usuários fazer perguntas e obter respostas de forma interativa. O projeto é desenvolvido com as tecnologias mais atuais do ecossistema React.

### 🎯 Funcionalidades

- 💬 Sistema de perguntas e respostas em tempo real
- 🎨 Interface moderna e responsiva
- ⚡ Performance otimizada com Vite
- 📱 Totalmente responsivo
- 🔒 Código type-safe com TypeScript

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.0.3** - Build tool ultrarrápida
- **ESLint** - Linter para manter a qualidade do código

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/let-me-ask-front.git
cd let-me-ask-front
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra seu navegador em `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o ESLint para verificar a qualidade do código

## 📁 Estrutura do Projeto

```
let-me-ask-front/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🔧 Configuração de Desenvolvimento

### ESLint

O projeto está configurado com ESLint para manter a qualidade do código. Para uma configuração mais rigorosa em produção, você pode atualizar as regras:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ e ☕</p>
</div>
