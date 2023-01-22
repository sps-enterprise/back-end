const express = require('express');

const router = express.Router();

const postsControlller = require('../controllers/postsController');
const postsMiddleware = require('../middlewares/postsMiddleware');

router.get('/', postsControlller.getAll);
router.get('/:id', postsControlller.getPost);
router.post('/', 
  postsMiddleware.validateBody, 
  postsMiddleware.validateCNPJ, 
  postsMiddleware.validateIdProduto, 
  postsControlller.createPost,
);
router.delete('/:id', postsControlller.deletePost);
router.put('/:id', 
  postsMiddleware.validateBody, 
  postsMiddleware.validateCNPJ, 
  postsMiddleware.validateIdProduto, 
  postsControlller.updatePost,
);

module.exports = router;