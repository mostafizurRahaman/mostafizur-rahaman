import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/Dashboard/SideBar/SideBar";
import styles from './DashboardLayout.module.css'; 
const DashboardLayout = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className={`min-h-screen flex  w-full `}>
            <SideBar></SideBar>
            <div className={` bg-primary w-full p-2 ` }>
               <Outlet></Outlet>
            </div>
         </div>

         <Footer></Footer>
      </>
   );
};

export default DashboardLayout;
