import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { getUserAuthData } from '@/5entities/User';
import { type SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';
import { AppLink } from '@/6shared/ui/redesigned/AppLink';
import { Icon } from '@/6shared/ui/redesigned/Icon';
import {
  AppLinkTheme,
  AppLink as AppLinkDeprecated,
} from '@/6shared/ui/deprecated/AppLink';

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, {
            [cls.collapsed]: collapsed,
          })}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
