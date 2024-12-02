import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
import Test from './pages/test';
import Profile from './pages/profile';
import Footer from './pages/footer';
import GalleryPage from './pages/Gallery'; // Ensure the file name matches
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/footer',
    element: <Footer />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />, // Use the GalleryPage component
  },
  // Add more routes here...
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
