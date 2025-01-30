export default [
  {
    ignores: ['node_modules/', 'dist/', '.env'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
    plugins: {
      import: require('eslint-plugin-import'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_|req|res|next|val|err' },
      ],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'consistent-return': 'off',
    },
  },
];
