import { refresh, login } from "@/core/controllers";
import express from "express";
const router = express.Router();

router.get("/refresh", refresh);
router.post("/login", login);

export default router;
