import Navbar from '../components/Navbar'
import CardProduto from '../components/CardProduto'
import './Paginas.css'
import { useState, useEffect } from 'react'
import axios from "axios"


function Home() {
  // Estado que armazena a lista de produtos vindos da API
  const [produtos, setProdutos] = useState([]);
 // Função que busca os produtos no backend
  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produto');
       // Atualiza o estado com os produtos recebidos
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };
   // Executa a busca de produtos apenas uma vez ao carregar a página
  useEffect(() => {
    console.log("teste")
    fetchProdutos();
  }, []);
// Monitora mudanças na lista de produtos (usado para debug)
  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  return (
    <div className={'cont-home'}>
      {/* Barra de navegação do sistema */}
      <Navbar />
      {/* Imagem de propaganda/banner */}
        <img className="propaganda" src="../public/propaganda.png" alt="Descrição da foto"></img>
      <div className='cont-produtos'>
       {/* Renderiza os produtos recebidos da API */}
        {
          
          produtos.map((produto) => (
          <CardProduto p={produto} key={produto.id} fetchProdutos={fetchProdutos}/>))
        }
      </div>
    </div>
  )
}

export default Home