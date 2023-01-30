DROP TABLE doacao;

ALTER TABLE post ADD quantidade INTEGER;
ALTER TABLE post ADD peso REAL;
ALTER TABLE post ADD volume REAL;

CREATE TABLE produto (
   id SERIAL PRIMARY KEY,
   nome VARCHAR(30) NOT NULL,
   descricao TEXT NOT NULL,
   categoria VARCHAR(30) NOT NULL,
   disponibilidade BOOLEAN NOT NULL
);

ALTER TABLE post ADD produto_id INTEGER;
ALTER TABLE post ADD FOREIGN KEY (produto_id) REFERENCES produto(id);