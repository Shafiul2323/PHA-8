import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/home/home';
import Apps from '../pages/Apps/Apps';
import Installations from '../pages/Installations/Installations';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            loader: () => fetch('/TopAppData.json'),
            Component: Home
        },
        {
          path: '/apps',
          loader: () => fetch('/AppData.json'),
          Component: Apps
        },
        {
          path: '/apps/:id',
          loader: () => fetch('/AppData.json'),
          Component: AppDetails
        },
        {
          path: '/installations',
          Component: Installations
        }
    ]
  },
]);