import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTheme } from '1app/providers/ThemeProvider';
import './styles/index.scss';
import { AboutPage } from '2pages/AboutPage';
import { MainPage } from '2pages/MainPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>О сайте</Link>
      <Link to={'/main'}>decrement</Link>
      <div className='app'>ABOUT PAGE</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='main' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
