const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController.js');
const produtoMiddleware = require('../middlewares/produtoMiddleware.js');

const authMiddleware = require('../middlewares/authMiddleware');
             
router.get('/', produtoController.getAll);
router.get('/:id', produtoController.getProduto);
router.post('/', authMiddleware, produtoMiddleware.validateBody, produtoController.createProduto);
router.delete('/:id', authMiddleware, produtoController.deleteProduto);
router.put('/:id', authMiddleware, produtoMiddleware.validateBody, produtoController.updateProduto,

);

module.exports = router;