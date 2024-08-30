// routes/dailyProductionRoutes.ts
import { Router } from "express";
import { DailyProductionController } from "@/core/controllers/dailyProduction.controoler";

const router = Router();

router.post("/", DailyProductionController.create);
router.get("/:id", DailyProductionController.getById);
router.get("/", DailyProductionController.getAll);
router.put("/:id", DailyProductionController.update);
router.delete("/:id", DailyProductionController.delete);

export default router;
