CREATE TABLE notificacao_interesse (
    id SERIAL PRIMARY KEY,
    id_post INTEGER,
    cnpj_ong CHAR(14),
    data DATE,
    open BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_post) REFERENCES post(id),
    FOREIGN KEY (cnpj_ong) REFERENCES ong(cnpj)
);
