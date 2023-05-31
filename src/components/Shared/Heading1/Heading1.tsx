

interface headingType {
   title: string; 
}
const Heading1 =({title}: headingType)  => {
   return (
      <div className="flex items-center justify-center">
         <h3 className="text-xl font-bold uppercase text-seondary  border-b-2 border-secondary  my-5 pb-3">{title}</h3>
      </div>
   );
};``

export default Heading1;