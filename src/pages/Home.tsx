import { AuthContext } from "../Context/AuthProvider";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/Contact/ContactForm";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonial/Testimonials";
import { useAdmin } from "../hooks/useAdmin";
import {useContext } from 'react'; 

const Home = () => {
   const {user, loading} = useContext(AuthContext); 
   const {isAdmin, isAdminLoading} = useAdmin(user?.email as string); 
   console.log(isAdmin);
   return (
      <>
         <Banner></Banner>
         <About></About>
         <Skills></Skills>
         <Experience></Experience>
         <Projects></Projects>
         <Testimonials></Testimonials>
         <ContactForm></ContactForm>
      </>
   );
};

export default Home;
