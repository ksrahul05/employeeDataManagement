import express from "express";
import {
  addEmployee,       // POST /api/employees
  fetchEmployees,    // GET /api/employees
  fetchEmployeeById, // GET /api/employees/:id
  editEmployee,      // PUT /api/employees/:id
  removeEmployee, 
  getCount,   // DELETE /api/employees/:id
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/count", getCount);
router.post("/", addEmployee);
router.get("/", fetchEmployees);
router.get("/:id", fetchEmployeeById);
router.put("/:id", editEmployee);
router.delete("/:id", removeEmployee);

export default router;
