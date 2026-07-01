import React from 'react'
import './CardProduto.css'
import axios from "axios"
import { useState, useEffect } from 'react'

function CardProduto(prop) {

    const [editando, setEditando] = useState(false);
    const [inputNome, setInputNome] = useState(prop.p.nome);
    const [inputTipo, setInputTipo] = useState(prop.p.tipo);
    const [inputTamanho, setInputTamanho] = useState(prop.p.tamanho);
    const [inputCor, setInputCor] = useState(prop.p.cor);
    const [inputDescricao, setInputDescricao] = useState(prop.p.descricao);
    const [inputPreco, setInputPreco] = useState(prop.p.preco);
    const [inputQuantidade, setInputQuantidade] = useState(prop.p.quantidade);

    const deletarProduto = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/produto/${id}`);
            if (response.status === 200) {
                prop.fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    }

    const salvarProduto = async () => {
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
            const response = await axios.put(`http://localhost:3000/produto/${prop.p.id}`, produto);
            // console.log(response.status);
            
            if (response.status === 200) {
                setEditando(false)
                prop.fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao adicionar cliente:', error);
        }
    };

    return (
        <div className='card-Produtos'>
        {editando ? 
        <div>
                <p>Nome: </p>
                <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)}/>
                <p>Tipo</p>
                <input type="text" value={inputTipo} onChange={(e) => setInputTipo(e.target.value)}/>
                <p>tamanho</p>
                <input type="text" value={inputTamanho} onChange={(e) => setInputTamanho(e.target.value)}/>
                <p>Cor</p>
                <input type="text" value={inputCor} onChange={(e) => setInputCor(e.target.value)}/>
                <p>descricao</p>
                <input type="text" value={inputDescricao} onChange={(e) => setInputDescricao(e.target.value)}/>
                <p>preco</p>
                <input type="number" value={inputPreco} onChange={(e) => setInputPreco(e.target.value)}/>
                <p>quantidade</p>
                <input type="number" value={inputQuantidade} onChange={(e) => setInputQuantidade(e.target.value)}/>
                <button onClick={salvarProduto}>Salvar edição</button>
        </div>
        :
        <div>
                <p>Nome: {prop.p.nome}</p>
                <p>Tipo: {prop.p.tipo}</p>
                <p>tamanho: {prop.p.tamanho}</p>
                <p>cor: {prop.p.cor}</p>
                <p>descricao: {prop.p.descricao}</p>
                <p>preco: {prop.p.preco} R$</p>
                <p>quantidade: {prop.p.quantidade}</p>
                <button onClick={() => deletarProduto(prop.p.id)}>excluir</button>
                <button onClick={() => setEditando(true)}>editar</button>
        </div>
    }
        </div>
        )
}

export default CardProduto
