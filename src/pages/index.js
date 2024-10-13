import React, { Suspense, lazy } from 'react';
import LoadLibrary from '../.load';

const Home = lazy(() => import('../pages/Home'));

const Index = () => {
  // Pengecekan jika window tidak tersedia (SSR)
  if (typeof window === 'undefined') {
    return null;  // Mengembalikan null jika dalam SSR
  }

  return (
    <Suspense fallback={<LoadLibrary.HomeLoad />}>
      <Home />
    </Suspense>
  );
};

export default Index;

export const Head = () => {
  return (
    <>
      <title>The Ocean Grande.</title>
      <link rel="shortcut icon" href="https://repository.alfajjar.my.id/logo/logo.png" type="image/x-icon" />
    </>
  )
}
