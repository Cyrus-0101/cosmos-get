import express from "express";
import dotenv from "dotenv";

import descriptionRoutes from "./mvc/routes/descriptionRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/descriptions", descriptionRoutes);

app.use("*", (req, res) => {
  res.json({ message: "API Routes are /api/v1/descriptions" });
});

app.listen(process.env.PORT, () => {
  console.info(`Server is running on port ${process.env.PORT}`);
});
