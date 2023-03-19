import express from "express";
import restaurantsRoutes from "./restaurants.routes";
import chefsRoutes from "./chefs.routes";
import dishesRoutes from "./dishes.routes";
import usersRoutes from "./user.routes";

const router = express.Router();
router.use("/restaurants", restaurantsRoutes);
router.use("/chefs", chefsRoutes);
router.use("/dishes", dishesRoutes);
router.use("/users", usersRoutes);

export default router;
