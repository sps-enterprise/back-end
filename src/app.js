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

<<<<<<< HEAD
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
=======
app.use(bodyParser.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
>>>>>>> 6b78d09376f9b04d518df5bed23a1dc740d6c346

module.exports = app;
