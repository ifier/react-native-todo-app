import createPalette, {
  Palette,
  PaletteColor,
  TypeBackground
} from '@material-ui/core/styles/createPalette';

interface IMuiBackgroundPalette extends TypeBackground {
  secondary: string;
}

export interface IPalette extends Palette {
  background: IMuiBackgroundPalette;
  default: PaletteColor;
  black: PaletteColor;
  white: PaletteColor;
}

export const palette: IPalette = <IPalette>createPalette({
  default: {
    main: '#000',
    light: '#D9DCDE',
    contrastText: '#17181A'
  },
  primary: {
    main: '#1630A1',
    light: '#869CFA',
    dark: '#0A238F',
    contrastText: '#fff'
  },
  secondary: {
    main: '#EF4F51',
    light: '#FF9D9F',
    dark: '#CC3E40',
    contrastText: '#fff'
  },
  success: {
    main: '#0BCD64',
    light: '#4FE494',
    dark: '#0BB95B',
    contrastText: '#fff'
  },
  error: {
    main: '#E62222',
    light: '#FF5858',
    dark: '#BB1313',
    contrastText: '#fff'
  },
  grey: {
    A100: '#F1F1F1',
    A200: '#C9C9CB',
    A400: '#9CA1A7',
    A700: '#888888'
  },
  black: {
    main: '#262626',
    light: '#404040',
    dark: '#000000', // theme.palette.common.black
    contrastText: '#fff'
  },
  white: {
    main: '#fafafa',
    light: '#fafafa',
    dark: '#fafafa',
    contrastText: '#262626'
  },
  background: {
    default: '#fafafa',
    secondary: '#fafafa'
  }
} as IPalette);
