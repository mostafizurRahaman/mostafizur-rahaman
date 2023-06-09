import { useEffect, useState } from "react"
import { UseAdminType, } from "../configs/Type";
import { baseURL } from "../configs/configs";



export const useAdmin : UseAdminType = (email) => {
   const [isAdmin, setIsAdmin] = useState<boolean>(false);
   const [isAdminLoading, setIsAdminLoading] = useState<boolean>(true);
   useEffect(()=>{
      if(email){
         fetch(`${baseURL}users/admin?email=${email}`,{
            headers: {
               'content-type': 'application/json',
               authorization : `bearer ${localStorage.getItem('token')}`
            }
         } )
         .then(res => res.json())
         .then(data =>{
            if(data.isAdmin === true){
               setIsAdmin(true); 
               setIsAdminLoading(false); 
              
            }
         })
         .catch((err)=> {
            setIsAdminLoading(false); 
            console.log(err); 
         })
         .finally(()=>{
            setIsAdminLoading(false)
         })
        
      }
   }, [email])
   return {isAdmin, isAdminLoading}; 
  
}