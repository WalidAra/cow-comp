import { Router } from "express";
import { BirthController } from "@/core/controllers/birth.controller";

const router = Router();

router.post("/", BirthController.create);
router.get("/:id", BirthController.getById);
router.get("/", BirthController.getAll);
router.put("/:id", BirthController.update);
router.delete("/:id", BirthController.delete);

export default router;
