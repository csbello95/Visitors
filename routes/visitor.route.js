import express from "express";
import { createVisitor } from "../controllers/visitors.controller.js";
const router = express.Router();

const visitorRoutes = {
  CREATE: "/",
};

router.post(visitorRoutes.CREATE, createVisitor);

export default router;
