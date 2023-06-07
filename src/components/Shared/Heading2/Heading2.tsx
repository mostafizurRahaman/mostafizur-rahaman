

interface headingType {
   title: string; 
}
const Heading2 =({title}: headingType)  => {
   return (
      <div className="flex items-center ">
         <h3 className="text-2xl font-bold  text-secondary  border-b-2 border-secondary   uppercase">{title} :</h3>
      </div>
   );
};``

export default Heading2;