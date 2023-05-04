import { useState, ReactNode } from "react";
interface CheckBoxType {
   setChecked: React.Dispatch<React.SetStateAction<boolean>>;
   checked: boolean;
   children: ReactNode;
}
const CheckBox = ({ setChecked, checked, children }: CheckBoxType) => {
   return (
      <div onClick={() => setChecked(!checked)} className="flex items-center gap-2">
         <input type="checkbox" id="checkbox" checked={checked} />
         <label htmlFor="checkbox text-accent text-2xl text-accent   ">
            <p className="">{children}</p>
         </label>
      </div>
   );
};

export default CheckBox;
