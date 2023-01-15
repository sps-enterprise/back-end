const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/", adminController.getAll);
router.get("/:email", adminController.getAdmin);
router.post("/", adminMiddleware.validateBody, adminController.createAdmin);
router.delete("/:email", adminController.deleteAdmin);
router.put(
  "/:email",
  adminMiddleware.validateBody,
  adminController.updateAdmin
);

module.exports = router;
