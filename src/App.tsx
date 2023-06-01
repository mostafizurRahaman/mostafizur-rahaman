import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Cursor from "./components/Cursor/Cursor";
import  { Toaster } from 'react-hot-toast';
function App() {
   return (
      <div>   
         <Toaster></Toaster>      
         <Cursor></Cursor>
         <RouterProvider router={routes}></RouterProvider>
      </div>
   );
}

export default App;
