module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/semi': 0,
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/naming-convention': 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/prefer-nullish-coalescing":0,
    "i18next/no-literal-string": ['error', {markupOnly:true}]
  }, 
};
