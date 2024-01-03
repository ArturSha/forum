import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Button } from '@/6shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Button onClick={toggle} variant='clear'>
          {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});
