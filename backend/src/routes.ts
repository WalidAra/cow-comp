import express from "express";
import { checkHealth } from "@/middlewares";
import api from "@/core/apis";
const router = express.Router();

router.get("/health", checkHealth);
router.use("/api", api);

export default router;
