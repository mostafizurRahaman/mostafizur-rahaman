import { useEffect, useState } from "react";

interface PrimaryButton {
   content: string;
   children: React.ReactNode;
}

const PrimaryButton = ({ content, children }: PrimaryButton) => {
   
   return (
      <button className="hover:scale-95 text-lg font-medium flex items-center justify-center bg-secondary px-5 py-[10px] gap-2 rounded-xl ">
         <p>{content}</p>
         {children && <span>{children}</span>}
      </button>
   );
};

export default PrimaryButton;

// AIzaSyBn-mZOX7lkgzCyliRU9EvqN2z0Cm8n-Vg
// AIzaSyBkP3OVphXeugqJ9xNl6rVFApSKzf8Wvhk
 
// channel Id : UCYAm0q3Htrw1UEC9sjS-lTw
