import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import AppLink, { AppLinkTheme } from '@/6shared/ui/AppLink/AppLink';
import { type SidebarItemType } from '@/3widgets/Sidebar/model/types/sidebar';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/5entities/User';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item?.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
