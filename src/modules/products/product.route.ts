import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:name", ProductControllers.getProductByName);
router.delete("/:name", ProductControllers.deleteProduct);

export const ProductRoutes = router;
