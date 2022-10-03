import React from "react";
import ReactDOM from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";


import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Home2 from './pages/home2/Home2';



const root = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {

    path:"/login",
    element:<Login/>
  },
  {
    path:"/registro",
    element:<Registro/>
  },
  {
    path:"/home2",
    element:<Home2/>
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



