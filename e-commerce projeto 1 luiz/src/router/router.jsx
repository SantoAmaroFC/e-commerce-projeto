import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Cadastroconta from "../pages/Cadastroconta";





const router = createBrowserRouter([
    {path: "/home", element: <Home />  }
    {path: "/cadastro", element: <Cadastro /> }
    {path: "/cadastroconta", element: <Cadastroconta />  }
    
    

])

export default router;

