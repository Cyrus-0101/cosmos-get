import express from "express";

import { getAllDescriptions } from "../controllers/descriptionController.js";

const router = express.Router();

router.route("/").get(getAllDescriptions);

export default router;
