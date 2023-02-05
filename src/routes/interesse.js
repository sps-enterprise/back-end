const express = require('express');

const router = express.Router();

const interesseController = require('../controllers/interesseController');
const interesseMiddleware = require('../middlewares/interesseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// ONGs endpoints

// Get interesse by cnpj_ong and id_post (query)
router.get('/',
  authMiddleware,
  interesseController.getInteresse,
);

// Get interesses from cnpj_ong (param)
router.get('/ong/:cnpj_ong/',
  authMiddleware,
  interesseController.getInteresseByOng,
);

// Create interesse (body)
router.post('/',
  authMiddleware,
  interesseMiddleware.validateBody,
  interesseController.addInteresse,
);

// Remove interesse by cnpj_ong and id_post (query)
router.delete('/',
  authMiddleware,
  interesseController.removeInteresse,
);

// Empresas endpoints

// Accept interesse by cnpj_ong and id_post (query)
router.put('/aceitar/',
  authMiddleware,
  interesseController.aceitarInteresse,
);

// Reject interesse by cnpj_ong and id_post (query)
router.put('/rejeitar/',
  authMiddleware,
  interesseController.rejeitarInteresse,
);

// Get interesses from cnpj_emp (param)
router.get('/emp/:cnpj_emp/',
  authMiddleware,
  interesseController.getInteresseByEmpresa,
);

module.exports = router;
