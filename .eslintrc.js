module.exports = {
  root: true,
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
  plugins: ['react', 'prettier', 'import', 'unused-imports'],
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
    'no-alert': 'off',
    'no-unused-vars': 'warn',
    'prefer-default-export': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
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
