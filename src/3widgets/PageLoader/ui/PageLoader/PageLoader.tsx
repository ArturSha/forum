import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/6shared/ui/deprecated/Loader/';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
