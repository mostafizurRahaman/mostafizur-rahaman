import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Cursor from "./components/Cursor/Cursor";

function App() {
   return (
      <div>
         
         <Cursor></Cursor>
         <RouterProvider router={routes}></RouterProvider>
      </div>
   );
}

export default App;
