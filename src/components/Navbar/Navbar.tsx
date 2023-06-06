import {
   Link,
   NavigateFunction,
   useLocation,
   useNavigate,
} from "react-router-dom";
import logo from "../../assets/mostafizur.png";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";
const Navbar = () => {
   const [show, setShow] = useState<boolean>(false);
   const { pathname } = useLocation();
   const { user, logOut } = useContext(AuthContext);
   const navigate: NavigateFunction = useNavigate();
   const { isAdmin } = useAdmin(user?.email as string);
   return (
      <div className="flex items-center justify-between h-20 bg-primary text-secondary px-5 md:px-10 border-b border-accent sticky top-0 w-full z-[60] ">
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
               {(pathname === "/home" || pathname === "/") && (
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
               {user?.email ? (
                  <>
                     {isAdmin && (
                        <li className="hover:text-secondary duration-1000 text-accent">
                           <Link to="/dashboard/"> Profile</Link>
                        </li>
                     )}

                     <li
                        onClick={() => {
                           navigate("/sign-in");
                           logOut();
                        }}
                        className="hover:text-secondary duration-1000 text-accent"
                     >
                        Log Out
                     </li>
                  </>
               ) : (
                  <>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <Link to="/sign-up">sign Up</Link>
                     </li>
                     <li className="hover:text-secondary duration-1000 text-accent">
                        <Link to="/sign-in">sign In</Link>
                     </li>
                  </>
               )}
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
