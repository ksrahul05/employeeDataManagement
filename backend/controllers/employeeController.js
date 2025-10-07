import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getEmployeeCount,
} from "../models/employeeModel.js";

export const addEmployee = (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position) {
    return res.status(400).json({ message: "Name, Email, and Position are required" });
  }

  createEmployee(name, email, position, (err, employee) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });
    res.status(201).json({ message: "Employee added successfully", data: employee });
  });
};

export const fetchEmployees = (req, res) => {
  getAllEmployees((err, employees) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });
    res.json(employees);
  });
};

export const fetchEmployeeById = (req, res) => {
  getEmployeeById(req.params.id, (err, employee) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  });
};

export const editEmployee = (req, res) => {
  const { name, email, position } = req.body;
  updateEmployee(req.params.id, name, email, position, (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });
    if (result.changes === 0) return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee updated successfully", data: result });
  });
};

export const removeEmployee = (req, res) => {
  deleteEmployee(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ message: "DB error", error: err.message });
    if (result.changes === 0) return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted successfully", data: result });
  });
};
export const getCount = (req, res) => {
  getEmployeeCount((err, count) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch employee count" });
    } else {
      res.status(200).json({ totalEmployees: count });
    }
  });
};