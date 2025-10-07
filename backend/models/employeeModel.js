import db from "../db.js";

export const createEmployee = (name, email, position, callback) => {
  db.run(
    `INSERT INTO employees (name, email, position) VALUES (?, ?, ?)`,
    [name, email, position],
    function (err) {
      callback(err, { id: this?.lastID, name, email, position });
    }
  );
};

export const getAllEmployees = (callback) => {
  db.all(`SELECT * FROM employees`, [], callback);
};

export const getEmployeeById = (id, callback) => {
  db.get(`SELECT * FROM employees WHERE id = ?`, [id], callback);
};

export const updateEmployee = (id, name, email, position, callback) => {
  db.run(
    `UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?`,
    [name, email, position, id],
    function (err) {
      callback(err, { id, name, email, position, changes: this.changes });
    }
  );
};

export const deleteEmployee = (id, callback) => {
  db.run(`DELETE FROM employees WHERE id = ?`, [id], function (err) {
    callback(err, { id, changes: this.changes });
  });
};
export const getEmployeeCount = (callback) => {
  db.get(`SELECT COUNT(*) AS count FROM employees`, [], (err, row) => {
    if (err) callback(err, null);
    else callback(null, row.count);
  });
};