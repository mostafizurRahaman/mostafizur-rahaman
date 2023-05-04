import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

import SignUp from "../pages/SignUp";
import UserLayout from "../Layout/UserLayout";
import Videos from "../pages/Videos";
import SignIn from "../pages/SignIn";

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
      ],
   },

   {
      path: "/user",
      element: <UserLayout></UserLayout>,
      children: [
         {
            path: "/user/sign-up",
            element: <SignUp></SignUp>,
         },
         {
            path: "/user/sign-in",
            element: <SignIn></SignIn>, 
         },
      ],
   },
]);
