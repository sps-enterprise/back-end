const express = require('express');

const router = express.Router();

const empresasController = require('../controllers/empresasController');
const empresasMiddleware = require('../middlewares/empresasMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', empresasController.getAll);
router.get('/:cnpj', authMiddleware, empresasController.getEmpresa);
router.post('/', empresasMiddleware.validateBody, empresasController.createEmpresa);
router.delete('/:cnpj', authMiddleware, empresasController.deleteEmpresa);
router.put('/:cnpj', authMiddleware, empresasMiddleware.validateBody, empresasController.updateEmpresa);
router.post('/authenticate', empresasController.loginEmpresa);

module.exports = router;