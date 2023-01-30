const express = require('express');

const router = express.Router();

const interesseController = require('../controllers/interesseController');
const interesseMiddleware = require('../middlewares/interesseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.getInteresse,
);
router.get('/emp/:cnpj',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.getInteresseByEmpresa,
);
router.post('/:id',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.addInteresse,
);
router.delete('/:id',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.removeInteresse,
);
router.put('/aceitar/:id',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.aceitarInteresse,
);
router.put('/rejeitar/:id',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.rejeitarInteresse,
);
