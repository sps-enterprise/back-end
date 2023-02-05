ALTER TABLE interesse_post DROP CONSTRAINT status_chk;

ALTER TABLE interesse_post DROP COLUMN status_i;

ALTER TABLE interesse_post DROP CONSTRAINT interesse_unique_chk;

ALTER TABLE interesse_post DROP COLUMN open;
