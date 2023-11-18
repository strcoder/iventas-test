# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Instalación

1. Clona el repositorio:

   ```bash
   git clone git@github.com:strcoder/iventas-test.git

2. Descargar dependencias:

   ```bash
   npm install

3. Ejecutar el proyecto en local:

   ```bash
   npm run dev

## Resultado

El prueba consistio en realizar una intefas UI de un chat, a continuacion se muestran los resultados en web y en modo responsive
![Captura desde 2023-11-17 18-00-06](https://github.com/strcoder/iventas-test/assets/48764650/4630850f-90fd-4107-b071-6e9d1dbc3535)
![Captura desde 2023-11-17 18-00-02](https://github.com/strcoder/iventas-test/assets/48764650/ca05ed92-49cd-4ba8-9388-c693162f2dee)
![Captura desde 2023-11-17 17-59-44](https://github.com/strcoder/iventas-test/assets/48764650/88dcdee8-7925-4b5a-b858-5c42793abcda)
![Captura desde 2023-11-17 17-59-14](https://github.com/strcoder/iventas-test/assets/48764650/e2f53dad-7e30-4ff7-8d5b-03da744b0a38)

