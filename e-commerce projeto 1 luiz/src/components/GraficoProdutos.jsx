import {useState} from 'react';
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

// Seus dados estruturados

// Paleta de cores degradê opcional para deixar o visual moderno
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#a4de6c', '#d0ed57', '#83a6ed'];

export default function GraficoProdutos({dados}) {
    const [data, setData] = useState(dados)
    // setData(dados)
  return (
    <div style={{ width: '100%', height: 500, fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Produtos com Maior Quantidade</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical" // Deixa o gráfico horizontal (ideal para nomes longos)
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
            width={130} // Ajuste a largura se algum nome for muito longo
          />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            formatter={(value) => [`${value} unidades`, 'Quantidade']}
          />
          
          <Bar dataKey="quantidade" radius={[0, 4, 4, 0]}>
            {data && data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}