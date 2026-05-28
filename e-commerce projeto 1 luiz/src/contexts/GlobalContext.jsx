import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto        
    // const[usuario, setUsuario] = useState("")
    

    return(
        <GlobalContext.Provider value={{
                // usuario, setUsuario,
                
            }}>
            {children}
        </GlobalContext.Provider>
    )
}