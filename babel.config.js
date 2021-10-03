module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~/api': './src/api',
          '~/components': './src/components',
          '~/navigation': './src/navigation',
          '~/screens': './src/screens',
          '~/services': './src/services',
          '~/utils': './src/utils',
          '~/theme': './src/theme',
          '~/store': './src/stores',
          '~/assets': './src/assets',
          '~/modules': './src/modules',
          '~/whitelabel': './src/theme/whiteLabelTheme',
          '~/locale': './src/locale',
        },
      },
    ],
    ['babel-plugin-root-import', { rootPathSuffix: 'src' }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
