import {useContext} from 'react'; 
import { baseURL } from "../../../configs/configs";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from 'react-hot-toast';
import { FiDelete } from 'react-icons/fi';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface DeleteItemsType {
   _id: string,
   path: string; 
   name: string;

}

const DeleteItems = ({_id, path, name}: DeleteItemsType) => {
   const {logOut} = useContext(AuthContext); 
   const navigate:NavigateFunction = useNavigate(); 
   const handleDelete = async() => {
      console.log(`${baseURL}${path}/${_id}`)
       const res = await fetch(`${baseURL}${path}/${_id}`, {
         method: 'delete', 
         headers: {
            'autorization': `bearer ${localStorage.getItem('token')}`,
         }
       })

       if(res.status ===403 || res.status === 401){
          toast.success(`Please Login as admin to delete`)
          logOut(); 
          return navigate('/sign-in')
       }

       const data = await res.json(); 
      if(data.deletedCount ===1){
         toast.success(`${name} is deleted successfully  `)
      }else{
         toast.success(` Sorry . ${name} did't deleted. `)
      }

   }

   return (
      <FiDelete onClick={handleDelete} className=" hover:text-secondary duration-1000"></FiDelete>
   );
};

export default DeleteItems;