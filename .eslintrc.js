module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['eslint:recommended', "plugin:react/recommended"],
  
  rules: {
    quotes: 0,
    'no-console': 0,
    'object-curly-spacing': ['warn', 'always'],
    'no-constant-condition': 0
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
  },
};