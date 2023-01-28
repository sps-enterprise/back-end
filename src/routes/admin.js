const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/", adminController.getAll);
router.get("/:email", authMiddleware, adminController.getAdmin);
router.post("/", adminMiddleware.validateBody, adminController.createAdmin);
router.delete("/:email", authMiddleware, adminController.deleteAdmin);
router.put(
  "/:email",
  authMiddleware,
  adminMiddleware.validateBody,
  adminController.updateAdmin
);
router.post('/authenticate', adminController.loginAdmin);

module.exports = router;
