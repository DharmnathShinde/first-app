import React from 'react';
import ConditionRender from './ConditionRender';
import Form3 from './Form3';
import Carousl from './Carousl';
import Promise from './Promise';
import Routers from './Routers';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact';
import Api, { Info } from './Api';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Routers />
    },
    {
      path: '/about',
      element: <><Routers /><About /></>
    },
    {
      path: '/contact',
      element: <><Routers /><Contact /></>
    },
    {
      loader:Info,
      path: '/api',
      element: <Api />
      
    }
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;