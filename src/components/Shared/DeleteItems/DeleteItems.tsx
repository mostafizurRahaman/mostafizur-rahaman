import { useContext } from "react";

import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { NavigateFunction, useActionData, useNavigate } from "react-router-dom";
import { useAdmin } from "../../../hooks/useAdmin";
import Loading from "../Loading/Loading";
import { baseURL } from "../../../configs/configs";

interface DeleteItemsType {
   _id: string;
   path: string;
   name: string;
}

const DeleteItems = ({ _id, path, name }: DeleteItemsType) => {
   const { logOut, user } = useContext(AuthContext);
   const navigate: NavigateFunction = useNavigate();
   const handleDelete = async () => {
     
      const res = await fetch(`${baseURL}${path}/${_id}`, {
         method: "delete",
         headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('token')}`,
         },
      });

      if (res.status === 403 || res.status === 401) {
         toast.success(`Please Login as admin to delete`);
         logOut();
         return navigate("/sign-in");
      }

      const data = await res.json();
      if (data.deletedCount === 1) {
         toast.success(`${name} is deleted successfully  `);
      } else {
         toast.success(` Sorry . ${name} did't deleted. `);
      }
   };

   return (
      <AiTwotoneDelete
         onClick={handleDelete}
         className="  duration-1000 "
      ></AiTwotoneDelete>
   );
};

export default DeleteItems;
