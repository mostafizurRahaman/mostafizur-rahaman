import styles from '../../components/Shared/Primarybutton.module.css'; 

interface PrimaryButton {
   content: string;
   children: React.ReactNode;
   path: string;
   fileName?:string; 
}

const PrimaryButton = ({ content, children, path, fileName }: PrimaryButton) => {
   
   return (
      <a href={path} download={fileName} className={` text-lg font-medium flex items-center justify-center bg-info  duration-1000 hover:text-secondary px-5 py-[10px] gap-2 rounded-xl ${styles.primaryButton} uppercase hover:border-dashed hover:border-2 hover:border-secondary`}>
         <p>{content}</p>
         {children && <span>{children}</span>}
      </a>
   );
};

export default PrimaryButton;

