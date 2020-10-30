const express = require("express");
const productCtrl = require("../controllers/product");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, productCtrl.createProduct);
router.delete("/:id", auth, productCtrl.deleteProduct);
router.put("/:id", auth, productCtrl.updateProduct);
router.get("/", auth, productCtrl.findProducts);
router.get("/:id", auth, productCtrl.findAProduct);

module.exports = router;
