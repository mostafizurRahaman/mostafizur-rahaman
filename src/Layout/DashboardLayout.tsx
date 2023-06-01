import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Dashboard/SideBar/SideBar";
 
import {useState} from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
const DashboardLayout = () => {
   const [hide, setHide] = useState<boolean>(false)
   return (
      <>
         <Navbar></Navbar>
         <div className={`min-h-screen md:flex relative w-full `}>
            
               <SideBar hide={hide}></SideBar>
            
            <div className={` bg-primary w-full p-2 relative` }>
               <div className={`text-5xl absolute  top-[-4px] ${hide ? "left-[236px] " : "left-[-10px]"} z-50 md:hidden font-bold text-accent `} onClick={()=> setHide(!hide)}>
                   {
                     hide ? <AiOutlineCaretRight></AiOutlineCaretRight>: <AiOutlineCaretLeft></AiOutlineCaretLeft>
                   }
               </div>
               <Outlet></Outlet>
            </div>
         </div>

         <Footer></Footer>
      </>
   );
};

export default DashboardLayout;
