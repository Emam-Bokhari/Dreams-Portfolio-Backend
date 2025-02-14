import express from "express";
import { DashboardControllers } from "./dashboard.controller";

const router = express.Router();

router.get("/overview", DashboardControllers.getDashboardDataController)

export const DashboardRoutes = router;