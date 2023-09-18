import { classNames } from '6shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '6shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
