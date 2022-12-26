const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
	host: process.env.POSTGRES_HOST || 'localhost',
	port: process.env.POSTGRES_PORT || 5432,
	user: process.env.POSTGRES_USER || 'postgres',
	password: process.env.POSTGRES_PASSWORD || 'password',
	database: process.env.POSTGRES_DATABASE || 'sps-enterprise',
});

const exec = async (q, v) => {
	try{
		const res = await client.query(q, v);
		return res;
	} catch (err){
		throw err;
	}
};

module.exports = {
	exec,
	connect: () => client.connect(),
};
