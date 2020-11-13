module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '*.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '*.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '~components': './src/components',
          '~navigation': './src/navigation',
          '~store': './src/store',
          '~screens': './src/screens'
        }
      }
    ]
  ]
};
