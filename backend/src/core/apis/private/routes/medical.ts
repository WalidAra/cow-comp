import { Router } from "express";
import { MedicalExamController } from "@/core/controllers/medical.controller";

const router = Router();

router.post("/", MedicalExamController.create);
router.get("/:id", MedicalExamController.getById);
router.get("/", MedicalExamController.getAll);
router.put("/:id", MedicalExamController.update);
router.delete("/:id", MedicalExamController.delete);

export default router;
