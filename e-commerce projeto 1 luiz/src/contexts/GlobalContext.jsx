import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto        
    // const[usuario, setUsuario] = useState("")
    

    return(
        // Disponibiliza os estados e funções para todos
        // os componentes filhos da aplicação.
        <GlobalContext.Provider value={{
                // usuario, setUsuario,
                
            }}>
{/* Componentes que terão acesso ao contexto */}
            {children}
        </GlobalContext.Provider>
    )
}