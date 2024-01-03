import React, { memo, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/6shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/6shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/5entities/User';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/6shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Icon } from '@/6shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
        >
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </Button>
      }
    />
  );
});
