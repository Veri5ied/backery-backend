const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/product");

router.post("/", productCtrl.createProduct);
router.delete("/:id", productCtrl.deleteProduct);
router.put("/:id", productCtrl.updateProduct);
router.get("/", productCtrl.findProducts);
router.get("/:id", productCtrl.findAProduct);

module.exports = router;
