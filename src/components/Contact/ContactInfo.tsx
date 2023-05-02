import { FiMail, FiPhone } from "react-icons/fi";
import ContactCard from "./ContactCard";
import SocialTemplate from "../Shared/SocialTemplate";
import { MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
   return (
      <div className="flex flex-col justify-center items-center gap-6 w-full ">
         <h3 className="text-4xl font-bold capitalize text-accent text-center">Contact Info</h3>
         <ContactCard
            title="Mail"
            subTitle2="mostafizurrahaman0401@gmail.com"
            subTitle1="mrftechbd@gmail.com"
         >
            <FiMail ></FiMail>
            
         </ContactCard>
         <ContactCard
            title="Phone"
            subTitle2="+8801951976238"
            subTitle1="+8801540008464"
         >
            <FiPhone ></FiPhone>
            
         </ContactCard>
         <ContactCard
            title="Location"
            subTitle3="Lakshmipur, chittagong"
            subTitle4="Bangladesh"
         >
            <MdLocationPin></MdLocationPin>
            
         </ContactCard>
            <SocialTemplate></SocialTemplate>
      </div>
   );
};

export default ContactInfo;
