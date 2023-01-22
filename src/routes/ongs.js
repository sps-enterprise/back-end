const express = require('express');

const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const ongsController = require('../controllers/ongsController');
const ongsMiddleware = require('../middlewares/ongsMiddleware');

router.get('/', ongsController.getAll);
router.get('/:cnpj', authMiddleware, ongsController.getONG);
router.post('/', ongsMiddleware.validateFieldTitle, ongsController.createONG);
router.delete('/:cnpj', authMiddleware, ongsController.deleteONG);
router.put('/:cnpj',
  authMiddleware,
  ongsMiddleware.validateFieldTitle,
  ongsMiddleware.validateFieldStatus,
  ongsController.updateONG,
);
router.post('/authenticate', ongsController.loginONG);

module.exports = router;