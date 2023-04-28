import {FiFacebook,  FiGithub, FiTwitter, FiLinkedin,  FiYoutube } from 'react-icons/fi';
import styles  from './SocialTemplate.module.css'; 

const SocialTemplate = () => {
   return (
      <div className=' p-2 rounded-lg'>
          <ul className='flex gap-4  text-2xl '>
            <li className={ ` hover:border-secondary border cursor-pointer text-accent bg-primary hover:text-secondary hover:bg-black duration-1000  p-3 rounded-lg ${styles.iconsShadow}`}>
               <a href="https://github.com/mostafizurRahaman" target='_blank'>
                 <FiGithub></FiGithub>
               </a>
            </li>
            <li className={`hover:border-secondary border cursor-pointer text-accent bg-primary hover:text-secondary hover:bg-black duration-1000  p-3 rounded-lg ${styles.iconsShadow}`}>
               <a href="https://www.linkedin.com/in/mostafiz0401/" target='_blank'>
                  <FiLinkedin></FiLinkedin>
               </a>
            </li>
            <li  className={`hover:border-secondary border cursor-pointer text-accent bg-primary hover:text-secondary hover:bg-black duration-1000  p-3 rounded-lg ${styles.iconsShadow}`}>
               <a href="https://www.facebook.com/mostafiz478849" target='_blank'>
               <FiFacebook></FiFacebook>
               </a>
            </li>
            <li className={`hover:border-secondary border cursor-pointer text-accent bg-primary hover:text-secondary hover:bg-black duration-1000  p-3 rounded-lg ${styles.iconsShadow}`}>
               <a href="https://twitter.com/mostafiz0401" target="_blank">
                  <FiTwitter></FiTwitter>
               </a>
            </li>
            <li className={`hover:border-secondary border cursor-pointer text-accent bg-primary hover:text-secondary hover:bg-black duration-1000  p-3 rounded-lg ${styles.iconsShadow}`}>
               <a href="https://www.youtube.com/mrftechbd" target='_blank'>
                  <FiYoutube></FiYoutube>
               </a>
            </li>
          </ul>
      </div>
   );
};

export default SocialTemplate;