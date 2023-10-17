import { type Mods, classNames } from '6shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className = '', src, size, alt }: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);
  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};
