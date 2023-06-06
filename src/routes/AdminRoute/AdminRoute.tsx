import React, { useContext, useState } from "react";
import { ChildrenType } from "../../configs/Type";
import { useAdmin } from "../../hooks/useAdmin";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../../components/Shared/Loading/Loading";
import { Location, Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: ChildrenType) => {
   const { user, loading } = useContext(AuthContext);
   const location: Location = useLocation();
   
   const { isAdmin, isAdminLoading } = useAdmin(user?.email as string);

   if (loading || isAdminLoading) {
      return <Loading></Loading>;
   }

   if (user?.email && isAdmin) {
      return <>{children}</>;
   }
   return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
