import express from "express";
import { getChefs, addChef, deleteChef } from "../controllers/chefs.controller";
const router = express.Router();

router.get("/", getChefs);
router.post("/", addChef);
router.delete("/", deleteChef);

export default router;
