import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '1app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): useThemeResult {
  let { theme, setTheme } = useContext(ThemeContext);

  theme = theme === undefined ? Theme.LIGHT : theme;
  const toggleTheme = () => {
    if (setTheme) {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };
  return { theme, toggleTheme };
}
