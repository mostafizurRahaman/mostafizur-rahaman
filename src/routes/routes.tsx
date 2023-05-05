import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

import SignUp from "../pages/SignUp";
import UserLayout from "../Layout/DashboardLayout";
import Videos from "../pages/Videos";
import SignIn from "../pages/SignIn";
import Profile from "../components/Dashboard/Profile/Profile";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/videos",
            element: <Videos></Videos>,
         },
         {
            path: "/sign-up",
            element: <SignUp></SignUp>,
         },
         {
            path: "/sign-in",
            element: <SignIn></SignIn>, 
         },
      ],
   },

   {
      path: "/dashboard",
      element: <UserLayout></UserLayout>,
      children: [
         {
            path:'/dashboard/', 
            element: <Profile></Profile>
         }
      ]
   },
]);
