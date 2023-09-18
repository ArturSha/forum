import { classNames } from '6shared/lib/classNames/classNames';
import { Theme, useTheme } from '1app/providers/ThemeProvider';
import LightIcon from '6shared/assets/icons/dark-theme.svg';
import DarkIcon from '6shared/assets/icons/light-theme.svg';
import { Button, ThemeButton } from '6shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
