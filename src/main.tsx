import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/main-layout/MainLayout';
import DashboardPage from './pages/(dashboard)/DashboardPage';
import LoginPage from './pages/(auth)/LoginPage';
import ForgotPasswordPage from './pages/(auth)/ForgotPasswordPage';
import { Toaster } from './components/shared/toast/toaster';
import AllRoomsPage from './pages/(dashboard)/AllRoomsPage';
import AddRoomPage from './pages/(dashboard)/AddRoomPage';
import DashboardLayout from './layout/dashboard-layout/DashboardLayout';
import LogoutPage from './pages/(dashboard)/LogoutPage';
import UsersPage from './pages/(dashboard)/UsersPage';
import CommunicableDiseaseReportsPage from './pages/(dashboard)/CommunicableDiseaseReportsPage';
import EmergencyReportsPage from './pages/(dashboard)/EmergencyReportsPage';
import AttendancePage from './pages/(dashboard)/AttendancePage';
import { verify } from './services/api/authAPI';

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
        loader: async () => {
          try {
            const res = await verify()
            return res
          } catch (error) {
            throw redirect("/");
          }
        },
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
      {
        path: 'logout',
        element: <LogoutPage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'communicable-disease-reports',
        element: <CommunicableDiseaseReportsPage />,
      },
      {
        path: 'emergency-reports',
        element: <EmergencyReportsPage />,
      },
      {
        path: 'attendance',
        element: <AttendancePage />,
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
