import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
export default tseslint.config({ignores:['.platform-source/**','.next/**','out/**','node_modules/**','next-env.d.ts','content/**','reference/**']},js.configs.recommended,...tseslint.configs.recommended,{languageOptions:{globals:{...globals.node,...globals.browser}},rules:{'@typescript-eslint/no-empty-object-type':'off'}});
