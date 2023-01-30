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

-- adicionar a tabela administrador, com as seguintes colunas: nome, email, password
-- CREATE TABLE admin (
--    nome TEXT PRIMARY KEY,
--    email TEXT NOT NULL
--);

-- Post
-- alterar para receber um id de produto
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    cnpj_emp CHAR(14) NOT NULL,
    data_inicio DATE NOT NULL,
    status VARCHAR(10),
    CONSTRAINT status_chk CHECK (status = 'deletado' OR status = 'aberto' OR status = 'finalizado'),
    FOREIGN KEY (cnpj_emp) REFERENCES empresa(cnpj)
);

-- adicionar a tabela produto, com as seguintes colunas: id, nome, descricao, categoria, disponibilidade
-- CREATE TABLE produto (
--    id SERIAL PRIMARY KEY,
--    nome VARCHAR(30) NOT NULL,
--    descricao TEXT NOT NULL,
--    categoria VARCHAR(30) NOT NULL,
--    disponibilidade BOOLEAN NOT NULL
--);

-- adicionar uma tabela para produtos favoritados

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
-- adicionar a coluna: status VARCHAR(10) (status = 'aberto' OR status = 'aceito' OR status = 'rejeitado')
CREATE TABLE interesse_post (
    cnpj_ong char(14) NOT NULL,
    id_post int NOT NULL,
    data_interesse DATE NOT NULL,
    FOREIGN KEY (cnpj_ong) REFERENCES ong(cnpj),
    FOREIGN KEY (id_post) REFERENCES post(id) 
);

-- Adicionar a tabela notificação
--CREATE TABLE notificacao (
--    id SERIAL PRIMARY KEY,
--    cnpj char(14) NOT NULL,
--    mensagem TEXT NOT NULL,
--    lida BOOLEAN NOT NULL,
--    FOREIGN KEY (cnpj) REFERENCES ong(cnpj) OR empresa(cnpj)
--);