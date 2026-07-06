import './Paginas.css'
import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import './Dashboard.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

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
      setProdutos_maior_valor_estoque(response.data.produtos_maior_valor_estoque)
      setProdutos_por_cor(response.data.produtos_por_cor)
      setProdutos_por_tipo(response.data.produtos_por_tipo)
      setProdutos_pouco_estoque(response.data.produtos_pouco_estoque)
      setQuantidade_total_estoque(response.data.quantidade_total_estoque)
      setTotal_itens_cadastrados(response.data.total_itens_cadastrados)
      setValor_total_estoque(response.data.valor_total_estoque)
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
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#a4de6c', '#d0ed57', '#83a6ed'];
  
  return (
    <div>
        <Navbar />

        <section className="cont-parag">
          <p>Quantidade total em estoque: {quantidade_total_estoque} itens</p>
          <p>Quantidade total de produtos cadastrados: {total_itens_cadastrados} produtos</p>
          <p>Valor total em estoque: {valor_total_estoque} R$</p>
        </section>

        <section className="pagina">

        <div className="grafico" >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Produtos com maior quantidade</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        {/* 2. Passamos 'dados' diretamente para o BarChart */}
        <BarChart
          data={produtos_maior_quantidade} 
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          
          <XAxis 
            type="number" 
            tick={{ fill: '#666' }}
            />
          
          <YAxis 
            dataKey="nome" 
            type="category" 
            tick={{ fill: '#333', fontSize: 12 }}
            width={130}
            />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            formatter={(value) => [`${value} unidades`, 'Quantidade']}
            />
          
          <Bar dataKey="quantidade" radius={[0, 4, 4, 0]}>
            {/* 3. Mapeamos diretamente da prop 'dados' */}
            {produtos_maior_quantidade.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    
        <div className="grafico">
      <h2 style={{ textAlign: 'center', color: '#333' }}>Produtos com maior valor de estoque</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        {/* 2. Passamos 'dados' diretamente para o BarChart */}
        <BarChart
          data={produtos_maior_valor_estoque} 
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          
          <XAxis 
            type="number" 
            tick={{ fill: '#666' }}
            />
          
          <YAxis 
            dataKey="nome" 
            type="category" 
            tick={{ fill: '#333', fontSize: 12 }}
            width={130}
            />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            formatter={(value) => [`${value} unidades`, 'valor_total']}
            />
          
          <Bar dataKey="valor_total" radius={[0, 4, 4, 0]}>
            {/* 3. Mapeamos diretamente da prop 'dados' */}
            {produtos_maior_valor_estoque.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    
        <div className="grafico" >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Produtos separados por cor</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        {/* 2. Passamos 'dados' diretamente para o BarChart */}
        <BarChart
          data={produtos_por_cor} 
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          
          <XAxis 
            type="number" 
            tick={{ fill: '#666' }}
            />
          
          <YAxis 
            dataKey="cor" 
            type="category" 
            tick={{ fill: '#333', fontSize: 12 }}
            width={130}
            />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            formatter={(value) => [`${value} itens`, 'Quantidade']}
            />
          
          <Bar dataKey="quantidade" radius={[0, 4, 4, 0]}>
            {/* 3. Mapeamos diretamente da prop 'dados' */}
            {produtos_por_cor.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    
        <div className="grafico" >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Produtos separados por tipo</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        {/* 2. Passamos 'dados' diretamente para o BarChart */}
        <BarChart
          data={produtos_por_tipo} 
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          
          <XAxis 
            type="number" 
            tick={{ fill: '#666' }}
            />
          
          <YAxis 
            dataKey="tipo" 
            type="category" 
            tick={{ fill: '#333', fontSize: 12 }}
            width={130}
            />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            formatter={(value) => [`${value} unidades`, 'Quantidade']}
            />
          
          <Bar dataKey="quantidade" radius={[0, 4, 4, 0]}>
            {/* 3. Mapeamos diretamente da prop 'dados' */}
            {produtos_por_tipo.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    
    <div className="lista">
  <h2 style={{ textAlign: "center", color: "#333" }}>
    Produtos com pouco estoque
  </h2>

  <div className="lista-produtos">
    {produtos_pouco_estoque.length > 0 ? (
      produtos_pouco_estoque.map((produto, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            marginBottom: "10px",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
            borderLeft: `6px solid ${COLORS[index % COLORS.length]}`,
          }}
        >
          <h5>{produto.tipo}</h5>
          <h5>{produto.quantidade} unidades</h5>
        </div>
      ))
    ) : (
      <p>Nenhum produto com pouco estoque.</p>
    )}
  </div>
</div>
    </section>
    </div>
  )
}

export default Dashboard