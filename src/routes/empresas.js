const express = require('express');

const router = express.Router();

const empresasController = require('../controllers/empresasController');
const empresasMiddleware = require('../middlewares/empresasMiddleware');

router.get('/', empresasController.getAll);
router.get('/:cnpj', empresasController.getEmpresa);
router.post('/', empresasMiddleware.validateBody, empresasController.createEmpresa);
router.delete('/:cnpj', empresasController.deleteEmpresa);
router.put('/:cnpj', empresasMiddleware.validateBody, empresasController.updateEmpresa);

module.exports = router;