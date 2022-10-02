import React from "react";
import ReactDOM from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';

const root = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>
);