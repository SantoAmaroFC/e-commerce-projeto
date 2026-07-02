import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'
// import { ReactDOM } from 'react'
// Cria a raiz da aplicação React e renderiza o app no elemento #root
createRoot(document.getElementById('root')).render(
   // Provider de contexto global (compartilha dados entre componentes)
  <GlobalContextProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
)