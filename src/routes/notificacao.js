const express = require('express');

const router = express.Router();

const notificacaoController = require('../controllers/notificacaoController');
const notificacaoMiddleware = require('../middlewares/notificacaoMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:cnpj',
  authMiddleware,
  notificacaoController.getNotificacoesByEmpresa,
);
router.post(
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.createNotificacao,
);
router.put('/:id',
  authMiddleware,
  notificacaoMiddleware.validateBody,
  notificacaoController.readNotificacao,
);
router.delete('/:id',
  authMiddleware,
  notificacaoController.removeNotificacao,
);
