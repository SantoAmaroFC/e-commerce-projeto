const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    // user: 'postgre', // Substitua pelo seu usuário do PostgreSQL
    // user: 'senai', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'AURA_OUTFIT', // Nome da sua database
    // password: 'senai', // Substitua pela sua senha
    password: 'senai', // Substitua pela sua senha
    port: 5433, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os produto
app.get('/produto', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produto');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

// Rota para buscar um produto por ID
app.get('/produto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM produto WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

// Rota para adicionar um cliente
app.post('/produto', async (req, res) => {
    const { nome, tipo, tamanho, cor, descricao, preco, quantidade} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO produto (nome, tipo, tamanho, cor, descricao, preco, quantidade) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nome, tipo, tamanho, cor, descricao, preco, quantidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
});

// Rota para atualizar um cliente
app.put('/produto/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, tipo, tamanho, cor, descricao, preco, quantidade } = req.body;
    try {
        const result = await pool.query(
            'UPDATE produto SET nome = $1, tipo = $2, tamanho = $3, cor = $4, descricao = $5, preco = $6, quantidade = $7, id = $8 WHERE id = $8 RETURNING *',
            [nome, tipo, tamanho, cor, descricao, preco, quantidade, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// Rota para deletar um cliente
app.delete('/produto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM produto WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'produto não encontrado' });
        }
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

