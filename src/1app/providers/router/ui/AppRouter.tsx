import { routeConfig } from '6shared/config/routeConfig/routeConfig';
import { PageLoader } from '6shared/ui/PageLoader/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
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
