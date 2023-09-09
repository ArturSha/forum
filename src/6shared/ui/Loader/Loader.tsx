import { classNames } from '6shared/lib/classNames/classNames';
import './Loader.scss';

const Loader = () => {
  return (
    <div className={classNames('lds-ellipsis')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
export default Loader;
