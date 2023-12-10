import { Theme } from '../../const/theme';
import { type ReactNode, createContext } from 'react';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});
