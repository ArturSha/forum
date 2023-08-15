import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './components/CounterIncrement.async';
import { MainAsync } from './components/MainTest';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>increment</Link>
      <Link to={'/decrement'}>decrement</Link>
      <div className='app'>ABOUT PAGE</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<AboutPageAsync />} />
          <Route path='/decrement' element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
