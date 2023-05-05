import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;
