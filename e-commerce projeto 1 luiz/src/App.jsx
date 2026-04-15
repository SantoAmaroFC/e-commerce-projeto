import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
 const[tela, setTela] = useState(<Home />)

  return (
    <div className={'cont-app'}>
      <header className={'cont-header'}>
    <nav>
    <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
    <button className={'botoes-nav'} onClick={() => setTela(<Cadastro />)}>Cadastro</button>
    </nav>
      </header>
    <main className={'cont-main'}>
    {tela}
      </main> 
      
    </div>
  )
}

export default App
