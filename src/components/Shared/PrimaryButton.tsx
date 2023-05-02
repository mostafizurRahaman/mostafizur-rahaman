

interface PrimaryButton {
   content: string;
   children: React.ReactNode;
   path: string;
   fileName?:string; 
}

const PrimaryButton = ({ content, children, path, fileName }: PrimaryButton) => {
   
   return (
      <a href={path} download={fileName} className="hover:scale-95 text-lg font-medium flex items-center justify-center bg-secondary px-5 py-[10px] gap-2 rounded-xl uppercase">
         <p>{content}</p>
         {children && <span>{children}</span>}
      </a>
   );
};

export default PrimaryButton;

