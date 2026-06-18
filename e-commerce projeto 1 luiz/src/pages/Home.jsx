import Navbar from '../components/Navbar'
import CardProduto from '../components/CardProduto'
import './Paginas.css'
import { useState, useEffect } from 'react'
import axios from "axios"


function Home() {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produto');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  useEffect(() => {
    console.log("teste")
    fetchProdutos();
  }, []);

  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  return (
    <div className={'cont-home'}>
      <Navbar />
        <img className="propaganda" src="../public/propaganda.png" alt="Descrição da foto"></img>
      <div>
      <h1>PRODUTOS AQUI</h1>
        {
          produtos.map((produtos) => (
          <CardProduto p={produtos} key={produtos.id}/>))
        }
      </div>
       
      

    </div>
  )
}

export default Home