import React from "react";
import ReactDOM from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import Home from './pages/home/Home.jsx';
import Registro from './pages/registro/Registro'

const root = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/registro",
    element:<Registro/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>
);

