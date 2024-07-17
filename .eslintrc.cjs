/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  env: {
    node: true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-mixed-spaces-and-tabs': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
