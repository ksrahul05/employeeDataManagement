import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();

const db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.error("❌ Database connection error:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

// Ensure employees table exists
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
)`);

export default db;
