import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";





const router = createBrowserRouter([
    {path: "/", element: <Home />  },
    {path: "/cadastro", element: <Cadastro /> },
    {path: "/dashboard", element: <Dashboard />},
    // {path: "/cadastroconta", element: <Cadastroconta />  },
    
    

])

export default router;

