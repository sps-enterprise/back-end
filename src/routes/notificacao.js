const express = require('express');

const router = express.Router();

const notificacaoController = require('../controllers/notificacaoController');
const notificacaoMiddleware = require('../middlewares/notificacaoMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:cnpj',
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.getNotificacoes,
);
router.post('/:cnpj',
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.addNotificacao,
);
router.put('/:id',
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.readNotificacao,
);
router.delete('/:id',
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.removeNotificacao,
);