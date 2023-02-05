const express = require('express');

const router = express.Router();

const notificacaoController = require('../controllers/notificacaoController');
const authMiddleware = require('../middlewares/authMiddleware');

// Read interesse by cnpj_ong and id_post (query)
router.put('/',
  authMiddleware,
  notificacaoController.readNotificacao,
);

module.exports = router;
