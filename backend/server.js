import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // 🔥 allows requests from React frontend
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
