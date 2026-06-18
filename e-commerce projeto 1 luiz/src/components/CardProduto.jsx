import React from 'react'
import './CardProduto.css'

function CardProduto(prop) {

    return (
        <div className = 'card-Produtos'>
        {/* nome, tipo, tamanho, cor, descricao, preco, quantidade */}
            <p>Nome: {prop.p.nome}</p>
            <p>Tipo: {prop.p.tipo}</p>
            <p>tamanho: {prop.p.tamanho}</p>
            <p>cor: {prop.p.cor}</p>
            <p>descricao: {prop.p.descricao}</p>
            <p>preco: {prop.p.preco}</p>
            <p>quantidade: {prop.p.quantidade}</p>
        </div>
    )
}

export default CardProduto
