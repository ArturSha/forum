import { type ReactNode, createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE = 'app_orange_theme',
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
