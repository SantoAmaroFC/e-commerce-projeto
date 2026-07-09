import { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

function Cadastro() {

  // Estados que armazenam os valores dos campos do formulário
  const [inputDescricao, setInputDescricao] = useState("")
  const [inputPreco, setInputPreco] = useState("")
  const [inputNome, setInputNome] = useState("")
  const [inputCor, setInputCor] = useState('')
  const [inputQuantidade, setInputQuantidade] = useState("")
  const [inputTipo, setInputTipo] = useState("")
  const [inputTamanho, setInputTamanho] = useState("")

  // Função responsável por enviar os dados para a API
  const cadastrarProduto = async () => {
    try {
      const produto = {
        // Objeto com os dados do produto
        // nome, tipo, tamanho, cor, descricao, preco, quantidade  
        nome: inputNome,
        tipo: inputTipo,
        tamanho: inputTamanho,
        cor: inputCor,
        descricao: inputDescricao,
        preco: inputPreco,
        quantidade: inputQuantidade
      };
      // Requisição POST para cadastrar o produto
      const response = await axios.post('http://localhost:3000/produto', produto);
      // if (response.status === 201) {
      //     fetchProdutos();
      //     limparForm();
      // }
    } catch (error) {
      // Exibe erro caso o cadastro falhe
      console.error('Erro ao adicionar cliente:', error);
    }
  };

  return (
    <div className='cont-cadastro'>

      <p className='cad-text'>Digite o Nome:</p>
      {/* Campo para informar o nome do produto */}
      <input type='text' className='input-cad' placeholder='Digite o Nome do produto'
        value={inputNome} onChange={(e) => setInputNome((e.target.value))}
      />

      <label className='cad-text'>
        Selecione o Tipo:
        {/* Seleção do tipo do produto */}
      </label>
      <select value={inputTipo} onChange={(e) => setInputTipo(e.target.value)} className='input-cad'>
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

      {/* Campo para o tamanho do produto */}
      <p className='cad-text'>Digite o Tamanho do Produto</p>
      <input type='text' className='input-cad' placeholder='Letra ou número'
        value={inputTamanho} onChange={(e) => setInputTamanho((e.target.value))} />

      {/* Campo para cor do produto */}
      <p className='cad-text'>Digite a Cor do Produto</p>
      <input type='text' className='input-cad' placeholder='Digite a Cor Aqui'
        value={inputCor} onChange={(e) => setInputCor((e.target.value))} />

      {/* Campo para descrição do produto */}
      <p className='cad-text'>Digite a Descrição</p>
      <input type='text' className='input-cad' placeholder='Digite a descriçao do produto'
        value={inputDescricao} onChange={(e) => setInputDescricao((e.target.value))}
      />
      {/* Campo para o preço */}
      <p className='cad-text'>Digite o Preço</p>
      <input type='Number' className='input-cad' placeholder='Digite o Preço'
        value={inputPreco} onChange={(e) => setInputPreco((e.target.value))}
      />
      {/* Campo para quantidade em estoque */}
      <p className='cad-text'>Digite a Quantidade:</p>
      <input type='Number' className='input-cad' placeholder='Digite a Quantidade do produto'
        value={inputQuantidade} onChange={(e) => setInputQuantidade((e.target.value))}
      />
      {/* Botão que chama a função de cadastro */}
      <button onClick={cadastrarProduto} className='input-cad'>ENVIAR</button>

    </div>
  )
}

export default Cadastro