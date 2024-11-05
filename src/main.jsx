import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetails from './pages/ProductDetails';
// import ErrorPage from "./error-page";

import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import Cards from './components/Cards';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <Cards />,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/category/:category',
            element: <Cards />,
            loader: () => fetch('../products.json'),
          },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: () => fetch('../products.json'),
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
