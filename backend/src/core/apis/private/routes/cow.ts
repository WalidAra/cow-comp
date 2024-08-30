import { Router } from "express";
import { CowController } from "@/core/controllers/cow.controller";

const router = Router();

router.post("/", CowController.create);
router.get("/:id", CowController.getById);
router.get("/", CowController.getAll);
router.put("/:id", CowController.update);
router.delete("/:id", CowController.delete);

export default router;
