ALTER TABLE post DROP post_produto_id_fkey;
ALTER TABLE post DROP COLUMN produto_id; 

DROP table produto;

ALTER TABLE post DROP COLUMN quantidade;
ALTER TABLE post DROP COLUMN peso;
ALTER TABLE post DROP COLUMN volume;

CREATE TABLE doacao (
    id SERIAL PRIMARY KEY,
    id_post INT NOT NULL,
    descricao TEXT NOT NULL,
    tipo TEXT NOT NULL,
    quantidade INT,
    peso DECIMAL,
    volume DECIMAL,
    FOREIGN KEY (id_post) REFERENCES post(id),
    CONSTRAINT controle_quantidade_chk CHECK (quantidade IS NOT NULL OR peso IS NOT NULL OR volume IS NOT NULL)
);