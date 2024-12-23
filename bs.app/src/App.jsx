import React from 'react'
import AdminLogin from './routes/adminLogin/adminLogin';
import Homepage from './routes/homepage/Homepage';
import Layout from './routes/layout/Layout';
import Profile from './routes/profile/Profile';
import Register from './routes/register/Register';
import Login from './routes/login/login';
import ProfileUpdatePage from './routes/profileUpdate/profileUpdate';
import ListPage from './routes/listPage/listPage';
import SinglePage from './routes/singlePage/singlePage';
import TrainerProfile from './routes/trainer_profile/trainer_profile';
import Searchtest from './routes/searchtest/searchtest';
import Payment from './routes/payment/payment';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        // {
        //   path:"/:id",
        //   element:<SinglePage/>
        // },
        {
          path:"/gym/:id", // Updated path to include "/gym/"
          element:<SinglePage/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/adminLogin",
          element: <AdminLogin/>
        },
        {
          path: "/ProfileUpdatePage",
          element: <ProfileUpdatePage/>
        },
        {
          path: "/TrainerProfile",
          element: <TrainerProfile/>
        },
        {
          path: "/searchtest",
          element: <Searchtest/>
        }
        
      ]
    },
    {
      path: "/Payment",
      element: <Payment/>
    }
    
  ]);
  
  
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App