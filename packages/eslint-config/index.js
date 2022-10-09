module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'import/no-anonymous-default-export': 'off',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // import
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@eo-ms/**',
            group: 'external',
            position: 'after',
          },
          // always put css import to the last, ref:
          // https://github.com/import-js/eslint-plugin-import/issues/1239
          {
            pattern: '*.+(css|sass|less|scss|pcss|styl)',
            group: 'unknown',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['type'],
        // example: let `import './nprogress.css';` after importing others
        // in `packages/docusaurus-theme-classic/src/nprogress.ts`
        // see more: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#warnonunassignedimports-truefalse
        warnOnUnassignedImports: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts', '.tsx'] },
    },
  },
}
