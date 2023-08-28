import { Link } from 'react-router-dom';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTheme } from '1app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from '3widgets/Navbar';
import { Sidebar } from '3widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
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
