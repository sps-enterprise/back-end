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
  notificacaoController.addNotificacao,
);
router.put('/:id',
  authMiddleware,
  notificacaoController.readNotificacao,
);
router.delete('/:id',
  authMiddleware,
  notificacaoController.removeNotificacao,
);