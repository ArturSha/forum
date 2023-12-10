import { classNames } from '@/6shared/lib/classNames/classNames';
import LightIcon from '@/6shared/assets/icons/dark-theme.svg';
import DarkIcon from '@/6shared/assets/icons/light-theme.svg';
import { Button, ButtonTheme } from '@/6shared/ui/Button/ui/Button';
import { memo } from 'react';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/6shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
