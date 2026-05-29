import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Cadastroconta from './pages/Cadastroconta'

function App() {
 const[tela, setTela] = useState(<Home />)
 const [itens, setItens] = useState([]);

  return (
    <div className={'cont-app'}>
      <header className={'cont-header'}>
      
    
      </header>
    <main className={'cont-main'}>
    {tela}
      </main> 
     {itens} {setItens}
      {itens} 
    </div>
  )
}

export default App
