import globals from "globals";
import pluginJs from "@eslint/js";

const eslintConfig = {
  languageOptions: { globals: { ...globals.browser, ...globals.node } },
  plugins: {
    namespace: pluginJs
  },
  ignores: [
    'node_modules/', // Игнорируем директорию node_modules
    'dist/',         // Игнорируем директорию dist
    '*.config.js'    // Игнорируем все файлы с расширением .config.js
  ]
};

export default eslintConfig;
