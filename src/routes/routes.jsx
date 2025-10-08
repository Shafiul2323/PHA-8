import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/home/home';
import Apps from '../pages/Apps/Apps';
import Installations from '../pages/Installations/Installations';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            loader: () => fetch('/AppData.json'),
            Component: Home
        },
        {
          path: '/apps',
          loader: () => fetch('/AppData.json'),
          Component: Apps
        },
        {
          path: '/installations',
          Component: Installations
        }
    ]
  },
]);