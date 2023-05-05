import SocialTemplate from "../../Shared/SocialTemplate";
import SubmitButton from "../../Shared/SubmitButton";

interface ProfileType {
   image: string;
   firstName: string;
   lastName: string;
   email: string;
   position:string; 
}
import styles from './Profile.module.css'; 
const Profile = () => {
   const {image, firstName, lastName, position, email}:ProfileType = {image:"https://i.ibb.co/HNvR0bR/mostafizur.png",firstName:"Mostafizur",lastName:"Rahaman",position: "Mern Stack Developer",email: "mostafizurrahaman@gmail.com"}
   return (
      <div className={`flex flex-col  gap-5 min-h-screen py-5 items-center justify-center `}>
         <div className={`w-[350px] bg-primary flex gap-1 p-5 rounded-lg  justify-center flex-col ${styles.card}`}>
            <div className="w-40 h-40 mx-auto rounded-full border-2 px-2 box-border border-secondary ">
               <img  className="w-[156px] h-[156px] mx-auto rounded-full  " src={image} alt={firstName} />
            </div>   
            <div>
               <h2  className="text-center text-secondary uppercase text-4xl font-bold">
                 {firstName} {lastName}
               </h2>
               <h3 className="text-2xl uppercase mt-[-10px] font-bold  text-white  text-center">( {position} )</h3>
            </div>
            <div className="text-xl text-white flex  flex-col items-center justify-center gap-3 ">
               <p className="text-center text-accent ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi fugit ipsum voluptatibus, amet eius.</p>
               <h3 className={`text-center text-[22px] bg-primary   py-2 px-4 rounded-lg hover:text-secondary duration-1000  font-bold ${styles.iconsShadow}`}>{email}</h3>
              
               <SocialTemplate></SocialTemplate>
            </div>
         </div>
      </div>
   );
};

export default Profile;

