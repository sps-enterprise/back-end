const express = require('express');

const router = express.Router();

const favoritoController = require('../controllers/favoritoController');
const favoritoMiddleware = require('../middlewares/favoritoMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', 
  authMiddleware, 
  favoritoMiddleware.validateBody,
  favoritoController.getFavorito,
);
router.get('/prod/:id', 
  authMiddleware, 
  favoritoController.getFavoritosByProduto,
);
router.post('/:id', 
  authMiddleware, 
  favoritoMiddleware.validateBody,
  favoritoController.addFavorito,
);
router.delete('/:id', 
  authMiddleware, 
  favoritoMiddleware.validateBody,
  favoritoController.removeFavorito,
);

module.exports = router;