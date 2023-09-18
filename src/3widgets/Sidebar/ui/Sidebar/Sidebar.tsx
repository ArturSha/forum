import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '6shared/ui/ThemeSwitcher';
import { LangSwitcher } from '6shared/ui/LangSwitcher/LangSwitcher';
import { Button } from '6shared/ui/Button/ui/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  console.log(cls.lang);
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <Button data-testid='sidebar-toggle' onClick={onToggle}></Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
