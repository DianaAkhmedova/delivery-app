import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
const ShopsPage = lazy(() => import('../pages/ShopsPage/ShopsPage'));
const ShoppingCartPage = lazy(() =>
  import('../pages/ShoppingCartPage/ShoppingCartPage.jsx')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopsPage />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
