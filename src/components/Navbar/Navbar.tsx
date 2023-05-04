import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/mostafizur.png";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
   const [show, setShow] = useState<boolean>(false);
   const { pathname } = useLocation();
   console.log(pathname); 
   return (
      <div className="flex items-center justify-between h-20 bg-primary text-secondary px-5 md:px-10 border-b border-accent sticky top-0 w-full z-50 ">
         <img
            src={logo}
            className="ml-5 w-14 h-14 rounded-full border-2 border-secondary"
         />
         <div
            className={`md:static absolute w-1/2  bg-primary md:bg-transparent  h-screen md:w-auto md:h-auto top-20 md:py-0 py-5 ${
               show ? "left-0" : " left-[-999999px] "
            }  text-accent  `}
         >
            <ul
               className={`flex text-2xl  md:flex-row flex-col items-center md:justify-end gap-4 font-medium capitalize text-accent`}
            >
               <li className="hover:text-secondary duration-1000 text-accent">
                  <Link to="/home">Home</Link>
               </li>
               {(pathname === "/home" || pathname ==="/") && (
                  <>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <a href="#about">About</a>
                     </li>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <a href="#skills">Skills</a>
                     </li>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <a href="#portfolio">Portfolio</a>
                     </li>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <a href="#testimonials">Testimonials</a>
                     </li>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <a href="#contact">Contact us</a>
                     </li>
                  </>
               )}
               <li className="hover:text-secondary duration-1000 text-accent">
                  <Link to="/videos">vidoes</Link>
               </li>
               <li className="hover:text-secondary duration-1000 text-accent">
                  <Link to="/user/sign-up">sign Up</Link>
               </li>
               <li className="hover:text-secondary duration-1000 text-accent">
                  <Link to="/user/sign-in">sign In</Link>
               </li>
            </ul>
         </div>
         <div className="md:hidden text-3xl" onClick={() => setShow(!show)}>
            {show ? (
               <IoCloseCircleOutline></IoCloseCircleOutline>
            ) : (
               <TiThMenu></TiThMenu>
            )}
         </div>
      </div>
   );
};

export default Navbar;
