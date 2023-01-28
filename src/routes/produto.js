const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produtoController.js');
const produtoMiddleware = require('../middlewares/produtoMiddleware.js');
             
router.get('/', produtoController.getAll);
router.get('/:id', produtoController.getProduto);
router.post('/', produtoMiddleware.validateBody, produtoController.createProduto);
router.delete('/:id', produtoController.deleteProduto);
router.put('/:id', produtoMiddleware.validateBody, produtoController.updateProduto,
);

module.exports = router;