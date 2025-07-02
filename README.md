# 🐉 Dragons

Aplicação web construída com Next.js, React, Redux, Styled-Components e Formik para gerenciar uma lista de dragões fictícios. Possui suporte a autenticação, requisições HTTP via Axios, persistência de estado com Redux Persist e validação de formulários com Yup.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) 15.3.4
- [React](https://reactjs.org/) 18.2.0
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Styled Components](https://styled-components.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [Moment.js](https://momentjs.com/)
- [ESLint + Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

---

## 📦 Scripts

| Comando              | Descrição                                         |
| -------------------- | ------------------------------------------------- |
| `yarn dev`           | Inicia o servidor Next.js em modo desenvolvimento |
| `yarn build`         | Cria o build de produção                          |
| `yarn start`         | Inicia o servidor com o build de produção         |
| `yarn lint`          | Roda o ESLint                                     |
| `yarn format`        | Formata o código com Prettier                     |
| `yarn test`          | Executa os testes com Jest                        |
| `yarn test:coverage` | Executa os testes e gera o relatório de cobertura |

---

## 📁 Estrutura de Diretórios

```bash
src/
├── components/         # Componentes reutilizáveis e independentes
├── pages/              # Páginas do Next.js (rotas e SSR)
├── views/              # Contêineres de página (composição de componentes e lógica de UI)
├── io/                 # Camada de entrada/saída (API, Redux)
│   ├── api/            # Requisições HTTP com Axios
│   ├── redux/          # Estado global com Redux
├── themes/             # Temas de estilo (light, dark, tipografia, espaçamentos, etc.)
├── shared-styles/      # Estilos utilitários ou compartilhados (mixins, helpers, Flexbox, etc.)

```

```bash
yarn test
yarn test:coverage

```

Requisitos para Rodar o Projeto
Node.js >= 18
Yarn >= 1.22
