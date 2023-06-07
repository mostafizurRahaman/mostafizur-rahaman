import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

import SignUp from "../pages/SignUp";

import Videos from "../pages/Videos";
import SignIn from "../pages/SignIn";
import Profile from "../components/Dashboard/Profile/Profile";
import AddProjects from "../components/Dashboard/AddPojects/AddProjects";
import AddExperiences from "../components/Dashboard/Experiences/AddExperiences";
import AddSkills from "../components/Dashboard/AddSkills/AddSkills";
import AddTestimonial from "../components/Dashboard/AddTestimonial/AddTestimonial";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import ProjectDetails from "../pages/ProjectDetails";
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
         {
            path: "/projects/:id",
            element: <ProjectDetails></ProjectDetails>,
         },
      ],
   },

   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>
      ),
      children: [
         {
            path: "/dashboard/",
            element: (
               <AdminRoute>
                  <Profile></Profile>
               </AdminRoute>
            ),
         },
         {
            path: "/dashboard/add-project",
            element: (
               <AdminRoute>
                  <AddProjects></AddProjects>
               </AdminRoute>
            ),
         },
         {
            path: "/dashboard/experiences",
            element: (
               <AdminRoute>
                  <AddExperiences></AddExperiences>
               </AdminRoute>
            ),
         },
         {
            path: "/dashboard/skills",
            element: (
               <AdminRoute>
                  <AddSkills></AddSkills>
               </AdminRoute>
            ),
         },
         {
            path: "/dashboard/testimonials",
            element: (
               <AdminRoute>
                  <AddTestimonial></AddTestimonial>
               </AdminRoute>
            ),
         },
      ],
   },
]);
