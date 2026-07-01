import { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

function Cadastro() {
  const [inputDescricao, setInputDescricao] = useState("") 
  const [inputPreco, setInputPreco] = useState("")
  const [inputNome, setInputNome] = useState("")
  const [inputCor, setInputCor] = useState('')
  const [inputQuantidade, setInputQuantidade] = useState("")
  const [inputTipo, setInputTipo] = useState("")
  const [inputTamanho, setInputTamanho] = useState("")

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
        value={inputNome} onChange={(e) => setInputNome((e.target.value))}

      />

      <label className='cad-text'>
        Selecione o Tipo:
          </label>
      <select value = {inputTipo} onChange = {(e) => setInputTipo(e.target.value)} className='input-cad'>
        <option value="">Tipo</option>
        <option value="Acessório">Acessório</option>
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
      <select value = {inputTamanho} onChange = {(e) => setInputTamanho(e.target.value)} className='input-cad'
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
        <p className='cad-text'> Selecione a Cor:</p>
      </label>
      <select value={inputCor} onChange={(e) => setInputCor(e.target.value)}className='input-cad'
      >
        <option value="">Cor</option>
        <option value="Preto">Preto</option>
        <option value="Branco">Branco</option>
        <option value="Marrom">Marrom</option>
        <option value="Cinza">Cinza</option>

      </select>
      <p className='cad-text'>Digite a Descrição</p>
      <input type='text' className='input-cad' placeholder='Digite a descriçao do produto'
        value = {inputDescricao} onChange={(e) => setInputDescricao((e.target.value))}
      />

      <p className='cad-text'>Digite o Preço</p>
      <input type='Number' className='input-cad' placeholder='Digite o Preço'
        value = {inputPreco} onChange={(e) => setInputPreco((e.target.value))}
      />

<p className='cad-text'>Digite a Quantidade:</p>
      <input type='Number' className='input-cad' placeholder='Digite a Quantidade do produto'
        value = {inputQuantidade} onChange={(e) => setInputQuantidade((e.target.value))}
      />

      <button onClick = {cadastrarProduto} className='input-cad'>ENVIAR</button>

    </div>
  )
}

export default Cadastro