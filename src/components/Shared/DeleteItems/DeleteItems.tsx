import {useContext} from 'react'; 
import { baseURL } from "../../../configs/configs";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from 'react-hot-toast';
import { AiTwotoneDelete } from 'react-icons/ai';
import { NavigateFunction, useActionData, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../../hooks/useAdmin';
import Loading from '../Loading/Loading';

interface DeleteItemsType {
   _id: string,
   path: string; 
   name: string;

}

const DeleteItems = ({_id, path, name}: DeleteItemsType) => {
   const {logOut, user} = useContext(AuthContext); 
   const navigate:NavigateFunction = useNavigate(); 
   const handleDelete = async() => {
      console.log(`http://localhost:5000/${path}/${_id}`)
       const res = await fetch(`http://localhost:5000/${path}/${_id}`, {
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
      if(data.deletedCount === 1){
         toast.success(`${name} is deleted successfully  `)
      }else{
         toast.success(` Sorry . ${name} did't deleted. `)
      }

   }

   
      return  <AiTwotoneDelete onClick={handleDelete} className="  duration-1000 "></AiTwotoneDelete>
   

};

export default DeleteItems;