import { FiUpload } from "react-icons/fi";
import { ChangeTypeInput } from "../../configs/Type";
import styles from "./ImageUpload.module.css";
interface ImageUploadType {
   id: string;
   onChange: ChangeTypeInput;
   image?: string;
   error: string;
}
const ImageUpload = ({ id, onChange, image, error }: ImageUploadType) => {
   return (
      <div>
         <div className="flex items-center md:flex-row flex-col  gap-3">
            <div className="w-full md:w-1/2">
               <label
                  htmlFor={id}
                  className="px-5 relative  h-44  border-dashed border-2 border-secondary flex justify-center items-center flex-col gap-1  rounded-xl  bg-primary 
         "
               >
                  <FiUpload className="text-7xl text-white order-2  "></FiUpload>
                  <p className="text-xl text-white order-3 ">
                     Choose File or drag file
                  </p>
                  <input
                     id={id}
                     name={id}
                     className={`text-xl absolute top-0 left-0  order-1 text-center m-auto invisible text-white ${styles}`}
                     onChange={onChange}
                     type="file"
                     accept="image/*"
                  />
               </label>
            </div>
            <div className="px-5py-2 border-dashed border-2 border-secondary flex justify-center items-center  h-44 flex-col gap-1 text-xl font-bold text-accent  rounded-xl  bg-primary w-full md:w-1/2 ">
               {image ? <img src={image} alt=""className="w-auto p-3 h-[100%]" /> : <p>Preview </p>}
            </div>
         </div>
         {error && (
            <p className="text-secondary text-xl ps-5 capitalize">
               {error && error}
            </p>
         )}
      </div>
   );
};

export default ImageUpload;
