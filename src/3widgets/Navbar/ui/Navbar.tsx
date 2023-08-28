import { classNames } from '6shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '6shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from '6shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
