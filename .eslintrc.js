module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'prefer-template': 'off',
    'consistent-return': 'off',
    'import/no-dynamic-require': 'off',
    'no-multiple-empty-lines': 'off',
    'linebreak-style': 'off',
    'max-len': ['warn', { code: 120 }],
    'global-require': 'warn',
    'no-unused-vars': 'warn',
    'comma-dangle': 'never',
    'prefer-default-export': 'off',
    'space-in-parens': [
      'warn',
      'always',
      { exceptions: ['{}', '[]', '()', 'empty'] },
    ],
    'no-trailing-spaces': [
      'error',
      { skipBlankLines: true, ignoreComments: true },
    ],
    'no-irregular-whitespace': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'padded-blocks': [
      'error',
      { classes: 'always', switches: 'always' },
      { allowSingleLineBlocks: true },
    ],
  },
}
