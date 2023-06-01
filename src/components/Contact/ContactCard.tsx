import { ReactNode } from "react";

interface contactCardType {
   children: ReactNode;
   title: string;
   subTitle1?: string;
   subTitle2?: string;
   subTitle3?: string;
   subTitle4?: string;
}

const ContactCard = ({
   children,
   title,
   subTitle1,
   subTitle2,
   subTitle3, 
   subTitle4
}: contactCardType) => {
   return (
      <div className="flex items-center gap-5 text-accent w-full px-5 py-5 rounded-lg bg-primary shadow-[7px_7px_12px_#191c1f,_-7px_-7px_12px_#292c31] hover:shadow-[inset_7px_7px_12px_#191c1f,inset_-7px_-7px_12px_#292c31] ">
         <div className="text-5xl hover:text-secondary ">{children}</div>
         <div>
            <h4 className="text-3xl font-bold  uppercase ">{title}</h4>
            {subTitle1 && <p className="text-xl">{subTitle1}</p>}
            {subTitle2 && <p className={`text-xl ${subTitle2 === "mostafizurrahaman0401@gmail.com" && 'text-[18px]'}`}>{subTitle2}</p>}

            {subTitle3 && <p className="text-xl capitalize">{subTitle3}</p>}
            {subTitle4 && <p className="text-xl capitalize">{subTitle4}</p>}
         </div>
      </div>
   );
};

export default ContactCard;
