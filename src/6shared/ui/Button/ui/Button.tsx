import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
