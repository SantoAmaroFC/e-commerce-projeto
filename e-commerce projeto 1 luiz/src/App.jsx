import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
 const[tela, setTela] = useState(<Home />)
 const [itens, setItens] = useState([]);

  return (
    <div className={'cont-app'}>
      <header className={'cont-header'}>

    <nav>
      <img src="./public/logo1.png"  className='logo' />
    <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
    <button className={'botoes-nav'} onClick={() => setTela(<Cadastro />)}>Cadastro</button>
    
    </nav>
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
