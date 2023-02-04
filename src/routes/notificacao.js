const express = require('express');

const router = express.Router();

const notificacaoController = require('../controllers/notificacaoController');
const notificacaoMiddleware = require('../middlewares/notificacaoMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/interesse/:cnpj',
  authMiddleware,
  notificacaoController.getNotificacoesByEmpresa,
);
router.post('/interesse',
  authMiddleware,
  notificacaoMiddleware.validateBodyInteresse,
  notificacaoController.addNotificacaoInteresse,
);
router.put('interesse/:id',
  authMiddleware,
  notificacaoController.readNotificacaoInteresse,
);
router.delete('interesse/:id',
  authMiddleware,
  notificacaoController.removeNotificacaoInteresse,
);
router.get('/disponibilidade/:cnpj',
  authMiddleware,
  notificacaoController.getNotificacoesByONG,
);
router.post('/disponibilidade',
  authMiddleware,
  notificacaoMiddleware.validateBodyDisponibilidade,
  notificacaoController.addNotificacaoDisponibilidade,
);
router.post('/disponibilidade/:id',
  authMiddleware,
  notificacaoController.notificarONGsDisponibilidade,
);
router.put('disponibilidade/:id',
  authMiddleware,
  notificacaoController.readNotificacaoDisponibilidade,
);
router.delete('disponibilidade/:id',
  authMiddleware,
  notificacaoController.removeNotificacaoDisponibilidade,
);

module.exports = router;