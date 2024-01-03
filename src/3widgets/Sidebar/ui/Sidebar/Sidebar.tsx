import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/4features/ThemeSwitcher';
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/6shared/lib/features';
import { AppLogo } from '@/6shared/ui/redesigned/AppLogo';
import { Icon } from '@/6shared/ui/redesigned/Icon';
import ArrowIcon from '@/6shared/assets/icons/arrow-bottom.svg';
import { LangSwitcher } from '@/4features/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    console.log(collapsed);
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <aside
          data-testid='sidebar'
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className]
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
          <VStack role='navigation' gap='8' className={cls.items}>
            {itemsList}
          </VStack>
          <Icon
            data-testid='sidebar-toggle'
            onClick={onToggle}
            className={cls.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid='sidebar'
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
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
          <VStack role='navigation' gap='8' className={cls.items}>
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
    />
  );
});
