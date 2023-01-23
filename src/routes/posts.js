const express = require('express');

const router = express.Router();

const postsControlller = require('../controllers/postsController');
const postsMiddleware = require('../middlewares/postsMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', postsControlller.getAll);
router.get('/:id', postsControlller.getPost);
router.post('/', 
  authMiddleware, 
  postsMiddleware.validateBody, 
  postsMiddleware.validateCNPJ, 
  postsMiddleware.validateIdProduto, 
  postsControlller.createPost,
);
router.delete('/:id', authMiddleware, postsControlller.deletePost);
router.put('/:id', 
  authMiddleware,
  postsMiddleware.validateBody, 
  postsMiddleware.validateCNPJ, 
  postsMiddleware.validateIdProduto, 
  postsControlller.updatePost,
);
router.put('/:id', //é realmente put ou é post?
  authMiddleware,
  postsMiddleware.validateBody,  //precisa verificar se o id_post e cpnj_ong são válidos?
  postsControlller.addInteresse,
);
router.delete('/:id',
  authMiddleware,
  postsMiddleware.validateBody,  //precisa verificar se o id_post e cpnj_ong são válidos?
  postsControlller.removeInteresse,
);

module.exports = router;