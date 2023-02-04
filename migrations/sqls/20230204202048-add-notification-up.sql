CREATE TABLE notificacao_interesse (
    id_post INTEGER,
    cnpj_ong CHAR(14),
    date DATE,
    open? BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_post) REFERENCES post(id),
    FOREIGN KEY (cnpj_ong) REFERENCES ong(cnpj)
);
