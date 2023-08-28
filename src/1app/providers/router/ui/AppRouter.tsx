import { AboutPage } from '2pages/AboutPage';
import { MainPage } from '2pages/MainPage';
import { routeConfig } from '6shared/config/routeConfig/routeConfig';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className='page-wrapper'>{element} </div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
