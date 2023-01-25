const express = require('express');

const router = express.Router();

const interesseController = require('../controllers/interesseController');
const interesseMiddleware = require('../middlewares/interesseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

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
