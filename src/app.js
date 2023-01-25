const express = require('express');

const app = express();

const router = require('./routes');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
	origin: '*',
}));

app.use(express.json());

app.use(router);

app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;
