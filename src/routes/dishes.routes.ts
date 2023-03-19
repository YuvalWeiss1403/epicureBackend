import express from "express";
import {
	getDishes,
	addDish,
	deleteDish,
	updateDish,
} from "../controllers/dishes.controller";
const router = express.Router();

router.get("/", getDishes);
router.post("/", addDish);
router.put("/", updateDish);
router.delete("/", deleteDish);

export default router;
