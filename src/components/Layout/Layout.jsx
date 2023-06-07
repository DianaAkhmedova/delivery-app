import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Loader from 'shared/components/Loader/Loader';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navbar />
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
