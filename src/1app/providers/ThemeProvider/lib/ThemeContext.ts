import { type ReactNode, createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
