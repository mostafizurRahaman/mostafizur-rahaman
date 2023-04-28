import { Outlet } from "react-router-dom";

const MainLayout = () => {
   return (
      <div>
         <h2>Header Section is started here.</h2>
         <Outlet></Outlet>
         <h1>Footer Section is started here</h1>
      </div>
   );
};

export default MainLayout;
