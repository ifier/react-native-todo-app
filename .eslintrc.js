module.exports = {
  root: true,
  parserOptions: { project: ['tsconfig.json'] },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': [
      2,
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }
    ],
    'import/extensions': 'off'
  }
};
