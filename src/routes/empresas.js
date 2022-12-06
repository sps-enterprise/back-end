const express = require('express');

const router = express.Router();

const empresasController = require('../controllers/empresasController');
const empresasMiddleware = require('../middlewares/empresasMiddleware');

router.get('/', empresasController.getAll);
router.post('/', empresasMiddleware.validateBody, empresasController.createEmpresa);
router.delete('/:id', empresasController.deleteEmpresa);
router.put('/:id', empresasMiddleware.validateBody, empresasController.updateEmpresa);

module.exports = router;