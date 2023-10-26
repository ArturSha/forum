import { classNames } from '6shared/lib/classNames/classNames';
import { type CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, border, height, width } = props;
  const styles: CSSProperties = { width, height, borderRadius: border };
  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={styles}
    ></div>
  );
});
