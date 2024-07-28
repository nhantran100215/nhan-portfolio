import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import Routes from './Routes/Routes';

const router = createBrowserRouter(Routes);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
