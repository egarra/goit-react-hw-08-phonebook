import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};