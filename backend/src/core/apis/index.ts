import { Router } from "express";

const router = Router();
import publicRoutes from "./public";
import privateRoutes from "./private";
import { checkAuth } from "@/middlewares";

router.use("/public", publicRoutes);
router.use("/private", checkAuth, privateRoutes);

export default router;
