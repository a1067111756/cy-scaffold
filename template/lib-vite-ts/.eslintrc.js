module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  plugins: ['@typescript-eslint'],
  globals: {
    defineEmits: true,
    defineProps: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
