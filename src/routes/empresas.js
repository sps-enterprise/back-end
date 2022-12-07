const express = require('express');

const router = express.Router();

const empresasController = require('../controllers/empresasController');
const empresasMiddleware = require('../middlewares/empresasMiddleware');

router.get('/list', empresasController.getAll);
router.post('/create', empresasMiddleware.validateBody, empresasController.createEmpresa);
router.delete('/delete/:id', empresasController.deleteEmpresa);
router.put('/delete/:id', empresasMiddleware.validateBody, empresasController.updateEmpresa);

module.exports = router;