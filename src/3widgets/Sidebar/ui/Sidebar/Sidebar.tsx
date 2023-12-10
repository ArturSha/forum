import { classNames } from '@/6shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/6shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@/6shared/ui/LangSwitcher/index';
import { Button, ButtonSize, ButtonTheme } from '@/6shared/ui/Button/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '@/3widgets/Sidebar/model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { VStack } from '@/6shared/ui/Stack';

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const itemList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  );
  return (
    <aside
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
      <VStack role={'navigation'} gap='8' className={cls.items}>
        {itemList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  );
});
