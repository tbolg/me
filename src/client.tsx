import { wrapRouter } from 'oaf-react-router/dist';
import React from 'react';
import { hydrate } from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App/App';

export default () => {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <App />,
    },
  ]);
  wrapRouter(router);
  hydrate(<RouterProvider router={router} />, document.getElementById('app'));
};
