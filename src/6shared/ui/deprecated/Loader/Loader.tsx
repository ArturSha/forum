import { classNames } from '@/6shared/lib/classNames/classNames';
import './Loader.scss';

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Loader = () => {
  return (
    <div className={classNames('lds-ellipsis')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
