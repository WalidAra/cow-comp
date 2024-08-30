import { Router } from "express";
const router = Router();
import cowRoutes from "./routes/cow";
import birthRoutes from "./routes/birth";
import medicalRoutes from "./routes/medical";
import dailyProduction from "./routes/dailyProduction";

router.use("/cows", cowRoutes);
router.use("/births", birthRoutes);
router.use("/medical", medicalRoutes);
router.use("/dailyProduction", dailyProduction);

export default router;
