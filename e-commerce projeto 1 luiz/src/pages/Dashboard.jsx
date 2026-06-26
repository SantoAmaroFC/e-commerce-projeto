import './Paginas.css'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import GraficoProdutos from '../components/GraficoProdutos';

function Dashboard() {
  const [informacoes, setInformacoes] = useState({})
  const [produtos_maior_quantidade, setProdutos_maior_quantidade] = useState([])
  const [produtos_maior_valor_estoque, setProdutos_maior_valor_estoque] = useState([])
  const [produtos_por_cor, setProdutos_por_cor] = useState([])
  const [produtos_por_tipo, setProdutos_por_tipo] = useState([])
  const [produtos_pouco_estoque, setProdutos_pouco_estoque] = useState([])
  const [quantidade_total_estoque, setQuantidade_total_estoque] = useState(0)
  const [total_itens_cadastrados, setTotal_itens_cadastrados] = useState(0)
  const [valor_total_estoque, setValor_total_estoque] = useState(0)

  const fetchDashboard = async () => {
    try {
        const response = await axios.get('http://localhost:3000/dashboard');
        setInformacoes(response.data);
        setProdutos_maior_quantidade(response.data.produtos_maior_quantidade)
    } catch (error) {
        console.error('Erro ao buscar informações:', error);
    }
};

useEffect(() => {
  fetchDashboard();
}, []);

useEffect(() => {
  console.log(informacoes);
}, [informacoes]);



  return (
    <div>
        <Navbar />
        <GraficoProdutos dados={informacoes.produtos_maior_quantidade}/>
    </div>
  )
}

export default Dashboard


