import SocialTemplate from "../Shared/SocialTemplate";

import mostafizurRahaman from "../../assets/mostafizur.png";
import wave from "../../assets/wave.svg";
import styles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer
         className='bg-info py-10 flex flex-col relative items-center  justify-end  border-t border-accent z-40   '
      >
            <img
               className="w-16 h-16 rounded-full border-2 border-secondary "
               src={mostafizurRahaman}
               alt=""
            />
            <h3 className="text-2xl font-bold text-accent  ">
               Mostafizur <span className="text-secondary">Rahaman</span>{" "}
            </h3>
            <SocialTemplate></SocialTemplate>
   </footer>
   );
};

export default Footer;
