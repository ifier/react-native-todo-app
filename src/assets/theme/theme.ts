import { Theme, createMuiTheme } from '@material-ui/core/styles';

import { IPalette, palette } from './palette';

export interface ITheme extends Theme {
  palette: IPalette;
}

export const theme: ITheme = <ITheme>createMuiTheme({
  palette
} as ITheme);
