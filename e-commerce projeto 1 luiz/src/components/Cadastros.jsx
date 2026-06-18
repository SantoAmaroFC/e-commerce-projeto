import { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

function Cadastro() {
  const [inputDescricao, setDescricao] = useState("") 
  const [inputPreco, setPreco] = useState("")
  const [inputNome, setNome] = useState("")
  const [inputCor, setCor] = useState('')
  const [inputQuantidade, setQuantidade] = useState("")
  const [inputTipo, setTipo] = useState("")
  const [inputTamanho, setTamanho] = useState("")

  const cadastrarProduto = async () => {
    try {
        const produto = {
          // nome, tipo, tamanho, cor, descricao, preco, quantidade  
          nome: inputNome,
          tipo: inputTipo,
          tamanho: inputTamanho,
          cor: inputCor,
          descricao: inputDescricao,
          preco: inputPreco,
          quantidade: inputQuantidade
        };
        const response = await axios.post('http://localhost:3000/produto', produto);
        // if (response.status === 201) {
        //     fetchProdutos();
        //     limparForm();
        // }
    } catch (error) {
        console.error('Erro ao adicionar cliente:', error);
    }
};

  return (
    <div className='cont-cadastro'>

      <p className='cad-text'>Digite o Nome:</p>
      <input type='text' className='input-cad' placeholder='Digite o Nome do produto'
        value={inputNome} onChange={(e) => setNome((e.target.value))}

      />

      <label className='cad-text'>
        Selecione o tipo:
          </label>
      <select value = {inputTipo} onChange = {(e) => setTipo(e.target.value)} className='input-cad'>
        <option value="">tipo</option>
        <option value="">Acessório</option>
        <option value="Camisa">Camisa</option>
        <option value="Blusa">Blusa</option>
        <option value="Calça">Calça</option>
        <option value="Short">Short</option>
        <option value="Cinto">Cinto</option>
        <option value="Meia">Meia</option>
        <option value="Sapato">Sapato</option>
      </select>
      <label className='cad-text'>
        Selecione o Tamanho:
          </label>
      <select value = {inputTamanho} onChange = {(e) => setTamanho(e.target.value)} className='input-cad'
      >
        <option value="">Tamanho</option>
        <option value="PP">PP</option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
        <option value="GG">GG</option>
        <option value="XGG">XGG</option>
        <option value="XXGG">XXGG</option>
      </select>

      <label className='cad-text'>
        <p className='cad-text'> Selecione a cor:</p>
      </label>
      <select value={inputCor} onChange={(e) => setCor(e.target.value)}className='input-cad'
      >
        <option value="">Cor</option>
        <option value="Preto">Preto</option>
        <option value="Branco">Branco</option>
        <option value="Marrom">Marrom</option>
        <option value="Cinza">Cinza</option>

      </select>
      <p className='cad-text'>Digite a descrição</p>
      <input type='text' className='input-cad' placeholder='Digite a descriçao do produto'
        value = {inputDescricao} onChange={(e) => setDescricao((e.target.value))}
      />

      <p className='cad-text'>Digite o Preço</p>
      <input type='Number' className='input-cad' placeholder='Digite o Preço'
        value = {inputPreco} onChange={(e) => setPreco((e.target.value))}
      />

<p className='cad-text'>Digite o quantidade:</p>
      <input type='Number' className='input-cad' placeholder='Digite o Nome do produto'
        value = {inputQuantidade} onChange={(e) => setQuantidade((e.target.value))}
      />

      <button onClick = {cadastrarProduto} className='input-cad'>ENVIAR</button>

    </div>
  )
}

export default Cadastro