import express from "express";

import { getDescription } from "../controllers/decriptionController";

const router = express.Router();

router.route("/").get(getDescription);

export default router;
