import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";




// Configuração das rotas do sistema (React Router)
const router = createBrowserRouter([
    // Rota principal (Home)
    {path: "/", element: <Home />  },
    // Rota de cadastro de produtos
    {path: "/cadastro", element: <Cadastro /> },
     // Rota da dashboard (painel de informaçoes)
    {path: "/dashboard", element: <Dashboard />},
    
    
    

])

export default router;

