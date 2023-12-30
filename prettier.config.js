/** @type {import('prettier').Config} */
module.exports = {
  // prettier
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,

  // @ianvs/prettier-plugin-sort-imports
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/components/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
};
