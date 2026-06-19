import React from 'react'
import './CardProduto.css'
import axios from "axios"
import { useState, useEffect } from 'react'

function CardProduto(prop) {

    const [editando, setEditando] = useState(false);

    const deletarProduto = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/produto/${id}`);
            if (response.status === 200) {
                prop.fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    };

    // const buscarClientePorId = async (id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:Produto/${id}`);
    //         setClienteSelecionado(response.data);
    //         exibirCliente(response.data);
    //     } catch (error) {
    //         console.error('Erro ao buscar cliente por ID:', error);
    //     }
    // };


    return (
        <div className='card-Produtos'>
                <p>Nome: {prop.p.nome}</p>
                <p>Tipo: {prop.p.tipo}</p>
                <p>tamanho: {prop.p.tamanho}</p>
                <p>cor: {prop.p.cor}</p>
                <p>descricao: {prop.p.descricao}</p>
                <p>preco: {prop.p.preco}</p>
                <p>quantidade: {prop.p.quantidade}</p>
                <button onClick={() => deletarProduto(prop.p.id)}>excluir</button>
                <button onClick={() => setEditando(true)}>editar</button>
        </div>
    )
}

export default CardProduto
