-- Empresa
CREATE TABLE empresa (
    cnpj CHAR(14) PRIMARY KEY,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    telefone CHAR(11) NOT NULL,
    email TEXT NOT NULL
);

-- ONG
CREATE TABLE ong (
    cnpj CHAR(14) PRIMARY KEY,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    telefone CHAR(11)  NOT NULL,
    email TEXT NOT NULL
);

-- Post
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    cnpj_emp CHAR(14) NOT NULL,
    data_inicio DATE NOT NULL,
    status VARCHAR(10),
    CONSTRAINT status_chk CHECK (status = 'deletado' OR status = 'aberto' OR status = 'finalizado'),
    FOREIGN KEY (cnpj_emp) REFERENCES empresa(cnpj)
);

-- Doacao
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

-- Interesse Post
CREATE TABLE interesse_post (
    cnpj_ong char(14) NOT NULL,
    id_post int NOT NULL,
    data_interesse DATE NOT NULL,
    FOREIGN KEY (cnpj_ong) REFERENCES ong(cnpj),
    FOREIGN KEY (id_post) REFERENCES post(id) 
);

