import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/main-layout/MainLayout';
import DashboardPage from './pages/(dashboard)/DashboardPage';
import LoginPage from './pages/(auth)/LoginPage';
import ForgotPasswordPage from './pages/(auth)/ForgotPasswordPage';
import { Toaster } from './components/shared/toast/toaster';
import AllRoomsPage from './pages/(dashboard)/AllRoomsPage';
import AddRoomPage from './pages/(dashboard)/AddRoomPage';
import DashboardLayout from './layout/dashboard-layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'all-rooms',
        element: <AllRoomsPage />,
      },
      {
        path: 'add-room',
        element: <AddRoomPage />,
      },
    ],
  },
  {
    path: 'forgot-password',
    element: <ForgotPasswordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <Toaster />
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>,
);
