import express from "express";
import { getUsers, addUser, login } from "../controllers/user.controller";
// const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.post("/login", login);

export default router;
