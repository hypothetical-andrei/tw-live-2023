import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Item from './Item'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([{
  path: '/',
  element: <Main />
}, {
  path: '/items/:id',
  element: <Item />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

