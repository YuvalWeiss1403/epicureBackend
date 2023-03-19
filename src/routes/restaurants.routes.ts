import express from "express";
import {
	getRests,
	addRest,
	deleteRest,
	updateRest,
} from "../controllers/restaurants.controller";
const router = express.Router();

router.get("/", getRests);
router.post("/", addRest);
router.put("/:restId", updateRest);
router.delete("/", deleteRest);

export default router;
