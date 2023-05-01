import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/Contact/ContactForm";

const MainLayout = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <ContactForm></ContactForm>
      </div>
   );
};

export default MainLayout;
