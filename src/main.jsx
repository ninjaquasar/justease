import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound404/NotFound.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import LawyerDetails from './pages/LawyerDetails/LawyerDetails.jsx';
import Bookings from './pages/Bookings/Bookings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/lawyers.json"), Component: Home },
      { path: '/blogs', loader: () => fetch("blogs.json"), Component: Blogs },
      { path: '/lawyers/:id', loader: () => fetch("/lawyers.json"), Component: LawyerDetails },
      { path: '/bookings', loader: () => fetch("/lawyers.json"), Component: Bookings }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
