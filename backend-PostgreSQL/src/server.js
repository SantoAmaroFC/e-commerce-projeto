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
    password: 'senai', // Substitua pela sua senha
    // password: 'luan', // Substitua pela sua senha
    port: 5433, // Porta padrão do PostgreSQLx
    // port: 5432, // Porta padrão do PostgreSQLx
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
    const { nome, tipo, tamanho, cor, descricao, preco, quantidade } = req.body;
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



app.get('/dashboard', async (req, res) => {
    try {
        const result = await pool.query(`
        SELECT json_build_object(
            'total_itens_cadastrados', (
                SELECT COUNT(*) 
                FROM produto
                ),
                
                'quantidade_total_estoque', (
                    SELECT COALESCE(SUM(quantidade), 0) 
                    FROM produto
                    ),
                    
                    'valor_total_estoque', (
                        SELECT COALESCE(SUM(preco * quantidade), 0) 
                        FROM produto
                        ),
                        
                        'produtos_pouco_estoque', (
                            SELECT COALESCE(json_agg(p), '[]'::json)
                            FROM (
                                SELECT id, nome, tipo, quantidade
                                FROM produto
                                WHERE quantidade <= 15
                                ORDER BY quantidade ASC
                                ) p
                                ),
                                
                                'produtos_por_tipo', (
                                    SELECT COALESCE(json_agg(t), '[]'::json)
                                    FROM (
                                        SELECT tipo, COUNT(*) AS quantidade
                                        FROM produto
                                        GROUP BY tipo
                                        ORDER BY quantidade DESC
                                        LIMIT 10
                                        ) t
                                        ),
                                        
                                        'produtos_por_cor', (
                                            SELECT COALESCE(json_agg(c), '[]'::json)
                                            FROM (
                                                SELECT cor, COUNT(*) AS quantidade
                                                FROM produto
                                                GROUP BY cor
                                                ORDER BY quantidade DESC
                                                LIMIT 10
                                                ) c
                                                ),
                                                
                                                'produtos_maior_quantidade', (
                                                    SELECT COALESCE(json_agg(q), '[]'::json)
                                                    FROM (
                                                        SELECT nome, quantidade
                                                        FROM produto
                                                        ORDER BY quantidade DESC
                                                        LIMIT 10
                                                        ) q
                                                        ),
                                                        
                                                        'produtos_maior_valor_estoque', (
                                                            SELECT COALESCE(json_agg(v), '[]'::json)
                                                            FROM (
                                                                SELECT 
                                                                nome,
                                                                preco * quantidade AS valor_total
                                                                FROM produto
                                                                ORDER BY valor_total DESC
                                                                LIMIT 10
                                                                ) v
                                                                )
                                                                ) AS dashboard
                                                                `);

        res.json(result.rows[0].dashboard);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dados do dashboard' });
    }
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});