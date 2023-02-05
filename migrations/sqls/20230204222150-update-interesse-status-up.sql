ALTER TABLE interesse_post ADD status_i VARCHAR(10) DEFAULT 'pendente';

ALTER TABLE interesse_post ADD CONSTRAINT status_chk CHECK (status_i = 'pendente' OR status_i = 'aceito' OR status_i = 'negado');

ALTER TABLE interesse_post ADD CONSTRAINT interesse_unique_chk UNIQUE(cnpj_ong, id_post);

ALTER TABLE interesse_post ADD open BOOLEAN DEFAULT FALSE;
