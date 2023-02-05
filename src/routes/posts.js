const express = require('express');

const router = express.Router();

const postsControlller = require('../controllers/postsController');
const postsMiddleware = require('../middlewares/postsMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', postsControlller.getAll);
router.get('/:id', postsControlller.getPost);
router.get('/interesse/:cnpj', authMiddleware, postsControlller.getPostsInteresse);
router.post('/', 
  authMiddleware, 
  postsMiddleware.validateBody, 
  // postsMiddleware.validateCNPJ, 
  // postsMiddleware.validateIdProduto, 
  postsControlller.createPost,
);
router.delete('/:id', authMiddleware, postsControlller.deletePost);
router.put('/:id', 
  authMiddleware,
  postsMiddleware.validateBody, 
  // postsMiddleware.validateCNPJ, 
  // postsMiddleware.validateIdProduto, 
  postsControlller.updatePost,
);

module.exports = router;