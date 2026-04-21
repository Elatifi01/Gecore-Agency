# React + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React avec Vite, le HMR et quelques règles ESLint.

Deux plugins officiels sont actuellement disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utilise [Babel](https://babeljs.io/) (ou [oxc](https://oxc.rs) lorsqu'il est utilisé avec [rolldown-vite](https://vite.dev/guide/rolldown)) pour le Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utilise [SWC](https://swc.rs/) pour le Fast Refresh

## React Compiler

Le React Compiler n'est pas activé dans ce modèle en raison de son impact sur les performances de développement et de build. Pour l'ajouter, consultez [cette documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

Si vous développez une application de production, nous recommandons d'utiliser TypeScript avec des règles de linting sensibles au type activées. Consultez le [modèle TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) pour savoir comment intégrer TypeScript et [`typescript-eslint`](https://typescript-eslint.io) dans votre projet.
