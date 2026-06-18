CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.produto(
	id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR(100) NOT NULL,
	tipo VARCHAR(10) NOT NULL,
	tamanho VARCHAR(10) NOT NULL,
	cor VARCHAR(100) NOT NULL,
	descricao VARCHAR(1000) NOT NULL,
	preco NUMERIC(10,2) NOT NULL,
	quantidade INT NOT NULL	
);

SELECT * FROM produto

Tabela do pgAdmin para salvar os produtos no banco de dados