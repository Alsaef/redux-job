import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../page/Home/Home";
import Signup from "../page/SignUp/Signup";
import Login from "../page/LoginPage/Login";
import SeeJob from "../page/See Job/SeeJob";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/signup',
            element: <Signup/>
        },
        {
            path:'/see-job/:id',
            element: <SeeJob/>,
            // loader:({params})=>fetch(`lo`)
        },
        {
            path:'/login',
            element: <Login/>
        }
      ]
    },
  ]);