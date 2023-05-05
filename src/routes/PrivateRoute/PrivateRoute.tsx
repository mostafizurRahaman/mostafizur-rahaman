
import { ReactNode, useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Location, Navigate,  useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';

interface PrivateRouteType {
   children: ReactNode; 
}
const PrivateRoute = ({children}:PrivateRouteType) => {
   const {user, loading } =useContext(AuthContext); 
   const location :Location = useLocation(); 


   if(loading){
      return <Loading></Loading>
   }

   if(user?.uid){
      return children; 
   }

   return <Navigate to='/user/sign-in' state={{from: location}} replace></Navigate>
};

export default PrivateRoute; 