import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Cadastroconta from './pages/Cadastroconta'

function App() {
  const [tela, setTela] = useState(<Home />)
  
  // const [produtos, setProdutos] = useState([]);

  // const fetchProdutos = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/produto');
  //     setProdutos(response.data);
  //   } catch (error) {
  //     console.error('Erro ao buscar produto:', error);
  //   }
  // };

  // useEffect(() => {
  //   console.log("teste")
  //   fetchProdutos();
  // }, []);

  // useEffect(() => {
  //   console.log(produtos);
  // }, [produtos]);


  return (
    <div className={'cont-app'}>
      <header className={'cont-header'}>

      </header>
      <main className={'cont-main'}>
        {tela}
      </main>
    </div>
  )
}

export default App
