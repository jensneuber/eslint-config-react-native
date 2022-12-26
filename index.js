const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx']

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'import'],
  extends: [
    'plugin:react-native-a11y/basic',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier',
    'plugin:import/typescript',
  ],
  settings: {
    'import/extensions': allExtensions,
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
        alias: {
          '~': './src',
        },
      },
      node: {
        extensions: allExtensions,
      },
    },
    'import/ignore': ['react-navigation', 'node_modules'],
  },
  rules: {
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], ['unknown', 'internal'], ['parent'], ['sibling'], ['index']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'max-len': ['warn', { code: 120, ignorePattern: '^import .*', ignoreUrls: true }],
    'no-extra-boolean-cast': 'off',
    'no-shadow': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native-a11y/has-accessibility-hint': 'off',
    'react-native-a11y/has-valid-accessibility-state': 'warn',
    'prefer-destructuring': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        useTabs: false,
        trailingComma: "es5",
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  globals: {
    fetch: false,
    __DEV__: true,
    spyOn: true,
  },
  env: {
    es6: true,
    'jest/globals': true,
  },
}
