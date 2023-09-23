import { classNames } from '6shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from '6shared/ui/ThemeSwitcher';
import { LangSwitcher } from '6shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/ui/Button';
import AppLink, { AppLinkTheme } from '6shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import AboutIcon from '6shared/assets/icons/about.svg';
import MainIcon from '6shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
