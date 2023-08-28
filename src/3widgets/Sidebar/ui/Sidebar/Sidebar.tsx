import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '6shared/ui/ThemeSwitcher';
import LangSwitcher from '6shared/ui/LangSwitcher/LangSwitcher';

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
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
