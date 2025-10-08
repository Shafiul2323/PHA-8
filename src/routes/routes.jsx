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
            Component: Home
        },
        {
          path: '/apps',
          Component: Apps
        },
        {
          path: '/installations',
          Component: Installations
        }
    ]
  },
]);