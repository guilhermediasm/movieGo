import { darken, lighten } from '~/modules';

const primary = '#FFF';
const secondary = '#0066FE';
const tertiary = '#373737';
const text = '#606060';
const textSegundary = '#969696';
const info = '#7295EE';
const success = '#7CC888';
const warning = '#F6C953';
const failure = '#FC5858';
const dark = '#000000';

export default {
  text,
  textSegundary,
  border: '#00000098',
  borderOpacity: '#00000050',
  gray: '#828282',
  placeholder: '#DADADA',
  facebook: '#4b74ff',
  primary: {
    light: lighten(0.05, primary),
    lighter: '#6EB98699',
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    shadow: darken(0.1, dark),
    contrast: '#f2f2f2',
  },
  tertiary: {
    light: lighten(0.15, tertiary),
    main: tertiary,
    dark: darken(0.1, tertiary),
    contrast: '#ffffff',
  },
  texts: {
    light: '#00000080',
    main: '#2E2E2E',
    dark: '#000000',
    contrast: '#ffffff',
  },
  info: {
    light: '#7295EE33',
    main: info,
    dark: darken(0.1, info),
    contrast: '#ffffff',
  },
  warning: {
    light: '#F6C95333',
    main: warning,
    dark: darken(0.1, warning),
    contrast: '#ffffff',
  },
  failure: {
    light: '#FC585833',
    main: failure,
    dark: darken(0.1, failure),
    contrast: '#ffffff',
  },
  success: {
    light: '#7CC88833',
    main: success,
    dark: darken(0.1, success),
    contrast: '#ffffff',
  },
};
