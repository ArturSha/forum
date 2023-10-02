import { classNames } from '6shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '3widgets/Navbar';
import { Sidebar } from '3widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '5entities/User';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (
    <div className={classNames('app', {})}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
