import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', theme = '', ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
